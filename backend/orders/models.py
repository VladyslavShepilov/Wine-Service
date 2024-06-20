from django.db import models, transaction
from django.core.exceptions import ValidationError

from wine_service import settings
from catalog.models import Catalog


class Order(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )

    def __str__(self):
        return str(self.created_at)

    class Meta:
        ordering = ["-created_at"]


class Position(models.Model):
    quantity = models.PositiveIntegerField(default=1)
    wine_position = models.ForeignKey(Catalog, on_delete=models.CASCADE, related_name="positions")
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="positions")

    def __str__(self):
        return f"{self.wine_position} {self.quantity}"

    class Meta:
        unique_together = ["wine_position", "order"]
        ordering = ["order"]

    @staticmethod
    def validate_available_positions(
            ordered_amount: int,
            available_amount: int,
            error
    ):
        if ordered_amount > available_amount:
            raise error(f"There is only {available_amount} left!")

    def clean(self):
        Position.validate_available_positions(
            self.quantity,
            self.wine_position.amount,
            ValidationError
        )

    def save(self, *args, **kwargs):
        self.full_clean()
        return super(Position, self).save(*args, **kwargs)
