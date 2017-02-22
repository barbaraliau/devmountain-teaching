20170221 - Node Day 1 - DM19

### node
- runs javascript

### nodemon
- fancy way to continuously restart your app
- package.json --> "main" property
- make sure whatever value "main" has is the same name as
  your starting file
  ( index.js, app.js, server.js )

### npm
Node package manager
bundles of code for you to use
`npm install --save <PACKAGE NAME>`
`npm uninstall --save <PACKAGE NAME>`
`--save` will make sure it is saved in your package.json

`npm init` creates `package.json` for you

Global Installs with `npm install -g <PACKAGE NAME>`
(typically you'll install utility modules like nodemon)

### HTTP (Hyper Text Transfer Protocol)
- a way to send requests and receive responses
- a standard way of communicating

### HTTP Codes
Use the right ones

### CRUD/REST
Create
Read
Update
Delete

### Express
app.get('/')
app.post('/')
app.put('/')
app.delete('/')

other frameworks used on Node
 - koa
 - iojs
 - sailsjs (built on express)

 ### Use Express
 ```
 // MODULES
 // Require in our modules
 var express = require('express');
 // Instantiate instance of express
 var app = express();

 // MIDDLEWARE
 //  Common is bodyParser

 // ENDPOINTS
 app.get('/', function(req, res) {
   res.status(200).send('hello');
 });

 // LISTEN ON A PORT
 app.listen(9070, function() {
   console.log('Listening on port 9070');
 });

```

// machineaddress:portnumber
// localhost:9070

### Middleware
Functions that run for every request after it

### Postman
Tool to tests endpoints

# 20170222 - Day 2 Node

### Restful APIs - CRUD
- follow this standard

### Parsing Data
`req.body`

`req.params` --> PATH PARAMS
- part of the URL and denoted with a colon
- `/movies/:title`
- `req.params.title`
- order is going to matter here
- common use cases: user accounts e.g. Twitter/Facebook
- If there's a space and you're typing it from URL or your
frontend is being weird, use %20 as a space
 - `localhost:3000/movies/Jack+Libre`
 - `localhost:3000/movies/Jack%20Libre`

`req.query` --> URL Queries
- any KEY=VALUE followed after the ? in the URL
- twitter.com/?name=Barbara+Liau

### Multiple Files - require('');
- categorizing your code into multiple files
- `module.exports` sssssssssssss
- export out one thing (array, object)
- require that in other files by assigning that to a varible

```
  var MoviesController = require('../controllers/movies_controller');
```

### Request Lifecycle
- the order in which Express calls things
- Express looks at things in the order they are written

### Middleware
- functions / actions that will run on every request that
  is written *after* it OR if it's chained in the endpoint

```
app.use(bodyParser.json());

// all these routes will use bodyParser as middleware
app.get('/', function(req, res) {

})


app.use(isAdmin);

// only these routes will use isAdmin middleware
app.post('/movies', function(req, res) {

})

app.post('/books', function(req, res) {

})
```
