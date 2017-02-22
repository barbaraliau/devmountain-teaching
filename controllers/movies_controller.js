var movies = require('../models/movies');

var createMovie = function(req, res) {
  var listOfMovies = req.body.movies;

  listOfMovies.forEach(function(movie) {
    movies.push(movie);
  })

  return res.status(200).send(movies);
}


module.exports = {
  create: createMovie,

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
  }
}
