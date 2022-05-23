# What is a web-server?
It's just a computer that is listening for requests from the client (user computer) and then serving (delivering)information to the client.
  
# Client-server model
    It's the relationship between the client and the server - again, client being a users computer and the server being on the
    other end. 

# HTTP
`Hypertext Transfer Protocol` or `HTTP`, is a set of rules (and a format) for data being transferred on the web. It's a format (of various) defining data being transferred via `Transmission Control Protocol`(`TCP`) or `Internet Protocol`(`IP`).

  - TCP/IP is another set of rules two sides agree on (client / server) when communicating. This defines the rules for actually sending the information.

# How are we going to create a web-server?
  Utilizing Node.js! As you may recall, Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and ***executes JavaScript code outside a web browser***. 
  
  In combination with Node.js we are going to use Express.js, which is a Node.js library. 
  - Express.js, or simply Express, is a back end web application framework for Node.js. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. 
  - There are many server-side frameworks & libraries that one could choose from we use Express because:
    - It is the most widely used framework
    - It only requires JavaScript
    - It's lightweight (does not require as many code changes to incorporate into app)
    - Provides simple out-of-the-box routing requests (how endpoints respond to client requests)
    - Provides middleware for handling decisions and responses (compartmentalized code: functions that execute during a request to the server)

# Let's Get Started!
How do we create an express server?

Create a directory called `contacts`
  - Create a file called `index.js` and another called `queries.js`

From the terminal, within your directory, run the following commands
  - `npm init -y`
    - This creates your package.json and `-y` accepts all defaults 
  - `npm install pg express`
    - This is two commands bundled together - install pg (postgres), and install express
  - `npm install body-parser`
    - This will be used to convert your post requests into JSON
  - `npm install cors`
    - cors is a package for providing an express middleware that can be used to enable CORS...
      - CORS is cross-origing resource sharing. 
      - CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was serverd
      - Current internet standards inherently prevent data being accessed from different endpoints. We need to install CORS to allow and handle cross origin requests. Our origins may be something like 'localhost:3000' and 'localhost:3001'
      - Essentially, we need this module in order to turn off/modify the default security in place between two seperate endpoints that are trying to talk to each other over the web.
      - This final point goes for most packages we are installing, in theory you could write this code yourself BUT it may take weeks. At certain companies they may request that you build an application without utlizing any dependencies. This will slow the development process but also decrease risk. 
  - `npm i -g nodemon` 
    - Similar to HTML LiveServer, nodemon allows for 'hot reloading' of our sever code.
    - Technically this one isn't required but expedites the programming process
    - Using the `-g` flag installs this package globally on your device and allows yourself the luxury of using nodemon on any future node project
    
## Notes:
- The phrasing one might use is "we installed multiple dependencies in our project, node-postgres, Express, body-parser and CORS. We also installed nodemon to expidite the development process."
- Node-postgres is going to allow us to communicate with our db, which we will create using PSQL/PostgreSQL
- We will be building a RESTful API
  - Representational state transfer
  - Essentially, it's an architectural style of building an API

***Lets take a break to read about RESTful APIs***
- https://www.redhat.com/en/topics/api/what-is-a-rest-api
    

