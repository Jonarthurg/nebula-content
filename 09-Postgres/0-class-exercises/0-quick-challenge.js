/*
  Connect and Create a Database (and misc.)
    -> How to create a database:
      CREATE DATABASE <data base name>

    -> How to look at all databases in your postgres
      \l OR \list

    -> How to connect to a database:
      \c databasename

    -> How to create a new table:

        CREATE TABLE students (
          student_id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          age INT NOT NULL,
          mobile VARCHAR(50)
        );

    -> Check your tables:
        \dt
      
    -> Check a table column datatype and what other tables it references:
      \d tablename

    -> Insert data into table(s)
        INSERT INTO students VALUES (DEFAULT, 'Lucian Bryan', 25, '999-999-9999');
        INSERT INTO students VALUES (DEFAULT, 'Johnnaibys Nunez', 34, '999-999-9999');
        INSERT INTO students VALUES (DEFAULT, 'Bayley Arens', 22, '999-999-9999');
        INSERT INTO students VALUES (DEFAULT, 'Jessica Salazar', 24, '999-999-9999');
        INSERT INTO students VALUES (DEFAULT, 'Shaundel Crumpton', 48, '999-999-9999');
    
    -> Select data from table(s) using specific columns
        SELECT column1, column2, column3 FROM tablename;

    -> Select all data from a table(s)
        SELECT * FROM tablename;
*/

/*
  Challenge:

  For this challenge we need to use documentation:
  http://www.tutorialspoint.com/postgresql/

    - Insert new students -> Bob, 29 years old, mobile is 993-223-3398
    - Shaundel changed his number -> his new number: 917-323-5431
    - Baley doesn't want to share his number.
    - Jessica is actually 23 years old and doesn't want to share her number.
    - Lucian is actually 31 years old and has a number of 915-339-4485
    - Get a list of names and mobiles for students who are under 25. Order them by their names alphabetically.
    - Get a list of students who first name begins with B.
    - Get a list of students whose numbers are not listed.
*/