from django.urls import path
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenRefreshView
from jwt_auth.views import UserViewSet, CustomizedTokenObtainPairView, LogoutView

# user_detail = UserViewSet.as_view(
#     {"get": "retrieve", "put": "update", "patch": "partial_update", "delete": "destroy"}
# )

user_register = UserViewSet.as_view({"post": "register"}, permission_classes=[AllowAny])
user_me = UserViewSet.as_view({"get": "me"})

urlpatterns = [
    path("auth/login/", CustomizedTokenObtainPairView.as_view(), name="user_login"),
    path("auth/register/", user_register, name="user_register"),
    path("auth/logout/", LogoutView.as_view(), name="user_logout"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("users/me/", user_me, name="users_me"),
]
