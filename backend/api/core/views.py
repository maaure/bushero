from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .models import Empresa, Viagem, Passagem, Reserva, ClasseViagem
from .serializers import EmpresaSerializer, ViagemSerializer, PassagemSerializer, ReservaSerializer, ClasseViagemSerializer
class EmpresaViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Empresa.objects.all() 
        serializer = EmpresaSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        print(request.data)
        data = {
            'nome': request.data.get('nome'),
            'contato': request.data.get('contato'),
            'endereco': request.data.get('endereco'),
        }
        
        serializer = EmpresaSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class ViagemViewSet(viewsets.ModelViewSet):
    queryset = Viagem.objects.all() 
    serializer = ViagemSerializer

class PassagemViewSet(viewsets.ModelViewSet):
    queryset = Passagem.objects.all() 
    serializer = PassagemSerializer

class ReservaViewSet(viewsets.ModelViewSet):
    queryset = Reserva.objects.all() 
    serializer = ReservaSerializer

class ClasseViagemViewSet(viewsets.ModelViewSet):
    queryset = ClasseViagem.objects.all() 
    serializer = ClasseViagemSerializer