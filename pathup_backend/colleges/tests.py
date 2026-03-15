from django.test import TestCase, Client
from django.core.cache import cache
from unittest.mock import patch, MagicMock
from colleges.models import College, University, Course, Degree, Specialization, Stream
from colleges.tasks import calculate_trending_scores
import datetime

class SmartRankingLogicTests(TestCase):
    def setUp(self):
        # Create minimal DB setup
        self.stream = Stream.objects.create(name="Engineering")
        self.specialization = Specialization.objects.create(name="Computer Science", stream=self.stream)
        self.degree = Degree.objects.create(name="B.Tech")
        self.course = Course.objects.create(degree=self.degree, specialization=self.specialization)
        self.uni = University.objects.create(name="Test University")
        
        self.c1 = College.objects.create(name="College 1", city="Pune", state="Maharashtra", rating=4.5, university=self.uni)
        self.c2 = College.objects.create(name="College 2", city="Mumbai", state="Maharashtra", rating=3.0, university=self.uni)

    @patch('colleges.views.get_redis_connection')
    def test_api_view_increments_redis(self, mock_get_redis):
        client = Client()
        mock_redis = MagicMock()
        mock_get_redis.return_value = mock_redis
        
        # Test 1: Hit API, expect Redis HINCRBY
        res = client.get(f'/api/colleges/{self.c1.slug}/')
        self.assertEqual(res.status_code, 200)
        
        today = datetime.date.today().isoformat()
        expected_key = f"college:views:daily:{today}"
        
        # Confirm Redis logic was called
        mock_redis.hincrby.assert_called_once_with(expected_key, str(self.c1.id), 1)
        
        # Test 2: Hit API immediately again from same IP, expect Anti-Abuse guard to block it
        mock_redis.reset_mock()
        res = client.get(f'/api/colleges/{self.c1.slug}/')
        self.assertEqual(res.status_code, 200)
        mock_redis.hincrby.assert_not_called()

    @patch('colleges.tasks.get_redis_connection')
    def test_calculate_trending_scores(self, mock_get_redis):
        mock_redis = MagicMock()
        mock_get_redis.return_value = mock_redis
        
        # Mocking hgetall to return fake view counts for "today"
        # Since it loops over 8 days, we'll return {b'1': b'100'} for today, and {} for others
        def side_effect_hgetall(key):
            if datetime.date.today().isoformat() in key:
                return {str(self.c1.id).encode(): b'100', str(self.c2.id).encode(): b'20'}
            return {}
            
        mock_redis.hgetall.side_effect = side_effect_hgetall
        
        calculate_trending_scores()
        
        # Verify the pipeline was constructed
        self.assertTrue(mock_redis.pipeline.called)
        pipeline = mock_redis.pipeline.return_value
        
        # The key assertion: Did it call ZADD for the global and city pipelines?
        pipeline.zadd.assert_any_call('rankings:trending:global', {str(self.c1.id): (4.5 * 50) + (100 * 30), str(self.c2.id): (3.0 * 50) + (20 * 30)})
        pipeline.zadd.assert_any_call('rankings:trending:city:pune', {str(self.c1.id): (4.5 * 50) + (100 * 30)})
        self.assertTrue(pipeline.execute.called)

    @patch('colleges.views.get_redis_connection')
    def test_trending_api_endpoint(self, mock_get_redis):
        client = Client()
        mock_redis = MagicMock()
        mock_get_redis.return_value = mock_redis
        
        # Mock ZREVRANGE to return our college IDs
        mock_redis.zrevrange.return_value = [str(self.c2.id).encode('utf-8'), str(self.c1.id).encode('utf-8')]
        
        res = client.get('/api/colleges/trending/')
        self.assertEqual(res.status_code, 200)
        
        data = res.json()
        self.assertEqual(data['count'], 2)
        # Verify hydration maintained the mocked exact sorted order (c2 then c1)
        self.assertEqual(data['results'][0]['id'], self.c2.id)
        self.assertEqual(data['results'][1]['id'], self.c1.id)
        
        # Test City filter parameter
        mock_redis.reset_mock()
        mock_redis.zrevrange.return_value = [str(self.c1.id).encode('utf-8')]
        res = client.get('/api/colleges/trending/?city=pune')
        self.assertEqual(res.status_code, 200)
        mock_redis.zrevrange.assert_called_with('rankings:trending:city:pune', 0, 9)
