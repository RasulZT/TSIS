from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Course, Lesson
from .serializers import CourseSerializer, LessonSerializer  # Подставьте свой сериализатор
from rest_framework.permissions import AllowAny, IsAuthenticated


class CourseView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CourseDetailView(APIView):
    permission_classes = [AllowAny]

    def get_object(self, course_id):
        try:
            return Course.objects.get(id=course_id)
        except Course.DoesNotExist:
            return None

    def get(self, request, course_id):
        course = self.get_object(course_id)
        if course is not None:
            serializer = CourseSerializer(course)
            return Response(serializer.data)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, course_id):
        course = self.get_object(course_id)
        if course is not None:
            serializer = CourseSerializer(course, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, course_id):
        course = self.get_object(course_id)
        if course is not None:
            course.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)


class LessonList(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        lessons = Lesson.objects.all()
        serializer = LessonSerializer(lessons, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = LessonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LessonDetail(APIView):
    permission_classes = [AllowAny]

    def get_object(self, lesson_id):
        try:
            return Lesson.objects.get(id=lesson_id)
        except Lesson.DoesNotExist:
            return None

    def get(self, request, lesson_id):
        lesson = self.get_object(lesson_id)
        if lesson is not None:
            serializer = LessonSerializer(lesson)
            return Response(serializer.data)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, lesson_id):
        lesson = self.get_object(lesson_id)
        if lesson is not None:
            serializer = LessonSerializer(lesson, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, lesson_id):
        lesson = self.get_object(lesson_id)
        if lesson is not None:
            lesson.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)


class LessonListByCourse(APIView):
    permission_classes = [AllowAny]

    def get(self, request, course_id):
        lessons = Lesson.objects.filter(course=course_id)
        serializer = LessonSerializer(lessons, many=True)
        return Response(serializer.data)


# Для получения отдельного урока по ID
class LessonDetailByCourse(APIView):
    permission_classes = [AllowAny]

    def get(self, request, course_id, lesson_id):
        try:
            lesson = Lesson.objects.get(course=course_id, id=lesson_id)
            serializer = LessonSerializer(lesson)
            return Response(serializer.data)
        except Lesson.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
