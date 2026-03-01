from django.db import models

class College(models.Model):
    GOVT_OR_PVT_CHOICES = [
        ('Government', 'Government'),
        ('Private', 'Private'),
        ('Aided', 'Aided'),
    ]

    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    established_year = models.IntegerField(blank=True, null=True)
    university_affiliation = models.CharField(max_length=255, blank=True, null=True)
    is_government_or_private = models.CharField(max_length=50, choices=GOVT_OR_PVT_CHOICES)
    
    website_url = models.URLField(max_length=500, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    phone_number = models.CharField(max_length=50, blank=True, null=True)
    
    has_hostel = models.BooleanField(default=False)
    has_wifi = models.BooleanField(default=False)
    # logo_image = models.ImageField(upload_to='colleges/logos/', blank=True, null=True) # Needs Pillow, keeping simple for now
    rating = models.DecimalField(max_digits=3, decimal_places=1, blank=True, null=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True)

    def save(self, *args, **kwargs):
        from django.utils.text import slugify
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} - {self.location}"

class Course(models.Model):
    name = models.CharField(max_length=100) # e.g. B.Tech, B.A, MBA
    specialization = models.CharField(max_length=200) # e.g. Computer Science, Economics
    degree_level = models.CharField(max_length=50) # e.g. UG, PG, Diploma
    stream = models.CharField(max_length=100) # e.g. Engineering, Arts, Management
    duration_years = models.IntegerField()

    def __str__(self):
        return f"{self.name} in {self.specialization}"

class CollegeCourse(models.Model):
    college = models.ForeignKey(College, on_delete=models.CASCADE, related_name='offered_courses')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='colleges_offering')
    
    total_seats_available = models.IntegerField(blank=True, null=True)
    entrance_exam_required = models.CharField(max_length=100, blank=True, null=True)
    
    tuition_fee = models.IntegerField(help_text="Per year tuition fee")
    hostel_fee = models.IntegerField(blank=True, null=True, help_text="Per year hostel fee")

    def __str__(self):
        return f"{self.college.name} - {self.course.name} ({self.course.specialization})"
