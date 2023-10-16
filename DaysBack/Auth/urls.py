from django.urls import path

from Auth.views import RegisterView, UserView, SetCoursesView
from rest_framework.authtoken import views

urlpatterns = [
    path('register', RegisterView.as_view(), name='register'),
    path('login', views.obtain_auth_token, name='login'),
    path('user', UserView.as_view(), name='user'),
    path('set-courses', SetCoursesView.as_view(), name='set_courses'),
]
