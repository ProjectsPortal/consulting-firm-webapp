from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'mainapp/home.html')

def about(request):
    return render(request, 'mainapp/about.html')

def resources(request):
    return render(request, 'mainapp/resources.html')

def services(request):
    return render(request, 'mainapp/services.html')

def contact(request):
    return render(request, 'mainapp/contact.html')

