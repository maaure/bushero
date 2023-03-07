from django.contrib import admin
from django.urls import path, include
from core.views import EmpresaViewSet, ViagemViewSet, PassagemViewSet, ReservaViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'empresa', EmpresaViewSet)
router.register(r'viagem', ViagemViewSet)
router.register(r'passagem', PassagemViewSet)
router.register(r'reserva', ReservaViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls'))
]
