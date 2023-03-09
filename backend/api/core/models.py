from django.db import models

# Create your models here.
class Compainha(models.Model):
    nome = models.CharField(max_length=100)
    endereco = models.CharField(max_length=100)
    contato = models.CharField(max_length=100)

    def __str__(self):
        return self.nome

class ClasseViagem(models.Model):
    nome = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nome

    class Meta:
        verbose_name_plural = "ClassesViagem"


class Viagem(models.Model):
    horario_saida = models.DateTimeField(auto_now=False, auto_now_add=False)
    duracao = models.TimeField(auto_now=False, auto_now_add=False)
    classe = models.ForeignKey(ClasseViagem,on_delete=models.SET_NULL, null=True)
    valor = models.FloatField()
    origem = models.CharField(max_length=100)
    destino = models.CharField(max_length=100)
    compainha = models.ForeignKey(Compainha, on_delete=models.CASCADE)
    total_assentos = models.IntegerField()

    def __str__(self):
        return self.origem

class Assento(models.Model):
    numero_assento = models.IntegerField()
    viagem = models.ForeignKey(Viagem, on_delete=models.CASCADE)
    disponivel = models.BooleanField(default=True)

    def __str__(self):
        return self.numero_assento
    
class Passagem(models.Model):
    nome_passageiro = models.CharField(max_length=100)
    numero_documento = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
    
class Reserva(models.Model):
    viagem = models.ForeignKey(Viagem, on_delete=models.CASCADE)
    passagens = models.ManyToManyField(Passagem)
    formaPagamento = models.CharField(max_length=50)
    numero_documento = models.CharField(max_length=50)
    numero_contato = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    assentos = models.CharField(max_length=50)

    def __str__(self):
        return self.numero_contato

class Municipio(models.Model):
    nome = models.CharField(max_length=100)
    uf = models.CharField(max_length=100)

    def __str__(self):
        return self.nome