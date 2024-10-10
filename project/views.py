from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.http import JsonResponse
from project.models import Project
from django.views.decorators.csrf import *
from project.form import ProjectForm
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.
def project_list(request):
    projects = Project.objects.all()
    pl = list(projects.values())
    return JsonResponse(pl, safe=False)

def project_detail(request, pk):
    project = Project.objects.filter(pk=pk)
    pd = list(project.values())[0]
    return JsonResponse(pd)

@csrf_exempt
@require_http_methods(["POST"])
def project_create(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        form = ProjectForm(data)
        if form.is_valid():
            name = form.cleaned_data['name']
            description = form.cleaned_data['description']
            register = form.cleaned_data['register']
            project_end = form.cleaned_data['project_end']
            project_num = form.cleaned_data['project_num']
            project_goal = form.cleaned_data['project_goal']
            project_need = form.cleaned_data['project_need']
            Project.objects.create(name=name, description=description, register=register,
                                   project_end=project_end, project_num=project_num,
                                   project_goal=project_goal, project_need=project_need)
            return JsonResponse({'code': 200, 'message': '创建项目成功'})
        else:
            return JsonResponse({'code': 400, 'message': '创建项目失败', 'errors': form.errors})



@require_http_methods(["GET"])
def csrf(request):
    csrf_token = request.COOKIES.get('csrftoken')
    return JsonResponse({'csrfToken': csrf_token})