from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .models import Empresa, Viagem, Passagem, Reserva, ClasseViagem
from .serializers import EmpresaSerializer, ViagemSerializer, PassagemSerializer, ReservaSerializer, ClasseViagemSerializer
from .validators import EmpresaValidator

class EmpresaViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Empresa.objects.all() 
        serializer = EmpresaSerializer(queryset, many=True)
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