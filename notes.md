# Node - Day Dos

## Questions / Review
1. What is an endpoint and how does it relate to an API?
An API is a collection of endpoints that allows programs to communicate with each other. An endpoint exposes certain functionality.
- endpoint == doorway in
- you make those endpoints

### Review

#### Server
Gives you stuff
Provides functionality
Examples: game server (Minecraft), file server, database server,
web servers

#### Communication between Server and Client
HTTP - hypertext transfer protocol
- common and understood standard of communication

*HTTP*
- Methods (GET, POST, PUT, DELETE)
- Body (What the message is, if any)
- Headers (Instructions about the request: type of message ('Content-Type'))
- Path (Address - Where is this message going to go?)

- Not a language

### NPM and Modules
- node package manager; makes extended functionality available to us
- packaged up code with certain functionality for us to use
- globally DRY

*Installation of NPM Modules*
Install without saving package name to `package.json`
(Maybe you're just messing around and don't know if you need or want to use this module in a project)
`npm install <package name>`

Install and save package name to `package.json`
`npm install --save <package name>`

*Uninstall NPM Modules*
Uninstall without removing package name from `package.json`
`npm uninstall <package name>`

Uninstall and remove package name from `package.json`
`npm uninstall --save <package name>`

*DevDependencies*
`npm install --save-dev <package name>`

*Install multiple packages*
`npm install --save-dev <package name> <package name> <etc.>`


*Generates package.json*
`npm init`

*package.json*
Manages packages that we've installed / need for our application

*_ DO NOT UPLOAD YOUR NODE_MODULES FILES_*

`npm install` --> Read the package.json and download/install all the dependencies listed

### Global Modules
`npm install -g <package name>`

These are available everywhere. Typically they are utilitarian/tools.

Example: `nodemon`
`node`

### Express
Framework that helps us set up a Node web server
Provides us with methods that make HTTP request easy
Express is the most common

- There are other frameworks available: SailsJS, Koa, Kraken
- Why other frameworks?
  - Express is kind of loosey-goosey. Doesn't enforce a certain to do things == no convention

```
// index.js
var express = require('express');
var app = express();

app.get('/api/name', function (req, res, next) {
  console.log('Wub a dub a lub dub');
});

app.listen(6669, function () {
  console.log('Listening on port 6669');
});
```

### Tools
#### Postman
HTTP request client

#### Nodemon
Watches our main server file --> `index.js` and it restarts the `node` process whenever there are changes
- global module


===============================================================


## RESTful APIs
aka representational state transfer
- stateless (doesn't care about requests that happen before or after)

### Common Data Structure
Array of objects --> Collection of Things that are Structured The Same
`[{}, {}, {}]`

Real-world examples: user profiles (user), newsfeed (news item), messages (message)

### CRUD

PURPOSE OF METHOD  |   HTTP METHOD    |     COLLECTION (Path)
________________________________________________________
Create                  POST                /movies
Read                    GET                 /movies
Read (One)              GET                 /movies/:id
Update                  PUT                 /movies
Update (One)            PUT                 /movies/:id
Delete                 DELETE               /movies
Delete (One)           DELETE               /movies/:id

Address: *Method + Path*

### Endpoint
```
// METHOD (app.get) + PATH ('/path') + ACTION (callback fn)
app.get('/path', function (req, res, next) {
  // do stuff
});
```

### Status Codes
Use the _most_ appropriate code


### Convention
- REST
- Benefits
- HTTP methods
  - all objects or just One
- Unique method + path
- Common endpoints

=================================================================

## Parsing Data

### Path Params
- Just like UI-Router
- like a wildcard `/movies/:id`. variable in your address

*Receiving (address)*
app.get('/movies/:id')

*Sending (what address)*
$http.get('/movies/kill-bill')
$http.get('/movies/' + movieTitle)

- Stored on `req.params`
app.get('/movies/:id', function (req, res, next) {
  console.log('Name of Movie', req.params.id)
});

hc_ref=ADS&fref=nf&ft[tn]=kC&ft[qid]=6408170551856094675&ft[mf_story_key]=-2361531391696926728&ft[ei]=AI%406bd9495bbfce49923e00a247d672186c&ft[top_level_post_id]=1854429284582744&ft[fbfeed_location]=1&ft[insertion_position]=1&__md__=1


### URL Queries
- not part of the path. not part of the address
- dynamic
- `?KEY=VALUE&KEY=VALUE` --> `'localhost:9870/movies'` + `'?genre=action&director=quentin%20tarentino'`
- %20 === space
- `req.query.genre: 'action', req.query.director: 'quentin tarentino'`
! /movies/:actor/:director
! /movies/:director

/movies/find
function (req, res, next) {
  database.find(req.query)
}

## Path Params vs URL Queries
- URL Queries are more flexible than Path Params
- Params --> one unique item
- Queries --> ok getting multiple results

==================================================================

## Multiple Files

### Benefits

### Controller

`module.exports`

### Model

### File Structure / Naming

==================================================================

## Request Lifecycle

### Chaining Functions

### Cascades
- similar to CSS

==================================================================

## Middleware

### `app.use`

### `next()`

### All or Some endpoints
