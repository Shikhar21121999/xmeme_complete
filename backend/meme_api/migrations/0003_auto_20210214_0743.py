# Generated by Django 3.1.6 on 2021-02-14 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meme_api', '0002_auto_20210212_1337'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meme',
            name='url',
            field=models.URLField(max_length=100000, null=True),
        ),
    ]
