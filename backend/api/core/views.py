from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .models import Compainha, Viagem, Passagem, Reserva, ClasseViagem
from .serializers import CompainhaSerializer, ViagemSerializer, PassagemSerializer, ReservaSerializer, ClasseViagemSerializer
from .validators import CompainhaValidator

class CompainhaViewSet(viewsets.ViewSet):
    def list(self, request):
        query_set = Compainha.objects.all() 
        serializer = CompainhaSerializer(query_set, many=True)
        return Response(serializer.data)

    def create(self, request):
        data = {
            'nome': request.data.get('nome'),
            'endereco': request.data.get('endereco'),
            'contato': request.data.get('contato'),
        }
        
        validator = CompainhaValidator(data['nome'], data['endereco'], data['contato']);

        if not validator.is_valid():
            return Response(validator.get_messages(), status=status.HTTP_400_BAD_REQUEST)

        serializer = CompainhaSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    def destroy(self, request):
        id_compainha = request.data.get(id)
        
        
class ViagemViewSet(viewsets.ViewSet):
    def list(self, request):
        query_set = Viagem.objects.all() 
        serializer = ViagemSerializer(query_set, many=True)
        return Response(serializer.data)

class PassagemViewSet(viewsets.ViewSet):
    def list(self, request):
        query_set = Passagem.objects.all() 
        serializer = PassagemSerializer(query_set, many=True)
        return Response(serializer.data)

class ReservaViewSet(viewsets.ViewSet):
    def list(self, request):
        query_set = Reserva.objects.all() 
        serializer = ReservaSerializer(query_set, many=True)
        return Response(serializer.data)

class ClasseViagemViewSet(viewsets.ViewSet):
    def list(self, request):
        query_set = ClasseViagem.objects.all() 
        serializer = ClasseViagemSerializer(query_set, many=True)
        return Response(serializer.data)
