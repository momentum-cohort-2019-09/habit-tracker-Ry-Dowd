from django.shortcuts import render
from rest_framework import viewsets
from hobbittracker.models import User, Habit, DailyLog, Comment
from hobbittracker import serializers

# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = serializers.UserSerializer
  
class HabitViewSet(viewsets.ModelViewSet):
  queryset = Habit.objects.all()
  serializer_class = serializers.HabitSerializer
  
class DailyLogViewset(viewsets.ModelViewSet):
  queryset = DailyLog.objects.all()
  serializer_class = serializers.DailyLogSerializer
  
class CommentViewset(viewsets.ModelViewSet):
  queryset = Comment.objects.all()
  serializer_class = serializers.CommentSerializer