from django.db import models
from register.models import Register

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=100,verbose_name='项目名称')
    description = models.CharField(max_length=100, blank=True, null=True, default='暂无',verbose_name='项目描述')
    register = models.CharField(max_length=100, verbose_name='项目负责人')
    project_end = models.DateField(blank=True, null=True, verbose_name='项目截止日期')
    project_num = models.SmallIntegerField(default=0,verbose_name='项目人数')
    project_goal = models.CharField(max_length=100, blank=True, null=True, default='暂无',verbose_name='项目目标')
    project_need = models.CharField(max_length=100, blank=True, null=True, default='暂无',verbose_name='项目需求')


    def __str__(self):
        return self.name

    def is_valid(self):
        pass

