# Generated by Django 2.2.7 on 2019-11-22 23:57

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(choices=[('HB', 'Hobbit'), ('LOTR', 'Lord of the rings'), ('HAT', 'Here and there')], default=('HAT', 'Here and there'), max_length=36, unique=True)),
                ('description', models.TextField(blank=True, max_length=256)),
                ('price', models.DecimalField(decimal_places=2, default=0, max_digits=4)),
                ('discount', models.FloatField(default=1)),
                ('quantity', models.IntegerField(default=1)),
                ('something', models.BigIntegerField(default=0)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('published', models.DateField(default=django.utils.timezone.now)),
                ('is_published', models.BooleanField(default=True)),
                ('file', models.FileField(null=True, upload_to='files/')),
                ('cover', models.ImageField(null=True, upload_to='covers/')),
            ],
        ),
    ]