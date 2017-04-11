// index.js

// MODULES
var express = require('express');
var bodyParser = require('body-parser');

// FAUX-DATABASE
var movies = [{
  "title": "Pride and Prejudice",
  "director": "Jane Austen"
}, {
  "title": "Ocean's Eleven",
  "director": "George Clooney"
}, {
  "title": "Serenity",
  "director": "Joss Whedon"
}, {
  "title": "Kill Bill",
  "director": "Quentin Tarentino"
}];

// INSTANTIATE EXPRESS
var app = express();
var port = 9870;

// ENDPOINTS
app.get('/movies', function (req, res, next) {
  res.status(200).send({
    movies: movies,
    message: 'Here are your movies'
  });
});

app.post('/movie/create', function (req, res, next) {
  // do whatever
  res.status(200).send('OK')
});

app.put('/movies')

app.delete('/movies')

// LISTEN
app.listen(port, function () {
  console.log('Listening on port', port);
});
