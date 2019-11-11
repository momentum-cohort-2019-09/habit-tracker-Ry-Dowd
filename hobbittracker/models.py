from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime

# Create your models here.
class User(AbstractUser):
  
  def __str__(self):
    return self.username
  
class Habit(models.Model):
  user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='habits')
  observers = models.ManyToManyField(to=User, related_name='observed_habits', blank=True)
  start_date = models.DateField(auto_now_add=True)
  activity = models.CharField(max_length=100)
  goal = models.FloatField()
  goal_measurement = models.CharField(max_length=50)
  
  def __str__(self):
    return self.activity
  
class DailyLog(models.Model):
  habit = models.ForeignKey(to=Habit, on_delete=models.CASCADE, related_name='logs')
  actual = models.FloatField(null=True)
  date = models.DateField(default=datetime.date.today)
  description = models.TextField(max_length=1000 ,null=True, blank=True)
  
  class Meta:
    ordering = ['-date']
  
  def __str__(self):
    return str(self.habit) + " " + self.date.strftime('%m/%d/%y')

class Comment(models.Model):
  poster = models.ForeignKey(to=User, to_field='username', related_name='comments', on_delete=models.CASCADE)
  habit = models.ForeignKey(to=Habit, related_name='comments', on_delete=models.CASCADE)
  title = models.CharField(max_length=100, blank=True, null=True)
  content = models.TextField(max_length=1000)
  date = models.DateTimeField(auto_now_add=True)
  
  def __str__(self):
    if self.title:
      return self.title + ' on ' + str(self.habit.user) +"'s " + str(self.habit)
    else:
      return "Untitled Comment on " + str(self.habit.user)+"'s " + str(self.habit)