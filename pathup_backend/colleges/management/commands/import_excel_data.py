import pandas as pd
from django.core.management.base import BaseCommand
from django.db import transaction
from django.utils.text import slugify
import math
import re

from colleges.models import (
    University, College, Stream, Specialization, Degree, Course, CollegeCourse
)

class Command(BaseCommand):
    help = 'Import college and course data from Excel file'

    def add_arguments(self, parser):
        parser.add_argument('excel_file', type=str, help='Path to the Excel file')

    def is_nan(self, value):
        """Check if a value is NaN, None, or an empty string."""
        if value is None:
            return True
        if isinstance(value, float) and math.isnan(value):
            return True
        if isinstance(value, str) and str(value).strip() == '':
            return True
        return False

    def clean_string(self, value):
        if self.is_nan(value):
            return ""
        return str(value).strip()

    def handle(self, *args, **kwargs):
        excel_file_path = kwargs['excel_file']

        try:
            self.stdout.write(self.style.WARNING(f"Loading Excel file: {excel_file_path}"))
            xls = pd.ExcelFile(excel_file_path)
            
            # 1. Process Colleges Sheet
            if 'colleges' in xls.sheet_names:
                self.process_colleges(xls.parse('colleges'))
            else:
                self.stdout.write(self.style.ERROR("Warning: 'colleges' sheet not found in Excel file."))

            # 2. Process Courses Sheet
            if 'courses' in xls.sheet_names:
                self.process_courses(xls.parse('courses'))
            else:
                self.stdout.write(self.style.ERROR("Warning: 'courses' sheet not found in Excel file."))

            self.stdout.write(self.style.SUCCESS("Data import completed successfully!"))

        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Error reading Excel file: {str(e)}"))

    @transaction.atomic
    def process_colleges(self, df):
        self.stdout.write(self.style.SUCCESS(f"Processing {len(df)} rows from 'colleges' sheet..."))
        
        created_count = 0
        updated_count = 0

        for index, row in df.iterrows():
            try:
                # Core required fields
                college_name = self.clean_string(row.get('colleges'))
                if not college_name:
                    continue  # Skip empty rows

                # Optional string fields
                aicte_id = self.clean_string(row.get('aicte_id'))
                if aicte_id:
                     match = re.search(r'1-\d+', aicte_id)
                     if match:
                          aicte_id = match.group(0)

                state = self.clean_string(row.get('state'))
                district = self.clean_string(row.get('district'))
                address = self.clean_string(row.get('adress')) # Spelling from your image
                institution_type = self.clean_string(row.get('institution_type'))
                
                # Numeric fields (Handle NaNs)
                rating = None
                if not self.is_nan(row.get('Rating')):
                    try:
                        rating = float(row.get('Rating'))
                    except ValueError:
                        pass

                # Handle University
                university_name = self.clean_string(row.get('university'))
                university_obj = None
                if university_name:
                    university_obj, _ = University.objects.get_or_create(
                        name=university_name,
                        defaults={'location': state} # Guessing state as location
                    )

                # Determine ownership 
                ownership_type = 'Private'
                if institution_type.lower() == 'government':
                    ownership_type = 'Government'
                elif 'aided' in institution_type.lower():
                    ownership_type = 'Aided'

                # Upsert College Logic
                filters = {}
                if aicte_id:
                    filters['aicte_id'] = aicte_id
                else:
                    filters['name'] = college_name

                # Update dictionary
                update_defaults = {
                    'name': college_name,
                    'state': state,
                    'district': district,
                    'city': address[:100] if address else '', # Storing address in city for now
                    'ownership_type': ownership_type,
                    'university': university_obj,
                }
                if rating is not None:
                    update_defaults['rating'] = rating
                if aicte_id:
                    update_defaults['aicte_id'] = aicte_id

                college_obj, created = College.objects.update_or_create(
                    **filters,
                    defaults=update_defaults
                )

                if created:
                    created_count += 1
                else:
                    updated_count += 1

            except Exception as e:
                self.stdout.write(self.style.ERROR(f"Error processing college row {index}: {str(e)}"))
        
        self.stdout.write(self.style.SUCCESS(f"Colleges sheet done! Created: {created_count}, Updated: {updated_count}"))

    @transaction.atomic
    def process_courses(self, df):
        self.stdout.write(self.style.SUCCESS(f"Processing {len(df)} rows from 'courses' sheet..."))
        
        created_count = 0
        updated_count = 0

        for index, row in df.iterrows():
            try:
                # 1. Identify the College
                aicte_id = self.clean_string(row.get('aicte_id'))
                if aicte_id:
                     match = re.search(r'1-\d+', aicte_id)
                     if match:
                          aicte_id = match.group(0)

                # If we have an AICTE ID, find college by that. Otherwise, skip.
                if not aicte_id:
                     continue
                
                try:
                    college = College.objects.get(aicte_id=aicte_id)
                except College.DoesNotExist:
                     self.stdout.write(self.style.WARNING(f"College with AICTE {aicte_id} not found. Skipping course."))
                     continue

                # 2. Extract Course Metadata
                programme_name = self.clean_string(row.get('programme'))
                level = self.clean_string(row.get('level'))
                degree_name = self.clean_string(row.get('course_name'))
                specialization_name = self.clean_string(row.get('Specializations'))

                if not degree_name or not specialization_name:
                    continue

                # 3. Handle Relationships (Stream, Degree, Specialization, Course)
                stream_obj, _ = Stream.objects.get_or_create(name=programme_name)
                
                degree_obj, _ = Degree.objects.get_or_create(name=degree_name)
                
                specialization_obj, _ = Specialization.objects.get_or_create(
                    name=specialization_name,
                    defaults={'stream': stream_obj}
                )

                course_obj, _ = Course.objects.get_or_create(
                    degree=degree_obj,
                    specialization=specialization_obj
                )

                # 4. Extract Intakes/Metrics
                intake = None
                if not self.is_nan(row.get('intake')):
                    try:
                        intake = int(row.get('intake'))
                    except ValueError:
                        pass
                
                duration = None
                if not self.is_nan(row.get('duration')):
                    try:
                         duration = float(row.get('duration'))
                    except ValueError:
                         pass

                # 5. Upsert CollegeCourse linking
                cc_obj, created = CollegeCourse.objects.update_or_create(
                    college=college,
                    course=course_obj,
                    defaults={
                        'aicte_id': aicte_id,
                        'seat_intake': intake,
                        'course_duration': duration,
                    }
                )
                
                if created:
                    created_count += 1
                else:
                    updated_count += 1
                    
            except Exception as e:
                self.stdout.write(self.style.ERROR(f"Error processing course row {index}: {str(e)}"))

        self.stdout.write(self.style.SUCCESS(f"Courses sheet done! Created: {created_count}, Updated: {updated_count}"))
