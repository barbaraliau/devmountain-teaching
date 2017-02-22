// external dependencies
var express = require('express');
var bodyParser = require('body-parser');
var movies = require('./models/movies');
var MoviesController = require('./controllers/movies_controller');

// app specific variables
var app = express();
var port = 9090;

// MIDDLEWARE - app.use()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PASSING IN DATA
// pass in data with a get

// Path Params --> req.params

// URL Queries --> req.query

// get the movie --> req.params
app.get('/movies/:title', function(req, res, next) {
  console.log('params', req.params)
  var movieTitle = req.params.title;

  for (var i = 0; i < movies.length; i++) {
    if (movies[i].title === movieTitle) {
      return res.status(200).send(movies[i]);
    }
  }
});

// post movie --> req.body
app.post('/movies', MoviesController.create);

// search/get movie --> req.query
app.get('/movies', MoviesController.read);

// req.params
app.delete('/movies/:title', function(req, res) {
  var movieToDelete = req.params.title;
  console.log('title', movieToDelete)

  // var newMovies = movies.map(function(movie) {
  //   if (movie.title !== movieToDelete) {
  //     return movie;
  //   }
  //   return
  // });

  // movies = newMovies;
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].title === movieToDelete) {
      movies.splice(i, 1);
    }
  }

  res.status(200).send(movies);
});

app.get('/books', function(req, res) {
  console.log('queries', req.query)
})

app.listen(port, function() {
  console.log('Listening on port', port);
});
