import csv
from django.core.management.base import BaseCommand
from colleges.models import College, Course, CollegeCourse
from django.db import transaction

class Command(BaseCommand):
    help = 'Bulk imports colleges and their courses from a CSV file'

    def add_arguments(self, parser):
        parser.add_argument('csv_file_path', type=str, help='The path to the CSV file to be imported')

    def handle(self, *args, **kwargs):
        csv_file_path = kwargs['csv_file_path']

        try:
            with open(csv_file_path, mode='r', encoding='utf-8') as file:
                reader = csv.DictReader(file)
                
                # We use a transaction so if one row fails, it doesn't leave a half-finished database
                with transaction.atomic():
                    for row in reader:
                        # 1. Create or Get the College
                        college, created = College.objects.get_or_create(
                            name=row.get('College Name', '').strip(),
                            location=row.get('Location', '').strip(),
                            defaults={
                                'description': row.get('Description', ''),
                                'established_year': int(row['Established Year']) if row.get('Established Year') and row['Established Year'].isdigit() else None,
                                'university_affiliation': row.get('University Affiliation', ''),
                                'is_government_or_private': row.get('Type (Govt/Private/Aided)', 'Private'),
                                'website_url': row.get('Website', ''),
                                'email': row.get('Email', ''),
                                'phone_number': row.get('Phone', ''),
                                'has_hostel': row.get('Has Hostel', '').lower() in ['yes', 'true', '1'],
                                'has_wifi': row.get('Has Wifi', '').lower() in ['yes', 'true', '1'],
                                'rating': float(row['Rating']) if row.get('Rating') else None,
                            }
                        )
                        
                        # 2. Create or Get the Course (So we don't duplicate "Computer Science" 100 times)
                        course, created = Course.objects.get_or_create(
                            name=row.get('Course Name (e.g. B.Tech)', '').strip(),
                            specialization=row.get('Specialization', '').strip(),
                            defaults={
                                'degree_level': row.get('Degree Level (UG/PG)', 'UG').strip(),
                                'stream': row.get('Stream (e.g. Engineering)', '').strip(),
                                'duration_years': int(row['Duration (Years)']) if row.get('Duration (Years)') and row['Duration (Years)'].isdigit() else 4,
                            }
                        )
                        
                        # 3. Create the Mapping between College and Course
                        CollegeCourse.objects.get_or_create(
                            college=college,
                            course=course,
                            defaults={
                                'total_seats_available': int(row['Total Seats']) if row.get('Total Seats') and row['Total Seats'].isdigit() else None,
                                'entrance_exam_required': row.get('Entrance Exam', ''),
                                'tuition_fee': int(row['Tuition Fee']) if row.get('Tuition Fee') and row['Tuition Fee'].isdigit() else 0,
                                'hostel_fee': int(row['Hostel Fee']) if row.get('Hostel Fee') and row['Hostel Fee'].isdigit() else None,
                            }
                        )
                        
            self.stdout.write(self.style.SUCCESS(f'Successfully imported data from {csv_file_path}'))
            
        except Exception as e:
            self.stdout.write(self.style.ERROR(f'Error importing data: {e}'))
