from rest_framework.serializers import ModelSerializer
from jwt_auth.models import User


class UserSerializer(ModelSerializer):
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data.pop("username"),
            email=validated_data.pop("email"),
            **validated_data,
        )
        return user

    class Meta:
        model = User
        fields = ["email", "username", "first_name", "last_name", "password"]
        extra_kwargs = {"password": {"write_only": True}}
