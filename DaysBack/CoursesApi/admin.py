from django.contrib import admin

from CoursesApi.models import Course, Lesson


# Register your models here.
class CourseAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'level')


admin.site.register(Course, CourseAdmin)


class LessonAdmin(admin.ModelAdmin):
    list_display = ('name', 'course', 'order')
    list_filter = ('course', 'order')
    search_fields = ('name', 'text_material')


admin.site.register(Lesson, LessonAdmin)
