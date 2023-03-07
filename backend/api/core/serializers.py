from rest_framework import serializers
from .models import Empresa, Viagem, Passagem, Reserva


class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
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