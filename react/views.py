from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from hobbittracker.serializers import UserSerializer

@login_required(login_url='/accounts/login/')
def index(request):
  user = UserSerializer(request.user)
  return render(request, 'index.html', {'user':user})