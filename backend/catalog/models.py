import os
import uuid

from django.db import models
from django.utils.text import slugify


def catalog_image_file_path(instance, filename):
    _, extension = os.path.splitext(filename)
    filename = f"{slugify(instance.title)}-{uuid.uuid4()}{extension}"

    return os.path.join("uploads/catalog/", filename)


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
    sold = models.PositiveIntegerField()
    image = models.ImageField(null=True, upload_to=catalog_image_file_path)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["-price"]
