# Presentation

The following project was developed to be presented as a technical briefing by Felipe Lagos Pinto for AGI company.
The project consists of two applications, both for backend and frontend:
* On the frontend, an application was developed using React + Redux, built upon a Vite layer, which enables the visualization of a list of posts, as well as their creation, deletion, and filtering.
* For its counterpart on the backend, an API in Ruby on Rails was implemented, allowing for the storage of posts, listing of saved entries, and the ability to delete and create them

# Pre Requirements

In order to run the application, you need to install the following dependencies

* PostgreSQL 9.3 or newer
* Ruby 3.3.2
* Rails 7.1.3.4
* NodeJS 18.0.0

# Configuration

in /API/config/database.yml you will need to configure the database variables for your database instance

# API Posts

To start the API, open a terminal in API directory and run the following command

```bash
bundle install
```

In order to create the DB in case you are working from scratch
```bash
rails db:create
rails db:migrate
```
Note: If you need to populate the database, i have prepare a seed file, just use 

```bash
rails db:seed 
```` 

And to make it work

```bash
rails server
```

or

```bash
rails s
```

# Frontend Applications

To start frontend application, locate the terminar in agri_frontend directory and run the following commands

```bash
npm install
npm run build
npm run preview
```
Note: preview mode is the way Vite simulate an production environment

## Troubleshooting

Just in case you can't run rails server, make sure your Postgresql instance is running

This libraries are needed in order to execute Ruby

sudo apt-get install git-core zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev

This library is needed to make pgsql work properly with Rails
libpq-dev (ubuntu)



# Author

Felipe Lagos Pinto


