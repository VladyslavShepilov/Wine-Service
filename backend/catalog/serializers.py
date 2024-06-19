from rest_framework import serializers

from catalog.models import Catalog


class CatalogSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(source="image", read_only=True)

    class Meta:
        model = Catalog
        fields = [
            "id",
            "name",
            "grape_variety",
            "region",
            "country",
            "description",
            "alcohol_content",
            "price",
            "amount",
            "image",
            "date_created"
        ]
        read_only_fields = ["id", "wine_image", "date_created"]


class CatalogListSerializer(serializers.ModelSerializer):
    wine_image = serializers.ImageField(source="image", read_only=True)

    class Meta:
        model = Catalog
        fields = [
            "id",
            "name",
            "grape_variety",
            "region",
            "country",
            "price",
            "image"
        ]
        read_only_fields = ["id", "wine_image", "date_created"]
