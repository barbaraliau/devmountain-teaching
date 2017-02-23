// REQUIRE MODULES
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
// Adding the .js extension is optional
var FoodController = require('./controllers/food_controller.js');

// require our config variables
var config = require('./config');

// INITIALIZE EXPRESS
var app = express();
// DECLARE PORT
var port = 9091;

// MIDDLEWARE
// REGULAR USERS vs ADMIN USERS
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// ENDPOINTS
// app.get('/foods', FoodController.getAll);
app.get('/1', function(req, res) {
  console.log('got request --> session', req.session.id);
  res.status(200).send(req.session.id)
});

app.get('/2', function(req, res) {
  console.log('got request --> session', req.session.id);
  res.status(200).send(req.session.id)
})

app.get('/3', function(req, res) {
  console.log('got request --> session', req.session.id);
  res.status(200).send(req.session.id)
})

// note: This will not work without bodyParser middleware
app.post('/', function(req, res) {
  console.log('body', req.body);
});


// LISTEN
app.listen(port, function() {
  console.log('Listening on port', port);
});
