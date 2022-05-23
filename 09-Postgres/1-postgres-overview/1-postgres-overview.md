# PSQL/POSTGRES
- PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.
- It is known for its reliability, feature robustness, and performance
- It also has fantastic documentation across several websites, including:
  - https://postgresql.org
  - https://www.postgresqltutorial.com/

Let's unpack that initial definition:
## Open source
- Something people can modify and share because its design is publicly accessible
## Relational Database
- A `relational database` is a type of database that stores and provides access to data points that are related to one another. 
- It is comprised of tables which are comprised of `columns` of `rows` (think excel spreadsheets)
- Each column in the table has a name and a data type (text, number, etc.), and each row in the table is a specific instance of whatever the table is "about."
- Tables in an `RDS` are related to eachother through the use of `keys`. Specifically `primary keys` and `foregin keys`. We'll dive deeper into this concept later. 
- An RDS Schema may look like the following:
<!-- <img src='https://miro.medium.com/max/1003/1*e3KQCu0HOiTniNqqxZBGsA.png' alt='rds'> -->

## Extensibility
- The quality of being designed to allow the addition of new capabilities or functionality.
- In other words `PSQL` focuses on allowing additions to your `rows`, `tables`, and `db` as a whole
## SQL Compliance
- SQL is `Structured Query Language` and it is widely used for database management. `PSQL` is created so that it allows for `SQL` queries

#Even more broadly than a `relational database`, what is a database?

There's no single definition for the word database. In general, databases are systems for managing information - it's a place where information is stored in a hard drive.
    
Databases can have varying amounts of structure imposed on the data. When the data is more structured, it can help people and computers work with the data more efficiently.

## Non-relational DB
Unmentioned so far is a non-relational database, which is the 'opposite' of a relational database. Non-relational databases are often called NoSQL databases and they are often optimized for viewing or 'reading' information.

# Lets dive in!
- Northwestern University has put together a fun muder-mystery activity. 
  - This should take around 45 minutes
  - https://mystery.knightlab.com/walkthrough.html

# CRUD!
CRUD means:
  - Create
  - Read
  - Update
  - Delete

These are the basic actions that a database can perform. Once you can create a DB that allows for full CRUD, and you can connect that to a front end via a server you can call yourself a full-stack developer! For now let's just focus on the DB though. 

# Data Normalization
Data Normalization is the process of structuring a database in accordance with a series of so-called normal forms in order to reduce data redundancy and improve data integrity. 

To put it simply, we don't want repeated data, we want data that is consistant in form, we want clean data without missing fields, etc..

# Thought Experiment (Activity)
Let's consider a traditional physical library
- If we were creating an app of a library 
  - What would the table for a book look like? Create a list of attributes
  - What would the table for an author look like? Create a list of attributes

> ## SOLUTION BELOW 
    Book:
      id:
      Title:
      Author: authorId
      Genre:

    Author:
      id:
      Name: 
      Books:  
      
    Book Instance:
      id: 1
      name: Black God
      author: [32]
      genre: non-fiction

    Author Instance:
      id: 32
      name: Supreme Understanding
      books: [1, 3, 139]

    Notice how the author instance shares the book id's instance and vice versa - these are our primary and foreign keys. 32 for example is the authors primary key, and the 32 within the book instance is the foreign key. 

# SQL
What is SQL?
- It stands for: Structured Query Language
- SQL is a language that's universally used and adapted to interact with relational databases (a database management language).
- When using a SQL client to connect with a relational database that contains tables with data, the scope of what you can do with SQL commands includes:
  - Inserting data
  - Querying or retrieving data
  - Updating or deleting data
  - Creating new tables and entire databases
  - Controlling permissions of who can access the data

Why is SQL Important?
- A database is just a repository for storing data. You need to use systems to dictate how that data will be stored and how clients will interact with it. We call these system database management systems. Some examples include: 
  - MySQL
  - SQLite
  - PostgeSQL <--- this is what we will be using!

    All of these management systems use SQL (or some version of it) as a language for managing data in the system.
*/
# Installation
- The same way we installed Node.js so our computers could run JavaScript code we also need to install PSQL 

## How to install for Mac:
```
1: Go to link => `https://postgresapp.com/`
2: Will also need to set PATH variable (`https://postgresapp.com/documentation/cli-tools.html`)

  OR

For just CLI -
  1- In Terminal: brew install postgres
```
## How to install for Windows:
```
1: Download / Install from here https://www.postgresql.org/download/windows/
2: Add this to your PATH environment variable (13 is the version number)
  C:\Program Files\PostgreSQL\13\bin
  Reference Link: https://sqlbackupandftp.com/blog/setting-windows-path-for-postgres-tools

  How to login to Postgres after installed with CLI tools:

    First check for installation:
    - psql --version

    Windows:
    - psql -U postgres

    Mac:
    - psql -U postgres
``` 
# SQL Style Guide:
- Fields should always be lower case.
- SQL keywords should always be upper case.
- Never name a field id; always correlate it to the table.
- Always check your company's style guide or follow the convention -> don't create your own style.
  - https://www.sqlstyle.guide/

  How to quit out of PSQL
    1. \q
    2. ctrl + c


# The Relational Model Continued
  - Each table is 'related' to another table (within a given db) in some way. This is organizing the data into one more tables of columns and rows, with a unique key identifying each row. Each row is known as a `record` or `entry`...
  - Relational Mapping
    - Relationships happen when we start to see multiple occurences of duplicative information - or when one object needs to relate / connect to another object.

  - Primary Key:
    - A column or group of columns that uniquely identifies a row. Every table should have a primary key. A table cannot have more than one primary key

  - Foreign Key:
    - A column or group of columns in one table whose values must have matching values in the primary key of another (or the same) table. A foreign key is said to reference its primary key.

  - Foreign Key Constraint:
    - A foreign key constraint specifies that the values in a column (or a group of columns) must match the values appearing in some row of another table. We say this maintains the referential integrity between two related tables. https://www.postgresql.org/docs/9.4/ddl-constraints.html

# Let's Practice!
  GO TO CHALLENGE IN CLASS EXERCISES FOLDER
  - 1.5 hours:  \09-Postgres\0-class-exercises\1-sql-starter-carmen\README.md 
  - 45 minutes: \09-Postgres\0-class-exercises\2-sql-airplanes\airplanes.js
