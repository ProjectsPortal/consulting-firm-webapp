### Startup

#### Create a Django App:
A Django project can consist of multiple apps, which are the modules of your project. Create your first app by running the following command in the terminal (activate virtual environnment if used):
```bash
python manage.py startapp appname
```
*(Replace appname with the name for your app.)*

#### Define Your Models:
Inside your new app, define models in `models.py`. Models in Django are the source of information about your data. They contain the essential fields and behaviors of the data you’re storing.

#### Set Up the Database:
Run migrations to set up your database schema:
```bash
python manage.py makemigrations
python manage.py migrate
```
These commands prepare and apply changes to your database, according to the models defined.

#### Play with the Admin Site:
Create a superuser to access the Django admin site:
```bash
python manage.py createsuperuser
```
Follow the prompts to create a user, then run the server again and navigate to `/admin` on your local server to access the admin site.

#### Set Up URLs and Views:
Define URL patterns in `urls.py` of your project and app to route the web requests to appropriate view functions.

#### Create Templates:
Create HTML templates for your app. Django templates allow you to write dynamic HTML that will render data from your models.

#### Static Files:
Organize your CSS, JavaScript, and image files in the static directory within your app so that Django can serve them easily.

#### Develop Your Views:
In `views.py`, write functions or classes to handle requests and render responses. These views interact with the models and templates to serve the requested web pages.

### Using the Superuser Account
Access the Django Admin Interface:
Run your Django development server with:
```bash
python manage.py runserver
```
Open a web browser and navigate to http://127.0.0.1:8000/admin/.   
Log in using the superuser credentials you created.

#### Explore the Admin Interface:
The Django admin site provides a user-friendly interface to manage the models you have defined in your Django apps.
You can add, delete, and edit records. This includes user accounts, groups, and any other models you register with the admin.

#### Register Models:
To manage your app's models in the admin interface, you need to register them. Open the admin.py file in your Django app and register your models like so:
```python
from django.contrib import admin
from .models import YourModel

admin.site.register(YourModel)
```
*(Replace YourModel with the actual model class you wish to manage.)*

#### Commit Changes to GitHub
```zsh
git add .
```
```zsh
git commit -m "comment"
```
```zsh
git push origin main
```
*(replace `main` with branch name, e.g. `master`)*

#### Build amd64 (Cloud architecture) and commit changes to docker container
```zsh
docker buildx build --platform linux/amd64 -t dockerhub_username/my-app:tag --push .
```

#### Authenticate Kubernetes
```bash
gcloud container clusters get-credentials YOUR_CLUSTER_NAME --zone YOUR_CLUSTER_ZONE --project YOUR_PROJECT_ID
```

#### Deploy using kubectl (first upload to google cloud shell)
```bash
kubectl apply -f deployment.yaml
```
```bash
kubectl apply -f service.yaml
```

#### Monitor kubernetes
```bash
kubectl get deployments
kubectl get pods
```

#### Get external IP address
```bash
kubectl get service
```