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
