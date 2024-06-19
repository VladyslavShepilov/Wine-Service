from rest_framework import serializers

from catalog.models import Catalog


class CatalogSerializer(serializers.ModelSerializer):
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
        ]


class CatalogListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catalog
        fields = [
            "id",
            "name",
            "grape_variety",
            "region",
            "country",
            "price"
        ]
