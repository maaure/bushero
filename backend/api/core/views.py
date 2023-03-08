from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .models import Empresa, Viagem, Passagem, Reserva, ClasseViagem
from .serializers import EmpresaSerializer, ViagemSerializer, PassagemSerializer, ReservaSerializer, ClasseViagemSerializer
from .validators import EmpresaValidator

class EmpresaViewSet(viewsets.ViewSet):
    def list(self, request):
        query_set = Empresa.objects.all() 
        serializer = EmpresaSerializer(query_set, many=True)
        return Response(serializer.data)

    def create(self, request):
        data = {
            'nome': request.data.get('nome'),
            'endereco': request.data.get('endereco'),
            'contato': request.data.get('contato'),
        }
        
        validator = EmpresaValidator(data['nome'], data['endereco'], data['contato']);

        if not validator.is_valid():
            return Response(validator.get_messages(), status=status.HTTP_400_BAD_REQUEST)

        serializer = EmpresaSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    def destroy(self, request):
        id_empresa = request.data.get(id)
        
        
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
