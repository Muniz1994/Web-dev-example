from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DiceMemberSerializer
from .models import DiceMember

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = DiceMemberSerializer
    queryset = DiceMember.objects.all()
