from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAdminUser

from orders.models import Order
from orders.serializers import (
    OrderSerializer,
    OrderListSerializer,
    OrderDetailSerializer,
)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.prefetch_related("positions", "user")
    serializer_class = OrderSerializer

    def get_queryset(self):
        queryset = self.queryset

        if self.action == "list":
            queryset = queryset.prefetch_related("user")
        elif self.action == "retrieve":
            queryset = queryset.prefetch_related(
                "positions__wine_position__amount", "user"
            )

        return queryset

    def get_serializer_class(self):
        if self.action == "list":
            return OrderListSerializer

        if self.action == "retrieve":
            return OrderDetailSerializer

        return OrderSerializer

    def perform_create(self, serializer):
        if not self.request.user.is_staff:
            serializer.save(user=self.request.user)
        else:
            serializer.save()
