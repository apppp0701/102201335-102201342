# Generated by Django 5.1.1 on 2024-10-07 08:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0004_project_project_end'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='register',
            field=models.CharField(max_length=100, verbose_name='项目负责人'),
        ),
    ]
