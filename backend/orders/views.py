from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from orders.models import Order
from orders.serializers import OrderSerializer, OrderListSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.prefetch_related("positions")
    serializer_class = OrderSerializer
    permission_classes = (AllowAny,)

    def get_serializer_class(self):
        if self.action == "list":
            return OrderListSerializer
        return OrderSerializer
