#!/bin/bash

# installing python
echo "installing python and pip"
sudo apt-get update
sudo apt-get install python3.8
sudo apt install python3-pip
pip3 install virtualenv 

echo "installing node"
# frontend libraries
sudo apt install nodejs
sudo apt install npm

echo "creating virtual env"
virtualenv venv 
source venv/bin/activate

# pip freeze
echo "installing pip dependencies"
pip freeze
pip3 install -r requirements.txt
pip freeze > requirements.txt

# echo "installing and setting up database"
# sudo apt-get update
# sudo apt-get install libpq-dev postgresql postgresql-contrib
# echo "create a new database"
# sudo su - postgres
# psql

# CREATE USER myprojectuser WITH PASSWORD 'password';
# ALTER ROLE myprojectuser SET client_encoding TO 'utf8';
# ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';
# ALTER ROLE myprojectuser SET timezone TO 'UTC';
# GRANT ALL PRIVILEGES ON DATABASE myproject TO myprojectuser;
# \q
# exit

echo "done sucessfully"