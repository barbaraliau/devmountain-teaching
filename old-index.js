// index.js

// MODULES
var express = require('express');
var bodyParser = require('body-parser');
var movies = require('./models/movies.js');
var MoviesController = require('./controllers/movies_controllers.js');

// INSTANTIATE EXPRESS
var app = express();
var port = 9870;

// MIDDLEWARE - happens on every request
// app.use(function(req, res, next) {
//  // do things
    // call next() to call the next function
// })

app.use(function(req, res, next) {
  console.log('1st middleware');
  next();
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req, res, next) {
  // do logic with the req
  // if it passes your test then you can call next()
  // otherwise, return error
  console.log('4th middleware');
  next();
});

function isAdmin (req, res, next) {
  console.log('some logic with req to determine if admin');
  next();
}

// ENDPOINTS
app.get('/movies', isAdmin, MoviesController.get);

// PATH PARAMS :variable
app.get('/movies/find/:id', MoviesController.getOne);

// // REQ.QUERY
app.get('/movies/find', MoviesController.search);

// QUERIES are NOT part of the PATH
app.get('/movies/title/:title', function (req, res, next) {
  console.log('movies', movies);
  console.log('query', req.query, 'params', req.params);
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].title === req.params.title) {
      return res.status(200).send(movies[i]);
    }
  }
  res.status(404).send('Not found');
});

app.post('/movies/create', MoviesController.create);

app.put('/movies')

app.delete('/movies')

// LISTEN
app.listen(port, function () {
  console.log('Listening on port', port);
});
