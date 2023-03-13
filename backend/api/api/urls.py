from django.contrib import admin
from django.urls import path, include
from core.views import CompainhaViewSet, ViagemViewSet, PassagemViewSet, ReservaViewSet, MunicipiosViewSet, ClasseViagemViewSet
from rest_framework.routers import DefaultRouter
from drf_yasg.views import get_schema_view as swagger_get_schema_view
from drf_yasg import openapi


router = DefaultRouter()

schema_view = swagger_get_schema_view(
    openapi.Info(
        title = "Bus Hero API",
        default_version = '1.0.0',
        description = "API para o Bus Hero",
    ),
    public = True,
)



router.register(r'compainha', CompainhaViewSet, basename='compainha')
router.register(r'viagem', ViagemViewSet, basename='viagem')
router.register(r'passagem', PassagemViewSet, basename='passagem')
router.register(r'reserva', ReservaViewSet, basename='reserva')
router.register(r'municipios', MunicipiosViewSet, basename='municipios')
router.register(r'classe', ClasseViagemViewSet, basename='classe')


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),

]
