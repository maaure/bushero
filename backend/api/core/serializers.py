from rest_framework import serializers
from .models import Compainha, Viagem, Passagem, Reserva, ClasseViagem, Assento, Municipio

class CompainhaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compainha
        fields = '__all__'
class ViagemSerializer(serializers.ModelSerializer):
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

class ClasseViagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClasseViagem
        fields = '__all__'

class AssentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assento
        fields = ['numero_assento', 'disponivel']

class MunicipioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Municipio
        fields = '__all__'