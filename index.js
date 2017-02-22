// external dependencies
var express = require('express');
var bodyParser = require('body-parser');
var movies = require('./models/movies');
var MoviesController = require('./controllers/movies_controller');

// app specific variables
var app = express();
var port = 9090;

function authorized(req, res, next) {
  console.log('Authorized');
  next();
}

function logDate(req, res, next) {
  console.log(new Date());
  next()
}

function isAdmin(req, res, next) {
  if (req.body.user === 'admin') {
    console.log('user is admin')
    next()
  } else {
    console.log('user is not admin')
    return res.status(403).send('Forbidden - no entry');
  }
}

// MIDDLEWARE - app.use()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logDate);
// app.use(isAdmin);

app.post('/hai', function(req, res) {
  res.status(400).send(req.body);
})

app.get('/hai', function(req, res) {
  res.status(200).send('hai');
});

// This will never get called because the function above it
// gets called and the request/response ends
app.get('/hai', function(req, res) {
  res.status(200).send('fajklasdflkfdjsklafsd;l');
})

app.use(isAdmin);
// get the movie --> req.params
app.get('/movies/:title', MoviesController.getOne);

// post movie --> req.body
app.post('/movies', MoviesController.create);

// search/get movie --> req.query
app.get('/movies', MoviesController.read);

// req.params
app.delete('/movies/:title', MoviesController.delete);

app.listen(port, function() {
  console.log('Listening on port', port);
});
