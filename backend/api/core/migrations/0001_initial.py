# Generated by Django 4.1.7 on 2023-03-06 18:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Empresa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('endereco', models.CharField(max_length=100)),
                ('contato', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Passagem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('numero_documento', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Viagem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('horario_saida', models.DateTimeField()),
                ('duracao', models.TimeField()),
                ('classe', models.CharField(max_length=100)),
                ('valor', models.FloatField()),
                ('origem', models.CharField(max_length=100)),
                ('destino', models.CharField(max_length=100)),
                ('assentos_indisponiveis', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Reserva',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('formaPagamento', models.CharField(max_length=50)),
                ('numero_documento', models.CharField(max_length=50)),
                ('numero_contato', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
                ('assentos', models.CharField(max_length=50)),
                ('passagens', models.ManyToManyField(to='core.passagem')),
                ('viagem', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='core.viagem')),
            ],
        ),
    ]
