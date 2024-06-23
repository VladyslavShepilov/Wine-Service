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
