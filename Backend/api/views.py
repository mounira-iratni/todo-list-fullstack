from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Category, Task
from .serializers import CategorySerializer, TaskSerializer
from django.http import JsonResponse


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

def health(request):
    return JsonResponse({"status": "ok"})


def trigger_error(request):
    """ Une vue concue pour creer une erreur 500 pour tester Sentry."""
    division_by_zero = 1 / 0
    return JsonResponse({"this" : "will never be returned  "} )

