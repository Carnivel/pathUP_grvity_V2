from django.db import models
from django.utils.text import slugify
from .image_utils import optimize_image

class University(models.Model):
    name = models.CharField(max_length=255, db_index=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    established_year = models.IntegerField(blank=True, null=True)

    class Meta:
        ordering = ['name']
        verbose_name_plural = 'Universities'

    def __str__(self):
        return self.name

class Facility(models.Model):
    name = models.CharField(max_length=100, unique=True)
    
    class Meta:
        ordering = ['name']
        verbose_name_plural = 'Facilities'

    def __str__(self):
        return self.name

class Accreditation(models.Model):
    body_name = models.CharField(max_length=100) # e.g. NAAC, NBA
    grade = models.CharField(max_length=50) # e.g. A++, A
    
    class Meta:
        ordering = ['body_name', 'grade']

    def __str__(self):
        return f"{self.body_name} - {self.grade}"

class EntranceExam(models.Model):
    name = models.CharField(max_length=100, unique=True, db_index=True)
    description = models.TextField(blank=True, null=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True, db_index=True)

    class Meta:
        ordering = ['name']

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            slug = base_slug
            counter = 1
            while EntranceExam.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Stream(models.Model):
    name = models.CharField(max_length=100, unique=True, db_index=True) # e.g. Engineering, Arts
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True, db_index=True)

    class Meta:
        ordering = ['name']

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            slug = base_slug
            counter = 1
            while Stream.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Specialization(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    stream = models.ForeignKey(Stream, on_delete=models.CASCADE, related_name='specializations', null=True, blank=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True, db_index=True)

    class Meta:
        ordering = ['name']

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            slug = base_slug
            counter = 1
            while Specialization.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} ({self.stream.name})"

class Degree(models.Model):
    name = models.CharField(max_length=50, unique=True, db_index=True) # e.g. B.Tech, MBA
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True, db_index=True)

    class Meta:
        ordering = ['name']

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            slug = base_slug
            counter = 1
            while Degree.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Course(models.Model):
    degree = models.ForeignKey(Degree, on_delete=models.CASCADE, related_name='courses', null=True, blank=True)
    specialization = models.ForeignKey(Specialization, on_delete=models.CASCADE, related_name='courses', null=True, blank=True)
    duration_years = models.DecimalField(max_digits=4, decimal_places=1, default=4.0) # e.g., 4.0 or 3.5
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True, db_index=True)

    class Meta:
        ordering = ['degree__name', 'specialization__name']
        unique_together = ('degree', 'specialization')

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(f"{self.degree.name} {self.specialization.name}")
            slug = base_slug
            counter = 1
            while Course.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.degree.name} in {self.specialization.name}"

class PublishedCollegeManager(models.Manager):
    """Custom manager that returns only completed/published colleges for public APIs."""
    def get_queryset(self):
        return super().get_queryset().filter(status='completed')


class College(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('completed', 'Completed'),
    ]

    GOVT_OR_PVT_CHOICES = [
        ('Government', 'Government'),
        ('Private', 'Private'),
        ('Aided', 'Aided'),
    ]

    name = models.CharField(max_length=255, db_index=True)
    aicte_id = models.CharField(max_length=50, unique=True, blank=True, null=True, db_index=True)
    city = models.CharField(max_length=100, db_index=True, default='')
    district = models.CharField(max_length=100, db_index=True, blank=True, null=True)
    state = models.CharField(max_length=100, db_index=True, default='')
    country = models.CharField(max_length=100, default="India")
    
    established_year = models.IntegerField(blank=True, null=True)
    university = models.ForeignKey(University, on_delete=models.SET_NULL, null=True, blank=True, related_name='colleges')
    
    ownership_type = models.CharField(max_length=50, choices=GOVT_OR_PVT_CHOICES, db_index=True, default='Private')
    
    website_url = models.URLField(max_length=500, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    phone_number = models.CharField(max_length=50, blank=True, null=True)
    
    rating = models.DecimalField(max_digits=3, decimal_places=1, blank=True, null=True, db_index=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True, db_index=True)

    logo = models.ImageField(upload_to='colleges/logos/', blank=True, null=True, help_text="Upload the college logo here.")

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft', db_index=True)

    # Relationships
    accreditations = models.ManyToManyField(Accreditation, blank=True, related_name='colleges')
    facilities = models.ManyToManyField(Facility, blank=True, related_name='colleges')

    # Managers — 'objects' stays default so existing code doesn't break
    objects = models.Manager()
    published = PublishedCollegeManager()

    class Meta:
        ordering = ['name']
        indexes = [
            models.Index(fields=['name']),
            models.Index(fields=['state']),
            models.Index(fields=['status']),
        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            slug = base_slug
            counter = 1
            while College.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug

        # Auto-optimize logo: resize to 200x200 square, convert to WebP, name with college slug
        if self.logo and hasattr(self.logo, 'file'):
            result = optimize_image(self.logo, max_size=(200, 200), quality=85, is_logo=True)
            if result:
                _, new_content = result
                college_slug = self.slug or slugify(self.name)
                new_name = f"{college_slug}-logo.webp"
                self.logo.save(new_name, new_content, save=False)

        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} - {self.city}, {self.state}"

class CollegeImage(models.Model):
    college = models.ForeignKey(College, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='colleges/images/')
    caption = models.CharField(max_length=255, blank=True, null=True)
    is_primary = models.BooleanField(default=False)

    class Meta:
        ordering = ['-is_primary', 'id']

    def save(self, *args, **kwargs):
        # Auto-optimize gallery images: resize to max 1200x800, convert to WebP
        # Auto-name with college slug + image number
        if self.image and hasattr(self.image, 'file'):
            result = optimize_image(self.image, max_size=(1200, 800), quality=80, is_logo=False)
            if result:
                _, new_content = result
                college_slug = self.college.slug or slugify(self.college.name)
                # Count existing images for this college to generate a sequential number
                existing_count = CollegeImage.objects.filter(college=self.college).exclude(pk=self.pk).count()
                img_number = existing_count + 1
                new_name = f"{college_slug}-{img_number}.webp"
                self.image.save(new_name, new_content, save=False)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Image for {self.college.name}"

class CollegeCourse(models.Model):
    college = models.ForeignKey(College, on_delete=models.CASCADE, related_name='offered_courses', null=True, blank=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='colleges_offering', null=True, blank=True)
    aicte_id = models.CharField(max_length=50, blank=True, null=True, db_index=True)
    
    seat_intake = models.IntegerField(blank=True, null=True)
    entrance_exam = models.ForeignKey(EntranceExam, on_delete=models.SET_NULL, null=True, blank=True, related_name='required_for_courses')
    entrance_exam_requirements = models.TextField(blank=True, null=True)
    cutoff_rank = models.CharField(max_length=100, blank=True, null=True)
    
    course_duration = models.DecimalField(max_digits=4, decimal_places=1, blank=True, null=True, help_text="Duration in years")
    
    tuition_fee = models.DecimalField(max_digits=10, decimal_places=2, help_text="Per year tuition fee", db_index=True, default=0.0)
    hostel_fee = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True, help_text="Per year hostel fee")

    placement_rate = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True, help_text="0-100 percentage")
    average_salary = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    highest_salary = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)

    class Meta:
        unique_together = ('college', 'course')
        ordering = ['college__name', 'course__degree__name']
        indexes = [
            models.Index(fields=['tuition_fee']),
        ]

    def __str__(self):
        return f"{self.college.name} - {self.course}"

class Skill(models.Model):
    skill_name = models.CharField(max_length=200, db_index=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['skill_name']

    def __str__(self):
        return self.skill_name

class Career(models.Model):
    career_name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True, db_index=True)
    description = models.TextField(blank=True, null=True)
    industry_sector = models.CharField(max_length=200, blank=True, null=True)
    average_salary_range = models.CharField(max_length=150, blank=True, null=True)
    demand_growth_rate = models.CharField(max_length=100, blank=True, null=True)
    future_outlook = models.TextField(blank=True, null=True)
    
    courses = models.ManyToManyField('Course', related_name='careers', blank=True)
    skills = models.ManyToManyField('Skill', related_name='careers', blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['career_name']

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.career_name)
            slug = base_slug
            counter = 1
            while Career.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

    def __str__(self):
        return self.career_name

class Job(models.Model):
    job_title = models.CharField(max_length=200, db_index=True)
    associated_career = models.ForeignKey(Career, on_delete=models.CASCADE, related_name='jobs', null=True, blank=True)
    average_salary_range = models.CharField(max_length=150, blank=True, null=True)
    industry_demand_level = models.CharField(max_length=100, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['job_title']

    def __str__(self):
        return self.job_title

class Placement(models.Model):
    college_course = models.ForeignKey(CollegeCourse, on_delete=models.CASCADE, related_name='placements', null=True, blank=True)
    average_salary = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    highest_salary = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    placement_percentage = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True, help_text="0-100 percentage")
    major_recruiters = models.TextField(blank=True, null=True, help_text="Comma-separated company names")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-placement_percentage']

    def __str__(self):
        return f"Placements for {self.college_course}"

class StudentReview(models.Model):
    ROLE_CHOICES = [
        ('Student', 'Student'),
        ('Alumni', 'Alumni'),
    ]

    college_reference = models.ForeignKey(College, on_delete=models.CASCADE, related_name='reviews', null=True, blank=True)
    course_reference = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True, blank=True, related_name='reviews')
    
    rating_score = models.DecimalField(max_digits=3, decimal_places=1, help_text="Overall rating", db_index=True, default=0.0)
    rating_faculty = models.DecimalField(max_digits=3, decimal_places=1, blank=True, null=True)
    rating_placement = models.DecimalField(max_digits=3, decimal_places=1, blank=True, null=True)
    rating_infrastructure = models.DecimalField(max_digits=3, decimal_places=1, blank=True, null=True)
    rating_campus_life = models.DecimalField(max_digits=3, decimal_places=1, blank=True, null=True)
    
    review_text = models.TextField(default='')
    reviewer_role = models.CharField(max_length=50, choices=ROLE_CHOICES, default='Student')
    year_of_study_or_graduation = models.IntegerField(blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Review for {self.college_reference.name} by {self.reviewer_role}"
