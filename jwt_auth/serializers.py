from rest_framework.serializers import ModelSerializer
from jwt_auth.models import User

class UserSerializer(ModelSerializer):
    def create(self, validated_data):
        user = User.objects.create_user(
                **validated_data,
                email=validated_data['username'],)
        return user

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'password']
        extra_kwargs = {'password': {'write_only': True}}
