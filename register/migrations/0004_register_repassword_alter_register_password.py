# Generated by Django 5.1.1 on 2024-10-06 12:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0003_alter_register_major'),
    ]

    operations = [
        migrations.AddField(
            model_name='register',
            name='repassword',
            field=models.CharField(blank=True, default=' ', max_length=100, null=True, verbose_name='确认密码'),
        ),
        migrations.AlterField(
            model_name='register',
            name='password',
            field=models.CharField(blank=True, default=' ', max_length=100, null=True, verbose_name='密码'),
        ),
    ]
