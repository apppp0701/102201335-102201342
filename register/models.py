from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Register(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,verbose_name="用户")
    name = models.CharField(max_length=100,verbose_name="姓名")
    phone = models.CharField(max_length=100,verbose_name="手机号码")
    university = models.CharField(max_length=100,verbose_name="学校")
    college = models.CharField(max_length=100,verbose_name="学院")
    student_number = models.CharField(max_length=100,verbose_name="学号")
    major = models.CharField(max_length=100,blank=True, null=True,default=' ',verbose_name="专业")
    password = models.CharField(max_length=100,blank=True, null=True,default=' ', verbose_name="密码")
    repassword = models.CharField(max_length=100,blank=True, null=True,default=' ', verbose_name="确认密码")
    def __str__(self):
        return self.name