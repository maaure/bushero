from rest_framework import serializers
from .models import Companhia, Viagem, Passagem, Reserva, ClasseViagem, Assento, Municipio

class CompanhiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Companhia
        fields = '__all__'

class MunicipioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Municipio
        fields = '__all__'

class ClasseViagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClasseViagem
        fields = '__all__'

class ViagemSerializer(serializers.ModelSerializer):
    origem = MunicipioSerializer()
    destino = MunicipioSerializer()
    companhia = CompanhiaSerializer()
    classe = ClasseViagemSerializer()

    class Meta:
        model = Viagem
        fields = '__all__'

class ViagemCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viagem
        fields = '__all__'


class PassagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passagem
        fields = '__all__'
class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = '__all__'


class AssentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assento
        fields = ['numero_assento', 'disponivel']