# Generated by Django 4.1.7 on 2023-03-09 03:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_assento_disponivel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assento',
            name='disponivel',
            field=models.BooleanField(default=True),
        ),
    ]
