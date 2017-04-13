// MODULES
var express = require('express')
var bodyParser = require('body-parser')
// we want to remember our user state before and after requests
var session = require('express-session')

// CONTROLLERS - business logic
// When we want to organize our code, we can separate it into different files, and require it in other files as a variable
var CarsController = require('./controllers/cars_controller.js')
// the .js is optional
// var CarsController = require('./controllers/cars_controller')

// CONFIG SECRETS
var config = require('./.config.js')

// instantiate express so we can use it
var app = express()

// assign a port to listen to
var port = 5000

// MIDDLEWARE
// app.use() - it runs for every request below it
// put above endpoints. will not run for endpoints below it in the file because express reads the file top to bottom
// we have to call next, in order for express to call the next function

// Use middleware to serve up our frontend application
// everytime we hit an endpoint/call a route, serve up this folder
// __dirname - the root folder
// dirname = webdm21/public
// app.use(express.static('./public'))
// often called either public or static
app.use(express.static(__dirname + '/dist/otherDist'))

// if you want people to access your server API / endpoints, you use cors
// download the cors npm module `npm install --save cors`
// var cors = require('cors')
// app.use(cors())

// SESSION CODE
app.use(session({
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

// SESSION INFO will be available in req.session
// req.session.id

// this will parse our data sent back
app.use(bodyParser.json())
// this will take care of parsing data if the browser decided to send it as url encoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
  console.log('hai')
  next()
})

// middleware to console.log session id
// shopping carts
app.use(function (req, res, next) {
  console.log('session id', req.session.id)
  next()
})

// specific route middleware
// put it on any endpoint that we want this to run on
function onlyOnSomeMiddleware (req, res, next) {
  console.log('I am running')
  next()
}

// you can have as many middlewares as you want
app.get('/cars', onlyOnSomeMiddleware, CarsController.getCars)

// REQ.PARAMS
app.get('/cars/:carId', CarsController.getCar)

// REQ.PARAMS
// Give me this thing that I  know is there
app.get('/name/:make', CarsController.getCarByMake)

// REQ.QUERY
// Searching something that may or may not be there
// Is it there? Maybe, maybe not
app.get('/search', CarsController.search)


// LISTEN ON PORT / open up a connection
app.listen(port, function () {
  console.log('Listening on port', port);
})
