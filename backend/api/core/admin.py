from django.contrib import admin
from .models import Empresa, Viagem, Passagem, Reserva
# Register your models here.

admin.site.register(Empresa)
admin.site.register(Viagem)
admin.site.register(Passagem)
admin.site.register(Reserva)