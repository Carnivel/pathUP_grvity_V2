import csv
from django.core.management.base import BaseCommand
from colleges.models import College, Course, CollegeCourse, Degree, Specialization, Stream
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
                            city=row.get('Location', '').strip(),
                            state=row.get('Location', '').strip(),
                            defaults={
                                'established_year': int(row['Established Year']) if row.get('Established Year') and row['Established Year'].isdigit() else None,
                                'ownership_type': row.get('Type (Govt/Private/Aided)', 'Private'),
                                'website_url': row.get('Website', ''),
                                'email': row.get('Email', ''),
                                'phone_number': row.get('Phone', ''),
                                'rating': float(row['Rating']) if row.get('Rating') else None,
                            }
                        )
                        
                        stream_name = row.get('Stream (e.g. Engineering)', '').strip()
                        stream, _ = Stream.objects.get_or_create(name=stream_name if stream_name else "Unknown Array")

                        specialization_name = row.get('Specialization', '').strip()
                        specialization, _ = Specialization.objects.get_or_create(
                            name=specialization_name if specialization_name else "Unknown Spec",
                            defaults={'stream': stream}
                        )

                        degree_name = row.get('Course Name (e.g. B.Tech)', '').strip()
                        degree, _ = Degree.objects.get_or_create(name=degree_name if degree_name else "Unknown Degree")
                        
                        # 2. Create or Get the Course
                        course, created = Course.objects.get_or_create(
                            degree=degree,
                            specialization=specialization,
                            defaults={
                                'duration_years': float(row['Duration (Years)']) if row.get('Duration (Years)') and row['Duration (Years)'].isdigit() else 4.0,
                            }
                        )
                        
                        # 3. Create the Mapping between College and Course
                        CollegeCourse.objects.get_or_create(
                            college=college,
                            course=course,
                            defaults={
                                'seat_intake': int(row['Total Seats']) if row.get('Total Seats') and row['Total Seats'].isdigit() else None,
                                'tuition_fee': float(row['Tuition Fee']) if row.get('Tuition Fee') and row['Tuition Fee'].isdigit() else 0.0,
                                'hostel_fee': float(row['Hostel Fee']) if row.get('Hostel Fee') and row['Hostel Fee'].isdigit() else None,
                            }
                        )
                        
            self.stdout.write(self.style.SUCCESS(f'Successfully imported data from {csv_file_path}'))
            
        except Exception as e:
            self.stdout.write(self.style.ERROR(f'Error importing data: {e}'))
