echo "activating virtual environment"
. venv/bin/activate

echo "going to backend directory"
cd backend
ls -a

echo "flushgin the server before starting server"
python manage.py flush yes

echo "applying migrations"
python manage.py makemigrations
python manage.py migrate

echo "starting backend server on port 8081"
python manage.py runserver 8081

# echo "going to frontend directory"
# cd ../frontend
# echo " " 
# echo "starting node server on localhost 3000"
# npm start

