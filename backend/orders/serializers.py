from django.db import transaction
from rest_framework import serializers
from rest_framework.exceptions import ValidationError


from orders.models import Order, Position


class PositionSerializer(serializers.ModelSerializer):
    def validate(self, attrs):
        data = super(PositionSerializer, self).validate(attrs=attrs)
        Position.validate_available_positions(
            attrs["quantity"], data["wine_position"].amount,
            ValidationError
        )

    class Meta:
        model = Position
        fields = [
            "quantity",
            "wine_position",
            "order",
        ]


class OrderSerializer(serializers.ModelSerializer):
    positions = PositionSerializer(many=True, read_only=False, allow_empty=False)

    class Meta:
        model = Order
        fields = [
            "id",
            "positions",
            "user",
            "created_at",
        ]

    def create(self, validated_data):
        with transaction.atomic():
            positions_data = validated_data.pop("positions")
            order = Order.objects.create(**validated_data)
            for position_data in positions_data:
                Position.objects.create(order=order, **position_data)



