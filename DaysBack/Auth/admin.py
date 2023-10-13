from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ('username', 'name', 'role')
    list_filter = ('role',)
    search_fields = ('username', 'name')
    ordering = ('-date_joined',)


admin.site.register(User, CustomUserAdmin)
