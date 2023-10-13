from django.urls import path

from rest_framework.authtoken import views
from CoursesApi.views import *

urlpatterns = [
    path('courses/', CourseView.as_view(), name='course-list'),  # Список всех курсов и создание нового курса
    path('courses/<int:course_id>/', CourseDetailView.as_view(), name='course-detail'), # Отображение, обновление и удаление конкретного курса
    path('lessons/', LessonList.as_view(), name='lesson-list'),  # Список всех уроков и создание нового урока
    path('lessons/<int:lesson_id>/', LessonDetail.as_view(), name='lesson-detail'),# Отображение, обновление и удаление конкретного урока
    path('courses/<int:course_id>/lessons/', LessonListByCourse.as_view(), name='lesson-list-by-course'),
    path('courses/<int:course_id>/lessons/<int:lesson_id>/', LessonDetailByCourse.as_view(), name='lesson-detail-by-course'),
]
