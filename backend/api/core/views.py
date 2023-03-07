from django.shortcuts import render
from rest_framework import viewsets
from .models import Empresa, Viagem, Passagem, Reserva, ClasseViagem
from .serializers import EmpresaSerializer, ViagemSerializer, PassagemSerializer, ReservaSerializer, ClasseViagemSerializer

class EmpresaViewSet(viewsets.ModelViewSet):
    queryset = Empresa.objects.all() 
    serializer_class = EmpresaSerializer

class ViagemViewSet(viewsets.ModelViewSet):
    queryset = Viagem.objects.all() 
    serializer_class = ViagemSerializer

class PassagemViewSet(viewsets.ModelViewSet):
    queryset = Passagem.objects.all() 
    serializer_class = PassagemSerializer

class ReservaViewSet(viewsets.ModelViewSet):
    queryset = Reserva.objects.all() 
    serializer_class = ReservaSerializer

class ClasseViagemViewSet(viewsets.ModelViewSet):
    queryset = ClasseViagem.objects.all() 
    serializer_class = ClasseViagemSerializer