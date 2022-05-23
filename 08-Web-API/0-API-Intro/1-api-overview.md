# API
Before we get started, let's boot up a new React project. Run the following commands:
- `npx create-react-app API-example`
- `npx create-react-app API-practice`
- We will be building this example as a project that you can keep on your portfolio if you'd like
## What is an API?
API is an Application Programming Interface. It is software that serves as an intermediary between two applications, allowing them to communicate with eachother. 

For example: When we head to a website, say Facebook, our client browser makes a reqest to Facebook's servers (a computer in a building in a data center). That server contains code that then returns information. The server is hosting the Application Programming Interface (API).
- Note: you will nearly never hear someone say the whole phrase for API so try to remember what it means!

Today we're going to dive right in to learning how to access information within an API by creating a dataset that would traditionally be contained within an API. 
## JSON
> Nowadays when we reach out to an API we are receiving JSON data back. 

### What is JSON?

- JSON is JavaScript Object Notation
- It looks alot like an object and is one of the simplest ways of sending data across the internet 
- The process is easy. Let's say we're trying to send and receive data from Facebook
  - When my browser makes a request it will utilize all datatypes locally (strings, arrays, objects, etc.) but when it's about to send this information to Facebook's servers it will compile this information into JSON - a block of text that will be easily sent and in a standard format to be read. 
  - The same goes for when FB is sending information back. It will parse the sent data, use it, build a response to it, translate it's response into JSON and then send that JSON back. 
  - The process likely repeats many times based on your activities.

### What does JSON look like? 
An example piece of JSON looks like this:
```js
const cars = '["Ferrari", "BMW", "Peugeot"]';
```
This example is a little simple and doesnt show what JSON can and will truly look like. Usually it's hundreds of lines with nested objects and arrays. But for now we can utilize this for practice:

## JSON.parse(json)
JSON.parse() is utilized for converting data from JSON into a JavaScript object. After we parse the above information we can query it the same way we would an array:

```js
const cars = '["Ferrari", "BMW", "Peugeot"]';
const data = JSON.parse(cars);
console.log(data[0]); // Ferrari
console.log(data[2]); // Peugeot
```

```js
const json = `{
    "employees":[
        {
          "name": "Micheal Scott",
          "username": "M-Scott",
          "city": "Scranton",
          "state": "Pennsylvania", 
          "online": false,
          "position": "manager",
          "age": 31
        }, 
        { 
          "name": "Dwight Schrute",
          "username": "D-Schrute",
          "city": "Scranton",
          "state": "Pennsylvania", 
          "online": true,
          "position": "assistant to the regional manager",
          "age": 31
        },
        {
          "name": "James Halpert",
          "username": "J-Halpert",
          "city": "Scranton",
          "state": "Pennsylvania", 
          "online": false,
          "position": "Sales Lead",
          "age": 31
        },
        {
          "name": "Toby Flenderson",
          "username": "T-Flenz",
          "city": "Scranton",
          "state": "Pennsylvania", 
          "online": true,
          "position": "HR",
          "age": 31
        }
    ]
  }`
```

Using this data we can decare it within our react-app

Keep in mind usually JSON data comes externally. In this example we're going to pull the information from a variable. 

In our `App.js` declare a variable called `json` and set it equal to the `JSON` above. 

For now let's just render each person to the page. Map through the data to render a card with each person's information. 

```js
const data = JSON.parse(json);
...
{data.employees.map(person => <h1>{person.name}</h1>)}
...
```

## Components with props
A big feature of React is the ability to pass data around. Let's use this JSON to pass data as props to a child component. 
```js
<Person key={Math.ceil(Math.random(1)*100000)} person={person} />
```
Now take a moment to render out all the individuals information to the page - not just their names. 

# Let's practice!
In your practice react app create your own JSON for something you like. Some examples are fruit, cars, shoes, characters, etc...

Each item should include the following:
- An image (use a link)
- A name
- An age/year
- A boolean value
- Something else of your choosing

Create a component which will render each of these items displaying all their prior information. 