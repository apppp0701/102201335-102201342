from .views import project_list, project_detail, project_create, csrf
from django.urls import path

urlpatterns = [
    # http://localhost:8000/api/project/list/
    path('list/', project_list, name='project_list'),
    path('detail/<pk>/', project_detail, name='project_detail'),
    path('create/', project_create, name='project_create'),
    path('csrf/', csrf, name='csrf'),
]