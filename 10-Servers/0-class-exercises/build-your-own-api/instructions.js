/*
    CREATE A REPO FOR THIS PROJECT
        - music-app

    IN YOUR LOCAL DIRECTORY FOR THIS PROJECT, BEFORE YOU PUSH
    ANYTHING, COPY THE .gitignore file FROM THE SAMPLE 
    API PROJECT WE DID IN CLASS, INTO YOUR PROJECT DIRECTORY.
    We need to tell git to ignore our node_modules folder.
*/

/*
    Create a new database (in postgres - refer to postgres notes) - called music.

    In this database you'll have a table called songs.

    We also want to create an API that allows us to get and add songs to that music database.
*/

/*
    ALL OF THESE COMMANDS ARE RUN IN THE PROJECT DIRECTORY 

    If you don't already have nodemon installed - install it globally with ->
        npm i -g nodemon 

    Initialize a node project (this creates our package.json file) ->
        npm init -y

    Installing our Express library ->
        npm install express

    Installing our node-postgres interface module ->
        npm install pg
    
    Installing cors (allowing for cross origin sharing) -> 
        npm install --save cors

    //////////////////////////////////
    THIS COMMAND IS FOR YOUR REFERENCE

    To run your API locally ->
        nodemon index.js
*/

/* 
    ADDING A CLIENT

    Add all of your files in your music-app folder into another sub
    folder called api.

    Within your music-app folder (the root directory for this project)
    run: npx create-react-app client
        - This will create a create react application.

    Follow the example I provided in class to get your own react app making
    requests to your api (you should be able to find this easily...).

    Extend the functionality as you wish.

    Come to class with questions.
*/