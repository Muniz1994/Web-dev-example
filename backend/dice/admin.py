from django.contrib import admin
from .models import DiceMember

# Register your models here.
class DiceMemberAdmin(admin.ModelAdmin):
    list_display = ('name',)

admin.site.register(DiceMember, DiceMemberAdmin)
