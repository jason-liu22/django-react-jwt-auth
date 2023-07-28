from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    username = models.EmailField(max_length=150, null=False, unique=True)

    def __repr__(self):
        return f'<{self.username} ({self.id})>'

    def __str__(self):
        return f'{self.username}'

    @property
    def name(self):
        return f'{self.first_name} {self.last_name}'