from django.db import models


# Create your models here.
class Course(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    level = models.CharField(max_length=20)  # Например, "beginner", "intermediate", "advanced"

    def __str__(self):
        return self.name


class Lesson(models.Model):
    name = models.CharField(max_length=255)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    text_material = models.TextField()  # Текстовый материал урока
    order = models.PositiveIntegerField()  # Номер урока в рамках курса
    video_url = models.URLField(blank=True, null=True)  # URL-ссылка на видеоматериал
    image = models.ImageField(upload_to='lesson_images/', blank=True, null=True)  # Фотоматериал
    pdf_document = models.FileField(upload_to='lesson_pdfs/', blank=True, null=True)  # PDF-инструкция

    def __str__(self):
        return self.name

