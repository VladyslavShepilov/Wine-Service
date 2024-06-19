from django.db import models


class Catalog(models.Model):
    name = models.CharField(max_length=100, unique=True)
    grape_variety = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    alcohol_content = models.DecimalField(
        max_digits=4, decimal_places=2, null=True, blank=True
    )
    price = models.PositiveIntegerField()
    amount = models.PositiveIntegerField()

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["-price"]
