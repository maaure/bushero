from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Compainha, Viagem, Passagem, Reserva, ClasseViagem, Assento
from .serializers import CompainhaSerializer, ViagemSerializer, PassagemSerializer, ReservaSerializer, ClasseViagemSerializer, AssentoSerializer
from .validators import CompainhaValidator, ViagemValidator

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
        
        validator = CompainhaValidator(**data);

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

    def create(self, request):
        data = {
            'horario_saida':request.data.get('horario_saida'), 
            'duracao': request.data.get('duracao'), 
            'classe': request.data.get('classe_id'), 
            'valor': request.data.get('valor'), 
            'origem': request.data.get('origem'), 
            'destino': request.data.get('destino'), 
            'compainha':request.data.get('compainha_id'),
            'total_assentos': request.data.get('total_assentos')
        }


        validator = ViagemValidator(**data)

        if not validator.is_valid():
            return Response({'error': validator.get_messages()}, status=status.HTTP_400_BAD_REQUEST)

        try:
            Compainha.objects.get(pk=data['compainha'])
        except:
            return Response({'error': ["Compainha Inexistente"]}, status=status.HTTP_400_BAD_REQUEST)

        try:
            ClasseViagem.objects.get(pk=data['classe'])
        except:
            return Response({'error': ["Classe Inexistente"]}, status=status.HTTP_400_BAD_REQUEST)

        serializer = ViagemSerializer(data=data)



        if serializer.is_valid():
            serializer.save()
            Assento.objects.bulk_create([Assento(**{'numero_assento': k, 'viagem_id': serializer.data['id']}) for k in range(1, data['total_assentos'] + 1)])
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    @action(detail=True, methods=["get"])
    def assentos(self, request, pk=None):
        try:
            Viagem.objects.get(pk=pk)
        except:
            return Response({'error': ["Essa viagem não existe"]}, status=status.HTTP_400_BAD_REQUEST)

        assentos = Assento.objects.filter(viagem_id=pk)

        if not assentos:
            return Response({'error': ["Não existem assentos reservados para essa viagem"]}, status=status.HTTP_400_BAD_REQUEST)


        serializer = AssentoSerializer(assentos, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
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
