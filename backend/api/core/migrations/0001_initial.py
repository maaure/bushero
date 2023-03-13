# Generated by Django 4.1.7 on 2023-03-09 17:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ClasseViagem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name_plural': 'ClassesViagem',
            },
        ),
        migrations.CreateModel(
            name='Compainha',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('endereco', models.CharField(max_length=100)),
                ('contato', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Municipio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('uf', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Passagem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_passageiro', models.CharField(max_length=100)),
                ('numero_documento', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Viagem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('horario_saida', models.DateTimeField()),
                ('duracao', models.TimeField()),
                ('valor', models.FloatField()),
                ('origem', models.CharField(max_length=100)),
                ('destino', models.CharField(max_length=100)),
                ('total_assentos', models.IntegerField()),
                ('classe', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.classeviagem')),
                ('compainha', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.compainha')),
            ],
        ),
        migrations.CreateModel(
            name='Reserva',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('formaPagamento', models.CharField(max_length=50)),
                ('numero_documento', models.CharField(max_length=50)),
                ('numero_contato', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=100)),
                ('assentos', models.CharField(max_length=50)),
                ('passagens', models.ManyToManyField(to='core.passagem')),
                ('viagem', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.viagem')),
            ],
        ),
        migrations.CreateModel(
            name='Assento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero_assento', models.IntegerField()),
                ('disponivel', models.BooleanField(default=True)),
                ('viagem', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.viagem')),
            ],
        ),
    ]
