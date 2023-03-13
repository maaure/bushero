from ..models import Municipio
import json
import os


def populate():
    module_dir = os.path.dirname(__file__)  # get current directory
    file_path = os.path.join(module_dir, 'municipios.json')
    f = open(file_path)
    data = json.load(f)

    Municipio.objects.bulk_create([Municipio(**{'nome': k['nome'], 'uf': k['microrregiao']['mesorregiao']['UF']['sigla']}) for k in data])

    f.close()
