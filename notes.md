### SERVER
- a computer that provides functionality for client(s)
- your own computer or another computer
- types: game, web, file, datbase

### COMMUNICATION
- Standard way of sending messages
- HTTP (Hypertext Transfer Protocol)

### HTTP
- method (CRUD -> GET, POST, PUT, DELETE)
- headers (Content-Type - application/json)
- body (Messages in JSON)
- path (address to hit)

### NPM
- a bunch of code in a repository for us to use for our applications
- package.json (manages those packages)
  - create manually
  - `npm init`

```
var express = require('express')
```

`npm install --save`
this will save name of package to package.json

`npm install -g nodemon`
available everywhere (-g is --global)
these are utility modules

### express
- it makes life easier
- node server framework
- app.get(), app.post(), app.put(), app.delete()

1. require it
2. Instantiate express
3. Listen on a port
4a. Use bodyParser (to parse requests)
4. Make endpoints

### Tools
Postman - allows us to make HTTP requests w/out a client

Nodemon - watches our server file (index.js) and restarts when we make changes
