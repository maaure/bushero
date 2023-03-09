from django.contrib import admin
from .models import Compainha, Viagem, Passagem, Reserva, ClasseViagem
# Register your models here.

admin.site.register(Compainha)
admin.site.register(Viagem)
admin.site.register(Passagem)
admin.site.register(Reserva)
admin.site.register(ClasseViagem)