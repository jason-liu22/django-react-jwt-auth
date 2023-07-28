from django.urls import path
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from jwt_auth.views import UserViewSet

user_detail = UserViewSet.as_view(
    {"get": "retrieve", "put": "update", "patch": "partial_update", "delete": "destroy"}
)

user_register = UserViewSet.as_view({"post": "register"}, permission_classes=[AllowAny])

urlpatterns = [
    path("users/<int:pk>/", user_detail, name="user-detail"),
    path("auth/register/", user_register, name="user-register"),
    path("auth/login/", TokenObtainPairView.as_view(), name="user-login"),
    path("auth/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
]
