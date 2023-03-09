from django.db import migrations

def insere_classes(apps, schema_editor):
    ClasseViagem = apps.get_model('core', 'ClasseViagem')
    classes = [
        ClasseViagem(nome='Tradicional'),
        ClasseViagem(nome='Executiva'),
        ClasseViagem(nome='Leito'),
    ]
    ClasseViagem.objects.bulk_create(classes)

class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(insere_classes),
    ]