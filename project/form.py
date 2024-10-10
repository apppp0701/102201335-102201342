from django import forms
from .models import *

class ProjectForm(forms.ModelForm):
    name = forms.CharField(max_length=100)
    description = forms.CharField(max_length=100)
    register = forms.CharField(min_length=2)
    project_end = forms.DateField()
    project_num = forms.IntegerField()
    project_goal = forms.CharField(min_length=2, max_length=200)
    project_need = forms.CharField(min_length=2, max_length=200)

    class Meta:
        model = Project
        fields = ['name', 'description', 'register', 'project_end', 'project_num', 'project_goal', 'project_need']