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
        return attrs

    class Meta:
        model = Position
        fields = [
            "quantity",
            "wine_position",
        ]


class PositionDetailSerializer(serializers.ModelSerializer):
    wine_position = serializers.SlugRelatedField(slug_field="name", read_only=True)

    class Meta:
        model = Position
        fields = [
            "wine_position",
            "quantity",
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

                wine_position = position_data["wine_position"]
                quantity = position_data["quantity"]

                wine_position.amount -= quantity
                wine_position.save()

        return order


class OrderListSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field="email", read_only=True, many=False)

    class Meta:
        model = Order
        fields = [
            "id",
            "created_at",
            "user",
        ]


class OrderDetailSerializer(serializers.ModelSerializer):
    positions = PositionDetailSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = [
            "id",
            "positions",
            "user",
            "created_at",
        ]
