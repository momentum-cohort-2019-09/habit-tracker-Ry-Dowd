from rest_framework import serializers
from hobbittracker.models import User, Habit, DailyLog, Comment


class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = ['poster', 'habit', 'title', 'content', 'date']


class DailyLogSerializer(serializers.ModelSerializer):
  class Meta:
    model = DailyLog
    fields = ['habit', 'actual', 'date', 'description']
    
    
class HabitSerializer(serializers.ModelSerializer):
  logs = DailyLogSerializer(many=True)
  comments = CommentSerializer(many=True)
  class Meta:
    model = Habit
    fields = ['user', 'observers', 'start_date', 'activity', 'goal', 'goal_measurement', 'comments', 'logs']
  
  
class UserSerializer(serializers.ModelSerializer):
  habits = HabitSerializer(many=True)
  observed_habits = HabitSerializer(many=True)
  class Meta:
    model = User
    fields = ['id', 'username', 'habits', 'observed_habits','comments',]