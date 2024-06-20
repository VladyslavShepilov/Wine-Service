from rest_framework import serializers

from catalog.models import Catalog


class CatalogSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(read_only=True)

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
            "sold",
            "image",
            "date_created"
        ]
        read_only_fields = ["id", "image", "date_created"]


class CatalogListSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(read_only=True)

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
        read_only_fields = ["id", "image", "sold", "date_created"]


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catalog
        fields = ["id", "image"]
