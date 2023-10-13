from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from rest_framework import permissions

from CoursesApi.models import Course


# Create your models here.
class User(AbstractUser):
    class Role(models.TextChoices):
        TEACHER = 'Teacher'
        STUDENT = 'Student'
        MANAGER = 'Manager'

    username = models.EmailField(unique=True, null=True)
    password = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200, choices=Role.choices, default=Role.STUDENT)
    courses = models.ManyToManyField(Course, related_name='students', blank=True)  # Добавляем поле courses
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class IsStudent(permissions.BasePermission):
    def has_permission(self, request, view):
        # Проверяем, что пользователь авторизован и имеет роль "студент"
        return request.user.is_authenticated and request.user.role == User.Role.STUDENT


class IsManager(permissions.BasePermission):
    def has_permission(self, request, view):
        # Проверяем, что пользователь авторизован и имеет роль "менеджер"
        return request.user.is_authenticated and request.user.role == User.Role.MANAGER
