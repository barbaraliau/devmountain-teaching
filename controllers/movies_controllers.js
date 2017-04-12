var movies = require('../models/movies.js');

module.exports = {
  create: function (req, res, next) {
    movies.push(req.body);
    res.status(200).send({ message: 'OK', movies: movies });
  },

  get: function (req, res, next) {
    res.status(200).send({
      movies: movies,
      message: 'Here are your movies'
    });
  },

  search: function(req, res, next) {
    console.log('queries', req.query);
    var results = [];
    for (var i = 0; i < movies.length; i++) {
      for (var key in req.query) {
        if (movies[i][key] === req.query[key]) {
          results.push(movies[i]);
        }
        // TODO Write better to only filter movies
        // if they match ALL queries
      }
    }
    console.log('results', results);
  },

  getOne: function (req, res, next) {
    console.log(req.params);
    for (var i = 0; i < movies.length; i++) {
      // in this case, id is index of movie
      if (i.toString() === req.params.id) {
        return res.status(200).send(movies[req.params.id]);
      }
    }
    res.status(404).send('Not found hbsdlkFSDAJLKASFDKLJDFSALK');
  }
};
