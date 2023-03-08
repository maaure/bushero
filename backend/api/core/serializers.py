from rest_framework import serializers
from .models import Compainha, Viagem, Passagem, Reserva, ClasseViagem

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