const express = require('express');
const app = express();
const db = require("./queries.js");
const port = 3030;
const bodyparser = require("body-parser");
const cors = require("cors");

app.use(cors());

// This is allowing our API to take in the HTTP
// request and parse it into JSON
app.use(bodyparser.json());
// More configuration for our API...
app.use(bodyparser.urlencoded({
  extended: true
}));

// Here we are setting up our Routes (ENDPOINTS)
// for our API

app.get('/', (request, response) => {
  response.json({ info: "Hello there you... you... lovely person" })
});

app.get('/iwantbatman', (request, response) => {
  response.json({ info: "Batman" })
});

app.get('/planes', db.getPlanes);
app.post('/planes', db.addPlanes);

app.listen(port, () => {
  console.log(`Server is running... on port ${port}`);
});