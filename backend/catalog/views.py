from rest_framework.viewsets import GenericViewSet
from rest_framework import viewsets, mixins

from catalog.models import Catalog
from catalog.serializers import (
    CatalogSerializer,
    CatalogListSerializer
)


class CatalogueViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    GenericViewSet
):
    queryset = Catalog.objects.all()
    serializer_class = CatalogSerializer

    @staticmethod
    def _params_to_str(qs):
        qs = qs.split(",")
        return [string.capitalize() for string in qs]

    def get_queryset(self):
        query_params = self.request.query_params
        name = query_params.get("name")
        country = query_params.get("country")
        price_ord = query_params.get("price_ord")
        bestsellers_ord = query_params.get("bestsellers_ord")
        new_ord = query_params.get("new_ord")

        queryset = self.queryset
        if name:
            name = self._params_to_str(name)
            queryset = (
                queryset.filter(name__in=name) if len(name) == 1
                else queryset.filter(name__icontains=name)
            )
        if country:
            country = self._params_to_str(country)
            queryset = (
                queryset.filter(country__in=country) if len(country) == 1
                else queryset.filter(country__icontains=country)
            )
        if price_ord.lower() in ["asc", "desc"]:
            queryset = queryset.order_by(f"-price" if price_ord == "desc" else "price")

        if bestsellers_ord.lower() in ["asc", "desc"]:
            queryset = queryset.order_by(f"-sold" if bestsellers_ord == "desc" else "sold")

        if new_ord.lower() in ["asc", "desc"]:
            queryset = queryset.order_by(f"-date_created" if new_ord == "desc" else "date_created")

        return queryset

    def get_serializer_class(self):
        if self.action == "list":
            return CatalogListSerializer

        return CatalogSerializer

