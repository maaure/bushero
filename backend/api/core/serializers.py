from rest_framework import serializers
from .models import Empresa, Viagem, Passagem, Reserva


class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'