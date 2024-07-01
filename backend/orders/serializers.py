from django.db import transaction
from rest_framework import serializers
from rest_framework.exceptions import ValidationError


from orders.models import Order, Position


class PositionSerializer(serializers.ModelSerializer):
    def validate(self, attrs):
        data = super(PositionSerializer, self).validate(attrs=attrs)
        Position.validate_available_positions(
            attrs["quantity"], data["wine_position"].amount, ValidationError
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
    completed = serializers.BooleanField(read_only=True)

    class Meta:
        model = Order
        fields = [
            "id",
            "positions",
            "user",
            "created_at",
            "completed",
        ]

    def create(self, validated_data):
        with transaction.atomic():
            positions_data = validated_data.pop("positions")
            if not positions_data:
                raise ValidationError("Order should have at least one position")
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
    completed = serializers.BooleanField(read_only=True)

    class Meta:
        model = Order
        fields = [
            "id",
            "created_at",
            "user",
            "completed"
        ]


class OrderDetailSerializer(serializers.ModelSerializer):
    user_email = serializers.EmailField(source="user.email", read_only=True)
    user_is_staff = serializers.BooleanField(source="user.is_staff", read_only=True)
    positions = PositionDetailSerializer(many=True, read_only=True)
    completed = serializers.BooleanField(read_only=True)

    class Meta:
        model = Order
        fields = [
            "id",
            "positions",
            "user_email",
            "user_is_staff",
            "created_at",
            "completed",
        ]
