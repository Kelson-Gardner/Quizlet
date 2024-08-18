from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    id = models.BigAutoField(primary_key=True)
    user_name = models.CharField(max_length=50, default='Anonymous')
    email = models.CharField(max_length=50, default='Anonymous')
    user = models.OneToOneField(User, on_delete=models.CASCADE)

class Library(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

class Deck(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=50, default=f'Deck {id}')
    library = models.ForeignKey("Library", on_delete=models.CASCADE)

class Card(models.Model):
    id = models.BigAutoField(primary_key=True)
    frontSide = models.TextField()
    backSide = models.TextField()
    Deck = models.ForeignKey("Deck", on_delete=models.CASCADE)
