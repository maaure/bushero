from django.db import models

# Create your models here.
class Empresa(models.Model):
    nome = models.CharField(max_length=100)
    endereco = models.CharField(max_length=100)
    contato = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
    
class Viagem(models.Model):
    horario_saida = models.DateTimeField(auto_now=False, auto_now_add=False)
    duracao = models.TimeField(auto_now=False, auto_now_add=False)
    classe = models.CharField(max_length=100)
    valor = models.FloatField()
    origem = models.CharField(max_length=100)
    destino = models.CharField(max_length=100)
    assentos_indisponiveis = models.TextField()

    def __str__(self):
        return self.nome

class Passagem(models.Model):
    nome = models.CharField(max_length=100)
    numero_documento = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
    
class Reserva(models.Model):
    viagem = models.OneToOneField(Viagem, on_delete=models.CASCADE)
    passagens = models.ManyToManyField(Passagem)
    formaPagamento = models.CharField(max_length=50)
    numero_documento = models.CharField(max_length=50)
    numero_contato = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    assentos = models.CharField(max_length=50)

    def __str__(self):
        return self.numero_contato 