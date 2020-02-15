# Django-React-Example

Example of a simple front end framework

## Gettign Started

These instructions will get you a basic django backend server and a react frontend up and running.

## Installing 

Step by step series of examples that tell you how to get a development env running.

#### Django Setup

To activate virtual enviroment enter the following command.
```
source ./backend/env/bin/activate
```
After activating the enviroment navigate the project directory.
```
cd ./backend/src
```
Then, create an admin account for your server. This will get you access to the django-admin framework for server management.
```
python -m manage.py createsuperuser
```
From here you can start the server and navigate to /admin or /api

```
python -m manage.py runserver
```
#### React Setup
The react setup is very straight forward, make sure you have npm installed on your system.
Navigate to ```/frontend/gui```and run
```
npm install
npm start
```

## Useful documentation and refrences

* [VSCode Django Tutorial](https://code.visualstudio.com/docs/python/tutorial-django) - Getting started
* [Django REST framework](https://www.django-rest-framework.org/) - The framework used
* [React Ant Framework](https://ant.design/) - React library for styling
* [Django Database Queries](http://djangobook.py3k.cn/chapter05/en/) - Interacting with SQLite Database

