# Web dev links and codes 

### Disclaimer 

The goal here is to set some general information and give some direction to get some knowledge about the stack that we want to work with, plus some basic links to help set up your machine to develop.

>This base of knowledge can be extremely improved. And everyone can contribute to increase it in size/quality or fix some issues.
>
>

### Global info and tutorials

- [How To Build a To-Do application Using Django and React](https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react)
- [test your APIs with postman](https://web.postman.co/)

### Vscode

- [Vscode Intalling link](https://code.visualstudio.com/Download)

### Python

- [Python latest version download link](https://www.python.org/downloads/)
- [Virtualenv and venv: Python virtual environments explained](https://www.infoworld.com/article/3239675/virtualenv-and-venv-python-virtual-environments-explained.html)

### Django

- [How to get Django](https://www.djangoproject.com/download/)
- [Writing your first Django app](https://docs.djangoproject.com/en/4.1/intro/tutorial01/)
  
### Django REST framework

- [Installation](https://www.django-rest-framework.org/#installation)

### Nodejs

- [Installing link](https://nodejs.org/en/download/)

### React

- [Start a New React Project](https://beta.reactjs.org/learn/start-a-new-react-project)
- [Tutorial: Tic-Tac-Toe](https://beta.reactjs.org/learn/tutorial-tic-tac-toe)
- [Using axios with React](https://www.digitalocean.com/community/tutorials/react-axios-react)

### React-Boostrap

- [Introduction](https://react-bootstrap.github.io/getting-started/introduction)

### Bootstrap

- [Introduction](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

### Git and GitHub

  >Git is a version control system.
  >
  >Git helps you keep track of code changes.
  >
  >Git is used to collaborate on code. [1]

  
- [Simple git guide - Install from the link bellow!](https://rogerdudler.github.io/git-guide/)
- [Install the latest git version for your OS](https://git-scm.com/downloads)
- [Github docs - Get started](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [Git usage and pattern guide - Very good!!](https://think-like-a-git.net/sections/graphs-and-git.html)
- [Github Desktop - Very, very, very recommended!](https://desktop.github.com/)

[1]: <https://www.w3schools.com/git/default.asp> 
[2]: <https://www.infoworld.com/article/3239675/virtualenv-and-venv-python-virtual-environments-explained.html> 

## shell codes used 

initialize a new Git repository in the current directory:

    git init

Create a new virtual environment named "djangoenv" using Python's built-in venv module:

    python -m venv djangoenv

Activate the virtual environment created in the previous line. This is necessary so that any packages installed with pip are installed into the virtual environment rather than globally:

    devdayenv\Scripts\activate

Install the Django web framework using pip, Python's package manager:

    pip install django

Create a new Django project named "backend". The django-admin command is used to create new projects, among other things:

    django-admin startproject backend

Start the Django development server, which allows you to view your website locally. `The manage.py` script is used to interact with your Django project, and the `runserver` command starts the development server:

    python manage.py runserver

Create a new Django app named "dice" within your project. An app is a self-contained module that provides a specific functionality to your project, such as handling user authentication or displaying a blog:

    python manage.py startapp dice

Generate new database migration files based on any changes you've made to your models. Migrations are a way to keep track of changes to your database schema over time:

    python manage.py makemigrations

Apply any pending database migrations to your database. This is necessary to make sure that your database schema matches the latest version of your Django models:

    python manage.py migrate

Install two additional packages: djangorestframework, which provides tools for building RESTful APIs in Django, and django-cors-headers, which allows your API to be accessed by JavaScript code running on another domain:

    pip install djangorestframework django-cors-headers

Create a new React project named "frontend" using the create-react-app tool. React is a JavaScript library for building user interfaces, and create-react-app is a popular tool for setting up a new React project quickly:

    npx create-react-app frontend

Start the development server for your React project. This allows you to view your website locally while you're working on it. The npm run command is used to run scripts defined in your package.json file, and the start script is defined by create-react-app to start the development server:

    npm run start

Install react-bootstrap bootstrap and axios

    npm install react-bootstrap bootstrap axios


# Other aditional stuff
**

    import 'bootstrap/dist/css/bootstrap.css';

## backend Settings

    INSTALLED_APPS = [
    "dice",
    'corsheaders',
    'rest_framework',
    ]

    MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ]

    CORS_ORIGIN_WHITELIST = [
     'http://localhost:3000',
     'http://127.0.0.1:3000'
    ]

## backend urls

    from django.urls import path, include
    from rest_framework import routers
    from dice import views

    router = routers.DefaultRouter()
    router.register(r'dicemembers', views.TodoView, 'dicemember')

    urlpatterns = [
        path("admin/", admin.site.urls),
        path('api/', include(router.urls)),
    ]

## dice model

    class DiceMember(models.Model):

        name = models.CharField(max_length=200)

        def __str__(self):
            return self.name

## dice serializer

    from rest_framework import serializers
    from .models import DiceMember


    class DiceMemberSerializer(serializers.ModelSerializer):
        class Meta:
            model = DiceMember
            fields = ('id', 'name',)

## dice views

    from rest_framework import viewsets
    from .serializers import DiceMemberSerializer
    from .models import DiceMember

    # Create your views here.

    class TodoView(viewsets.ModelViewSet):
        serializer_class = DiceMemberSerializer
        queryset = DiceMember.objects.all()

## dice admin

    from .models import DiceMember

    # Register your models here.
    class DiceMemberAdmin(admin.ModelAdmin):
        list_display = ('name',)

    admin.site.register(DiceMember, DiceMemberAdmin)
    
