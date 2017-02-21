// external dependencies
var express = require('express');
var bodyParser = require('body-parser');
var movies = require('./movies');

// app specific variables
var app = express();
var port = 9090;

// MIDDLEWARE - app.use()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ENDPOINTS - Simple Netflix MOVIES
// LIST MOVIES
// GET MOVIES
// POST/ADD MOVIES
// DELETE MOVIES
// UPDATE MOVIES
app.get('/movies', function(req, res) {
  console.log('Getting movies');
  res.status(200).send(movies);
});

app.post('/movies', function(req, res) {
  console.log('Request body', req.body);
  // database code to add movie info to db
  movies.push(req.body);
  res.status(200).send(movies);
})

app.put('/movies', function(req, res) {
  console.log('body', req.body);
  // loop through movies, find the one we want to replace
  // replace
  // send back result
  for (var i = 0; i < movies.length; i++) {
    if (req.body.title === movies[i].title) {
      movies[i] = req.body;
    }
  }
  console.log('movies', movies);
  res.status(200).send(movies);
});

app.delete('/movies', function(req, res) {
  for (var i = 0; i < movies.length; i++) {
    if (req.body.title === movies[i].title) {
      delete movies[i];
    }
  }
  console.log('movies', movies);
  res.status(200).send(movies);
})


app.listen(port, function() {
  console.log('Listening on port', port);
});
