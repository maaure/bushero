from django.contrib import admin
from .models import Companhia, Viagem, Passagem, Reserva, ClasseViagem
# Register your models here.

admin.site.register(Companhia)
admin.site.register(Viagem)
admin.site.register(Passagem)
admin.site.register(Reserva)
admin.site.register(ClasseViagem)