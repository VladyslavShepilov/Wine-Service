from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from wine_service import settings

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/user/", include("user.urls", namespace="user")),
    path("api/catalog/", include("catalog.urls", namespace="catalog")),
    path("api/orders/", include("orders.urls", namespace="orders")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
