# Lets create a contact list and request that data
First we need to create our database so we can later request the data from our server. You should be in the directory you just created in the last section of the notes with `index.js` and where you ran the following commands:
  - `npm init -y`
  - `npm install pg express`
  - `npm install body-parser`
  - `npm install cors`
  - `npm i -g nodemon` 


The following commands are run in the terminal 

### connect to PostgreSQL
`psql -U postgres`
### List out databases
`\l`
### Create a database called contacts
`CREATE DATABASE contacts;`
### connect to database
`\c contacts`
### Create a table inside the contacts database with primary key
`CREATE TABLE people (id SERIAL PRIMARY KEY, name VARCHAR, email VARCHAR, age INT);`
### take a look at the people table
`SELECT * FROM people;` then `\dt`
### (Practice) Add column to people table
`ALTER TABLE people ADD last_name VARCHAR;`
### (Practice) Delete a column
`ALTER TABLE people DROP COLUMN last_name;`
### Rename an existing column
`ALTER TABLE people RENAME email TO email_address;`
### add instances to people table
`INSERT INTO people (name, email_address, age) VALUES ('John Smith', 'johnsmith@gmail.com', 21);`
### View new user
`SELECT * FROM people;`
<!-- ### Adding foreign key
`CREATE TABLE meetings (id SERIAL, title VARCHAR NOT NULL, subject VARCHAR VARCHAR, users_id INT, CONSTRAINT fk_user FOREIGN KEY(users_id) REFERENCES users(id));`
### Add instances to the meetings table
`INSERT INTO meetings (title, subject, users_id) VALUES ('jogn', 'meeting for monday', 1);`
### Update a row
UPDATE emails SET title = 'john' WHERE id = 1;
### Delete a row
SELECT \* FROM emails;
### listing out instances that match the foreign key
SELECT FROM emails WHERE users_id = 2; -->

# Before we get started we should have a directory looking like this:
- ContactsFullStack
    - API
        - index.js
        - queries.js

We will ultimately also also put a react-app in this folder for viewing the data on the front-end

# Back end setup:
In index.js let's initialize our express app
```js
const express = require('express'); 
const app = express(); 
const port = 3030;
```
# BASE URL
Next lets set the base route. If someone visits our port 3030 the should expect to see the response
```js
app.get('/', (request, response) => { response.json({ info: 'Node.js, Express and Postgres API'}) })
```
Next lets ensure our app is actually listening to that port
```js
app.listen(port, () => { console.log(`App running on port ${port}.`) })
```
Lastly lets run `nodemon` on `index.js`
- `nodemon index.js`

Look for output in your terminal.

Now let's also head to `localhost:3030` in our browser. You should see something like
```js
{
    info: "Node.js, Express and Postgres API"
}
```

We currently don't have any routes other than the base route. We can create a route from query to route or from route to query. We'll do the latter.

# GET REQUESTS
This route will provide us with all people in our contacts, let's add a new get route
```js
app.get('/contacts', db.getContacts);
```

`db.getContacts` doesn't have any functionality yet. We're going to import this from `queries.js`

At the top of our `index.js` let's add our import:
```js
const db = require('./queries.js');
```

Our `index.js` should now look like this:
```js
const express = require('express'); 
const app = express(); 
const port = 3030;
const db = require('./queries.js');


app.get('/', (request, response) => { 
    response.json({ info: 'Node.js, Express and Postgres API'}) 
})

app.get('/contacts', db.getContacts);


app.listen(port, () => { console.log(`App running on port ${port}.`) })
```

In queries.js let's provide access to our DB and also write a query to access the data:
```js
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres", /* this user may be different based on your psql users */
  host: "localhost",
  database: "contacts",
  password: "testpass1", /* this password may be different based on your psql user password */
  port: 5432,
});
```

PgPool is a session-based connection pooler, which maintains already-established connections to the database by reusing them. When configured, PgPool will keep a small number of database sessions spawned and ready to serve application session requests.

```js
const getContacts = (request, response) => {
  pool.query("SELECT * FROM people", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


module.exports = {
  getContacts,
};
```

Let's now head to `localhost:3030/contacts`, we should see our table info. 

Assuming the last item worked 

***<h1 style='color:#4EC9B0'>DO NOT RESTART YOUR SERVER FOR THE FOLLOWING STEPS</h1>***

Head into your psql instance (through your CLI) 

***<h1 style='color:#4EC9B0'>DO NOT KILL YOUR SERVER JUST OPEN A NEW CLI IF YOU ARENT ALREADY CONNECTED TO PSQL</h1>***

connect to your db `\c contacts`

Insert a new entry:
```sql
INSERT INTO people (name, email_address, age) VALUES ('Jane Doe', 'janeDoe@gmail.com', 23);
```

Refresh your browser - we now have both John and Jane without restarting our server. This is the power of a server. We can access data from a DB without restarting our entire application. We just fetch new data and view it live.

# POST REQUESTS

Even better would be adding our own users - we can do that too!

We just need to do a few things:
1. In `index.js` create a new route for `post` requests
```js 
app.post('/contacts', db.addContact);
```
2. JSONify the data - the data we will be receiving needs to be converted into or read as JSON

Import and use `body parser` 
```js
const bodyParser = require('body-parser');
// ...
app.use(bodyParser.json());
```
3. In `queries.js` create a function to handle post requests
- Try not to be intimidated by the following function - read the comments and ask questions!

```js
const addContact = (req, res) => {
// using a try - catch to ensure we're handling improper requests
  try {
    // declaring our useful information from the request body
    const { name, email_address, age } = req.body;
    // writing our PSQL request, the $#'s refer back to the line above $1 = name, $2 = emailAddress, $3 = age
    // `Returning *` means, after the insert, give us back the new info
    pool.query(
        `INSERT INTO people (name, email_address, age) VALUES ($1, $2, $3) RETURNING *;`,
        [name, email_address, age],
        // handle any errors, or return the results
        (error, results) => {
            if (error) {
                console.log(error, '<--- error here')
                throw error;
            }
            console.log(results, "<--- result!")
            res.status(200).json(results.rows)
        }
    );
  } catch (error) {
    throw error;
  }
};


// be sure to export the new function so we have access to it in index.js
module.exports = {
  getContacts,
  addContact
};
```

ALSO this is a post request. Our default URL requests are get requests! Let's download an application that is helpful for firing requests without a fully developed front-end

The app is called `Postman`, download it [here](https://www.postman.com/downloads/)

Once we have downloaded the app create a new request:
- It should be a `GET` request headed to the URL of `localhost:3030/contacts`
- Hit `Send` and we should see JSON response similar to this:
```json
[
    {
        "id": 1,
        "name": "John Smith",
        "email_address": "johnsmith@gmail.com",
        "age": 21
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "email_address": "janeDoe@gmail.com",
        "age": 23
    }
]
```

Let's use our new route and create a post request!

1. Copy one of the returned objects (John or Jane)
2. Open a new tab in Postman
3. Select POST
4. The request URL is `localhost:3030/contacts` 
5. Head to the `Body` tab, check `raw`, select `JSON` from the dropdown and paste in the old object and modify it to something new:

Remeber the `id` is automatically generated so we can remove that
```json
{
    "name": "Clark Kent",
    "email_address": "theRealSuperMan@gmail.com",
    "age": 32
}
```

After hitting `Send` With the new data we can return to the `GET` tab and hit `Send` again. We should now see our new data in the response.

# DELETE
We should be starting to see a pattern

In `index.js` create a new route:
```js
app.delete("/contact/:id", db.deleteContact);
```

In `queries.js` create a new function `deleteContact`:
```js
const deleteContact = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(`DELETE FROM people WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// Don't forget to export!
module.exports = {
  getContacts,
  addContact,
  deleteContact
}
```

We can actually delete items from the browser just by sending requests:
- If you put `localhost:3030/contact/1` it should delete your first item.
- This should clearly seem like a security issue. This is one of the reasons why tokens, keys, authentication, and authorization exsits. 

We could also write our request to be more similar to the `addContact` request which needs a req body. However this doesn't fix the issue. Just makes it accessible to someone who knows how to send a request. which we've just seen is VERY easy to do utilizing something like Postman. Therefore, we're back to ensuring we have security protocols. Generally we don't dive too deep into security in this program as it would likely be set up by a senior, lead, or principal developer. Not a junior. Knowing these concepts and understanding where vulnerabilities lie is important though.

# GET SINGLE ITEM REQUEST

If we think about CRUD, create, read, update and delete, we've already completed Create, Get/Read, and delete. However the way our update function will work is that it will only update one aspect of the row. Therefore we'll need access to the old data and look for changes. 

Example: 
Person = {name:'Test', age: 3, email:'Test@gmail.com', id=1}

PersonUpdates = {name: 'Test2', id=1}

Person = {name:'Test', age: 'Null', email:null, id=1}

These null fields will come from the updates being incomplete. The way we'll handle this is by requesting the data and ensuring that we hold the existing data and use it within any null fields. 

Therefore let's make a request to view one single item at a time. This is a common feature even without the update needs. 

## Let's get started: 
1. In `index.js` create a new `GET` route for `getContact` requests. 
```js 
app.get('/contact', db.getContact);
```
2. In `queries.js` create a function to handle `put` requests
```js
const getContact = (request, response) => {
  const { id } = request.body;
  console.log(id)
  pool.query("SELECT * FROM people WHERE id=$1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// Don't forget to export!
module.exports = {
  getContacts,
  addContact,
  deleteContact,
  getContact
}
```

# Update
1. In `index.js` create a new route for `put` requests. We use `put` for udpates.
```js 
app.put('/contacts', db.updateContact);
```
2. In `queries.js` create a function to handle `put` requests
    - This one is a little complex, let's break it down prior to writing the code.
    - High level: We need to get the data for the given ID prior to updating the data
    - More specifically:
        - Use a promise to request the existing data, we're using a promise because a request to a database will take time and won't happen in the same asynchronous nature of JavaScript. AKA if we request then set data without going synchronous through Promises with .then
    - Within here we have some logic saying 'if an item doesn't have given data, set it with the existing data'
    - We then resolve the promise & `.then()` update the data
```js
const updateContact = (req, res) => {
  let { name, email_address, age, id } = req.body;
  // Use a promise to request the existing data - we need a promise or else everything will happen in the wrong order
  let myPromise = new Promise(function(resolve, reject){
    pool.query("SELECT * FROM people WHERE id=$1", [id], (error, results) => {
      if (error) {
        throw error;
      } else if(res){
        // if an item doesn't have given data, set it with the existing data 
        name = name !== undefined ? name : results.rows.name;
        email_address = email_address !== undefined ? email_address : results.rows.email_address;
        age = age !== undefined ? age : results.rows.age;
        // We then resolve the promise
        resolve(results.rows)
        return results.rows
      } else {
        reject()
      }
    })
  });
// `.then()` and update the data
  myPromise.then(() => {
    try {
      pool.query(
        `UPDATE people 
            SET name=$1, email_address=$2, age=$3 
            WHERE id = $4;`,
        [name, email_address, age, id],
        (error, results) => {
          if (error) {
            console.log(error, '<--- error here')
            throw error;
          }
          console.log(results, "<--- result!")
          res.status(200).json(results.rows)
        }
      );
    } catch (error) {
      throw error;
    }
  })
};

// Don't forget to export!
module.exports = {
  getContacts,
  addContact,
  deleteContact,
  updateContact
}
```

The full `queries.js` now looks like this:
```js
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "contacts",
  password: "testpass1",
  port: 5432,
});

const getContacts = (req, res) => {
  pool.query("SELECT * FROM people", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const addContact = (req, res) => {
  try {
    const {
      name,
      email_address,
      age
    } = req.body;
    pool.query(
      `INSERT INTO people (name, email_address, age) VALUES ($1, $2, $3) RETURNING *;`,
      [name, email_address, age],
      (error, results) => {
        if (error) {
          console.log(error, '<--- error here')
          throw error;
        }
        console.log(results, "<--- result!")
        res.status(200).json(results.rows)
      }
    );
  } catch (error) {
    throw error;
  }
};

const deleteContact = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(`DELETE FROM people WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getContact = (req, res) => {
  const { id } = req.body;
  pool.query("SELECT * FROM people WHERE id=$1", [id], async (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
    return results.rows
  });
};

const updateContact = (req, res) => {
  let { name, email_address, age, id } = req.body;
  let myPromise = new Promise(function(resolve, reject){
    pool.query("SELECT * FROM people WHERE id=$1", [id], (error, results) => {
      if (error) {
        throw error;
      } else if(res){
        name = name !== undefined ? name : results.rows.name;
        email_address = email_address !== undefined ? email_address : results.rows.email_address;
        age = age !== undefined ? age : results.rows.age;
        resolve(results.rows)
        return results.rows
      } else {
        reject()
      }
    })
  });

  myPromise.then(() => {
    try {
      pool.query(
        `UPDATE people 
            SET name=$1, email_address=$2, age=$3 
            WHERE id = $4;`,
        [name, email_address, age, id],
        (error, results) => {
          if (error) {
            console.log(error, '<--- error here')
            throw error;
          }
          console.log(results, "<--- result!")
          res.status(200).json(results.rows)
        }
      );
    } catch (error) {
      throw error;
    }
  })
};

module.exports = {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
  getContact
}
```

We now should be able to create, read, update, and delete items using Postman in tandem with our APIs.

Let's create a React App to request and visualize the data

# Full Stack App!

Generally speaking your front-end and backend should not share GitHub repositiories. Your file structure should look like this:
- ContactsFullStack
    - API (git:(main))
        - Index.js
        - Queries.js
        - (OTHER GENERATED FILES node_modules, package.json, package-lock.json, logfile)

Let's navigate into our ContactsFullStack and create a React app
- run the command: `npx create-react-app contacts`

Let's now `cd` into our contacts react app and push it up to a NEW repo

Let's dive right in. Using fetch as we did with our previous API projects let's try and get some data:

App.js:
```js
import './App.css';

function App() {
  function getData(){
    fetch('http://localhost:3030/contacts')
    .then(res => res.json())
    .then(res => console.log(res))
  }
  getData()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Data will go here</h1>
      </header>
    </div>
  );
}

export default App;

```

If we take a look at the console we see this error:
        
    Access to fetch at 'http://localhost:3030/contacts' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

Head back into our index.js and turn on CORS:

API/index.js
```js
const cors = require('cors');

app.use(cors());
```

Our `index.js` now looks like this:

```js
const bodyParser = require('body-parser');
const db = require('./queries.js');
const express = require('express'); 
const cors = require('cors');
const app = express(); 
const port = 3030;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (request, response) => { 
    response.json({ info: 'Node.js, Express and Postgres API'}) 
})

app.get('/contacts', db.getContacts);
app.get('/contact', db.getContact);
app.post('/contacts', db.addContact);
app.delete("/contact/:id", db.deleteContact);
app.put('/contacts', db.updateContact);


app.listen(port, () => { 
    console.log(`App running on port ${port}.`) 
})
```

Okay, so now that we are getting data, we need to use it

We are receiving an array of objects. We can expect to map over it and render that on our app. The data doesn't exist on load which indicates that we need to `useEffect`. The data needs to be stored somewhere and convention says `useState` is a great way to do that!

Our `app.js` now looks like this:
```js
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([])

  useEffect(()=>{
    console.log('using effect')

    getData()
  }, [])

  function getData(){
    console.log('getting data')
    fetch('http://localhost:3030/contacts')
    .then(res => res.json())
    .then(res => setContacts([...res]))
  }
  return (
    <div className="App">
      <header className="App-header">
        {contacts.map(contact => {
          return(
            <div>
              <h3>{contact.name}</h3>
              <p>{contact.email_address}</p> 
              <p>{contact.age}</p>
            </div> 
          )
        })}
      </header>
    </div>
  );
}

export default App;

```

In a few lines of css we can modify our elements to render in a more visually appealing way:
```css
.contactCard{
  box-shadow: 3px 4px 5px 6px rgba(0, 0, 0, 0.24);

  width: 500px;
  border-radius: 10px;
  margin: 21px;
  padding: 10px;
}

.contactCard:hover{
  border: 1px solid #88d7ff31;
  margin: 20px;
}
```

Generally speaking you should learn a style that is modern and you like and learn how to recreate that style within a few lines of `CSS`

Let's start off with deleting some items. If you take a look at our console we have a Warning - each key should have a unique key prop. Knowing that we're grabbing unique items from our DB which are created with serial numbers (always incrementing even if everything has been deleted) we can use this serial number as our key:
```js
    //OLD:
    {contacts.map(contact => { 
        return(
            <div className='contactCard'>
            ...
            </div>
        )
    })}

    // New:
    {contacts.map((contact) => {
        return(
            <div className='contactCard' key={contact.id}>
            ...
            </div>
        )
    })}
```

Now we can use this data for creating, reading updating and deleting items in our DB

# Delete

1. Add a button which will fire a delete function
2. Console.log the right data in our function when we click delete
3. Make a fetch request to our server to delete an item
4. Ensure the website updates when we delete something 

Let's tackle them
1. Add a button which will fire a delete function
```js
<button onClick={() => deleteContact(contact.id)}>Delete</button>
```
2. Console.log the right data in our function when we click delete
```js
function deleteContact(id){
    console.log(id)
}
```
3. Make a fetch request to our server to delete an item
```js
fetch(`http://localhost:3030/contact/${id}`, {
        method: 'DELETE',
        headers:{
        'Content-Type': 'application/json',
    },
})
```

4. Ensure the website updates when we delete something 

Our delete function now looks like this:
```js
function deleteContact(id){
    console.log(id)
    fetch(`http://localhost:3030/contact/${id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => getData())
  }
```

# Create

We need to create some functionality to create a new contact card. This will start as a button but then turn into a card with some text-inputs. 

Our steps are:
1. Create a button which fires an 'add item' function
2. Create a card below the button
3. Give the button and the card the ability to swap display attributes
4. When we submit a card console log the data we currently have
5. Create a new request to add the new data
6. Ensure the app updates after adding a new item

Let's tackle each step:

1. Create a button which fires an 'add item' function
```js
function addItem(){
    console.log('Adding Item');
}
// ...
<button onClick={() => setHidden(!hidden)}>Add New Item</button>
```
2. Create a card below the button
```js
<div className='contactCard' >
    <h3>Name:&nbsp;<input placeholder='name'/></h3>
    <br/>
    <p>Email:&nbsp;<input placeholder='email'/></p>
    <br/>
    <p>Age:&nbsp;<input placeholder='age'/></p>
    <br/>
    <button disabled>Delete</button>
</div> 
```
This looks a little funky so let's clean it up in css
```css
.contactCard h3, .contactCard p, .contactCard input{
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20px;
}
```
3. Give the button and the card the same CSS and swap that attribute when we click the button or when we submit a card

We can achieve this using a ternary which shows either one or the other item:
```js
const [hidden, setHidden] = useState(true);
//...
{hidden ?
    <button onClick={() => setHidden(!hidden)}>Add New Item</button>:
    <div className='contactCard' >
        <h3>Name:&nbsp;<input placeholder='name'/></h3>
        <br/>
        <p>Email:&nbsp;<input placeholder='email'/></p>
        <br/>
        <p>Age:&nbsp;<input placeholder='age'/></p>
        <br/>
        <button onClick={()=>addItem()}>Submit</button>
</div>}
```
4. When we submit a card console log the data we currently have and show the 'add new item' button
```js
function addItem(){
    console.log('adding item');

    setHidden(!hidden)
}
```
5. Store the data somewhere, create a new request to add the new data, & ensure the app updates after adding a new item
```js
const [newContact, setNewContact] = useState({name:'', email_address:'', age:''});

// ....

function addItem(){
    console.log(newContact);

    fetch(`http://localhost:3030/contacts`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
    })
        .then(res => res.json())
        .then(res => getData())

    setHidden(!hidden)
}

// ...

{hidden ?
<button onClick={() => setHidden(!hidden)}>Add New Item</button>:
<div className='contactCard' >
    <h3>Name:&nbsp;<input onChange={(e)=>setNewContact({...newContact, name: e.target.value})} value={newContact.name} placeholder='name'/></h3>
    <br/>
    <p>Email:&nbsp;<input onChange={(e)=>setNewContact({...newContact, email_address: e.target.value})} value={newContact.email_address} placeholder='email'/></p>
    <br/>
    <p>Age:&nbsp;<input onChange={(e)=>setNewContact({...newContact, age: e.target.value})} value={newContact.age} placeholder='age'/></p>
    <br/>
    <button onClick={()=>addItem()}>Submit</button>
</div>}
```

# Update
Lastly let's create an update feature. We want the user to have the ability to click on the card and edit the exising information.

Steps:
1. Create alternate verison of card for when it is in an 'updating' state, very similar to bottom card
```js
{contacts.map((contact) => { 
    return (!update[contact.id]? // we will have to define the update hook
    <div className='contactCard' key={contact.id}>
        <h3>{contact.name}</h3>
        <p>{contact.email_address}</p> 
        <p>{contact.age}</p>
        <button onClick={() => updateContact(contact.id)}>Update</button>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div> 
    :
    <div className='contactCard' key={contact.id}>
        {//The updateContactInfo function doesnt exist yet but we'll define it later on}
        <input defaultValue={contact.name} field='name' placeholder='name' onChange={(e) => updateContactInfo(contact, e)}/>  
        <input defaultValue={contact.email_address} field='email_address' placeholder='email' onChange={(e) => updateContactInfo(contact, e)}/>
        <input defaultValue={contact.age} field='age' placeholder='age' onChange={(e) => updateContactInfo(contact, e)}/>
        <button onClick={() => updateContact(contact.id)}>Cancel</button>
        {//The completeUpdate function doesnt exist yet but we'll define it later on}
        <button onClick={() => completeUpdate(contact)}>Update</button>
    </div>
    )
})}
```
2. Create updating states (we actually dont have to do this as we can access the specific item within the update state)
```js
const [update, setUpdate] = useState({});
```
3. Create a function which swaps cards from updating to not updating and visa-versa 

```js
// loop through all cards and set them to false, then, if given an ID update the new item to be the inverse of it's current boolean. We're including this if so that we can re-use this function after completing an update reqest - looping through all the data and setting update to false.
function updateContact(id){
    const newUpdate = {...update};

    for(let contact in contacts){
      newUpdate[contacts[contact].id] = false;
    }

    id !== undefined ? setUpdate({...newUpdate, [id]: !update[id]}) : setUpdate(newUpdate);
}
```
4. Ensure input fields are rendered with prefilled text of the existing data and that when the user updates the text it is saved to state.
```js
function updateContactInfo(contact, e){
    contact[e.target.getAttribute('field')] = e.target.value;
    for(let i in contacts){
      if(contact.id === contacts[i].id){
        let updatedContacts = [...contacts];
        updatedContacts[i] = contact;
        setContacts([...updatedContacts])
      }
    }
}
```
5. Fetch request to update the card, re-render the app with the updated data
```js
function completeUpdate(){
    fetch(`http://localhost:3030/contacts`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatingContact),
    })
    .then(res => res.json())
    .then(() => getData())
}
```
6. Update the CSS:
```css
.contactCard{
  box-shadow: 3px 4px 5px 6px rgb(0 0 0 / 24%);
  width: 500px;
  border-radius: 10px;
  margin: 21px;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.contactCard button{
  width: 100px;
  min-width: fit-content;
  margin: 2.5px auto;
}
```

Keep in mind we would want (miniumum) each card to be a separate component, here's our updated code:

App.js
```js
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({name:'', email_address:'', age:''});
  const [update, setUpdate] = useState({});
  const [hidden, setHidden] = useState(true);
  

  useEffect(()=>{
    getData()
  }, [])

  function getData(){
    fetch('http://localhost:3030/contacts')
      .then(res => res.json())
      .then(res => setContacts([...res]))
  }

  function deleteContact(id){
    fetch(`http://localhost:3030/contact/${id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(() => getData())
  }

  function addItem(){
    fetch(`http://localhost:3030/contacts`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })
      .then(res => res.json())
      .then(() => {getData(); setNewContact({name:'', email_address:'', age:''});
    })

    setHidden(!hidden)
  }

  function completeUpdate(contact){
    fetch(`http://localhost:3030/contacts`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then(res => res.json())
      .then(() => getData())
      .then(() => updateContact())
  }

  function updateContact(id){
    const newUpdate = {...update};

    for(let contact in contacts){
      newUpdate[contacts[contact].id] = false;
    }

    setUpdate(newUpdate);
    if(id !== undefined){setUpdate({...newUpdate, [id]: !update[id]})};
  }

  function updateContactInfo(contact, e){
    contact[e.target.getAttribute('field')] = e.target.value;
    for(let i in contacts){
      if(contact.id === contacts[i].id){
        let updatedContacts = [...contacts];
        updatedContacts[i] = contact;
        setContacts([...updatedContacts])
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {contacts.map((contact) => { 
          return (!update[contact.id]?          
            <div className='contactCard' key={contact.id}>
              <h3>{contact.name}</h3>
              <p>{contact.email_address}</p> 
              <p>{contact.age}</p>
              <button onClick={() => updateContact(contact.id)}>Update</button>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </div> 
            :
            <div className='contactCard' key={contact.id}>
              <input defaultValue={contact.name} field='name' placeholder='name' onChange={(e) => updateContactInfo(contact, e)}/>
              <input defaultValue={contact.email_address} field='email_address' placeholder='email' onChange={(e) => updateContactInfo(contact, e)}/>
              <input defaultValue={contact.age} field='age' placeholder='age' onChange={(e) => updateContactInfo(contact, e)}/>
              <button onClick={() => {updateContact(contact.id); getData()}}>Cancel</button>
              <button onClick={() => completeUpdate(contact)}>Update</button>
            </div>
          )
        })}
      {hidden ?
        <button onClick={() => setHidden(!hidden)}>Add New Item</button>:
        <div className='contactCard' >
          <h3>Name:&nbsp;<input onChange={(e)=>setNewContact({...newContact, name: e.target.value})} value={newContact.name} placeholder='name'/></h3>
          <br/>
          <p>Email:&nbsp;<input onChange={(e)=>setNewContact({...newContact, email_address: e.target.value})} value={newContact.email_address} placeholder='email'/></p>
          <br/>
          <p>Age:&nbsp;<input onChange={(e)=>setNewContact({...newContact, age: e.target.value})} value={newContact.age} placeholder='age'/></p>
          <br/>
          <button onClick={()=>addItem()}>Submit</button>
      </div>}
      </header>
    </div>
  );
}

export default App;
```
App.css
```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 100px ;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.contactCard{
  box-shadow: 3px 4px 5px 6px rgb(0 0 0 / 24%);
  width: 500px;
  border-radius: 10px;
  margin: 21px;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.contactCard:hover{
  border: 1px solid #88d7ff31;
  margin: 20px;
}

.contactCard h3, .contactCard p, .contactCard input{
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20px;
}

.contactCard button{
  width: 100px;
  min-width: fit-content;
  margin: 2.5px auto;
}
```

BACK END:

index.js
```js
const bodyParser = require('body-parser');
const db = require('./queries.js');
const express = require('express'); 
const cors = require('cors');
const app = express(); 
const port = 3030;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (request, response) => { 
    response.json({ info: 'Node.js, Express and Postgres API'}) 
})

app.get('/contacts', db.getContacts);
app.get('/contact', db.getContact);
app.post('/contacts', db.addContact);
app.delete("/contact/:id", db.deleteContact);
app.put('/contacts', db.updateContact);


app.listen(port, () => { 
    console.log(`App running on port ${port}.`) 
})
```

queries.js
```js
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "contacts",
  password: "testpass1",
  port: 5432,
});

const getContacts = (req, res) => {
  pool.query("SELECT * FROM people", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const addContact = (req, res) => {
  try {
    const {
      name,
      email_address,
      age
    } = req.body;
    pool.query(
      `INSERT INTO people (name, email_address, age) VALUES ($1, $2, $3) RETURNING *;`,
      [name, email_address, age],
      (error, results) => {
        if (error) {
          console.log(error, '<--- error here')
          throw error;
        }
        console.log(results, "<--- result!")
        res.status(200).json(results.rows)
      }
    );
  } catch (error) {
    throw error;
  }
};

const deleteContact = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(`DELETE FROM people WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getContact = (req, res) => {
  const { id } = req.body;
  pool.query("SELECT * FROM people WHERE id=$1", [id], async (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
    return results.rows
  });
};

const updateContact = (req, res) => {
  let { name, email_address, age, id } = req.body;
  let myPromise = new Promise(function(resolve, reject){
    pool.query("SELECT * FROM people WHERE id=$1", [id], (error, results) => {
      if (error) {
        throw error;
      } else if(res){
        name = name !== undefined ? name : results.rows.name;
        email_address = email_address !== undefined ? email_address : results.rows.email_address;
        age = age !== undefined ? age : results.rows.age;
        resolve(results.rows)
        return results.rows
      } else {
        reject()
      }
    })
  });

  myPromise.then(() => {
    try {
      pool.query(
        `UPDATE people 
            SET name=$1, email_address=$2, age=$3 
            WHERE id = $4;`,
        [name, email_address, age, id],
        (error, results) => {
          if (error) {
            console.log(error, '<--- error here')
            throw error;
          }
          console.log(results, "<--- result!")
          res.status(200).json(results.rows)
        }
      );
    } catch (error) {
      throw error;
    }
  })
};

module.exports = {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
  getContact
}
```