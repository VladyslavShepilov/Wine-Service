from django.db import models

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
