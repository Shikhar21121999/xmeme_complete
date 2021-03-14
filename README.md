# Xmeme 

## Installation Instructions

1. Through Script  
    1. Backend
       - Clone the repo
       - cd into the directory
       - run install.sh file to install dependencies
       - run run_server.sh to start up the server
       - wait for few seconds to let the server get started  
    2. Frontend
        - Start the server by npm start
        - go to local host 3000 to view the developer server

2. Manual Installation
   1. Backend
      1. Clone the repo
      2. cd into the directory
      3. Cd into the backend
      4. install python,node and pip
      5. Create a virtual environment
      6. activate the virtual environment using pip
      7. Install dependencies by running pip install > requirements.txt
   2. Frontend
      1. cd into the frontend directory
      2. run npm start to start the development server

## Frontend Descritpion

Frontend is built using React js by making use of react bootstrap.Styling is done using CSS.  
Key Features:  
1. Changes happen in real time
2. Functionality to update and delete a meme
3. Responsive and Beautiful UI
4. External links to backend API and also to author  

Deployed at : https://shikharsun-xmeme-frontend.herokuapp.com/

## Backend Descripiton

Backend composes of an api built using Django Rest Framework and Postgresql (Database).  
Endpoints:  
1. /memes (GET): To get latest 100 memes
2. /memes/{id} (GET): To get a particular meme by giving id
3. /memes (POST): To add a new meme by providing name,url and caption  
4. /memes/{id} (PATCH):To patch a meme, only url and caption can be updated
5. /memes/{id} (DELETE):To delete a meme,data is not backup so perform this action carefully

Link of publicly deployed : https://shikharsun-xmeme-api.herokuapp.com/swagger-ui/
