# Generated by Django 2.2.7 on 2019-11-23 00:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_demo', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='is_published',
            new_name='published_at',
        ),
    ]
