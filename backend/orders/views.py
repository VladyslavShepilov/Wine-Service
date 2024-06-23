from datetime import datetime

from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAdminUser

from orders.models import Order
from orders.serializers import (
    OrderSerializer,
    OrderListSerializer,
    OrderDetailSerializer,
)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.select_related("user").prefetch_related(
        "positions__wine_position"
    )
    serializer_class = OrderSerializer

    @staticmethod
    def _params_to_arr_ints(qs):
        return [int(str_id) for str_id in qs.split(",")]

    def get_queryset(self):
        ids = self.request.query_params.get("id")
        date = self.request.query_params.get("date")

        queryset = self.queryset
        try:
            if ids:
                ids = self._params_to_arr_ints(ids)
                queryset = queryset.filter(id__in=ids)
            if date:
                date = datetime.strptime(date, "%Y-%m-%d").date()
                queryset = queryset.filter(created_at__date=date)
        except (ValueError, TypeError) as e:
            pass

        return queryset

    def get_serializer_class(self):
        if self.action == "list":
            return OrderListSerializer
        elif self.action == "retrieve":
            return OrderDetailSerializer
        else:
            return OrderSerializer

    def perform_create(self, serializer):
        if not self.request.user.is_staff:
            serializer.save(user=self.request.user)
        else:
            serializer.save()
