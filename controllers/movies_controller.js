var movies = require('../models/movies');

module.exports = {
  create: function(req, res) {
    var listOfMovies = req.body.movies;

    listOfMovies.forEach(function(movie) {
      movies.push(movie);
    })

    return res.status(200).send(movies);
  },

  read: function(req, res) {
    var title = req.query.title;
    var genre = req.query.genre;

    if (genre && title) {
      // double search
      var returnedMovie = movies.find(function(movie) {
        return movie.title === title && movie.genre === genre;
      });

      res.status(200).send(returnedMovie);
    } else if (genre || title) {
      // search single
      var returnedMovie = movies.find(function(movie) {
        return movie.title === title || movie.genre === genre
      });
      res.status(200).send(returnedMovie);
    } else {
      res.status(400).send('Must pass in search queries (genre or title');
    }
  },

  getOne: function(req, res, next) {
    console.log('params', req.params)
    var movieTitle = req.params.title;

    for (var i = 0; i < movies.length; i++) {
      if (movies[i].title === movieTitle) {
        return res.status(200).send(movies[i]);
      }
    }
  },

  delete: function(req, res) {
    var movieToDelete = req.params.title;
    console.log('title', movieToDelete)

    for (var i = 0; i < movies.length; i++) {
      if (movies[i].title === movieToDelete) {
        movies.splice(i, 1);
      }
    }

    res.status(200).send(movies);
  }
}
