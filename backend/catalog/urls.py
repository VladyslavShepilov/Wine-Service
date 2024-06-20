from django.urls import path, include
from rest_framework import routers

from catalog.views import CatalogueViewSet

router = routers.DefaultRouter()

router.register("", CatalogueViewSet)

urlpatterns = [path("", include(router.urls))]

app_name = "cinema"
