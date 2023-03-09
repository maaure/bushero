from django.contrib import admin
from django.urls import path, include
from core.views import CompainhaViewSet, ViagemViewSet, PassagemViewSet, ReservaViewSet, MunicipiosView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'compainha', CompainhaViewSet, basename='compainha')
router.register(r'viagem', ViagemViewSet, basename='viagem')
router.register(r'passagem', PassagemViewSet, basename='passagem')
router.register(r'reserva', ReservaViewSet, basename='reserva')


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('internal/municipios', MunicipiosView.as_view())
]
