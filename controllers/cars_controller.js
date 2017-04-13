// var cars = require('./../models/cars.js') // same thing
var cars = require('./../models/cars')

// unless we module.exports out functions/variables, it's unavailable to us
// files are closures and nothing can get in or out unless you explicitly say so
module.exports = {
  getCars: function (req, res, next) {
    res.status(200).send(cars)
  },

  getCar: getCar,

  getCarByMake: function (req, res, next) {
    console.log('params', req.params.make);
    // return is needed because it's a multi-line arrow func
    var result = cars.find((car) => {
      return car.make === req.params.make
    })
    console.log('result', result)

    if (result) {
      res.status(200).send(result)
    } else {
      res.status(400).send('Not found')
    }
  }
}

// javascript object stuff
module.exports.search = function (req, res, next) {
  console.log('req.query', req.query);

  // loop though our cars array, and return all items that match our query
  // filter returns an array
  var result = cars.filter(function (car, index) {
    for (var key in req.query) {
      // if req.query.make === car.make then return that car
      if (req.query[key] === car[key]) {
        return car
      }
    }
  })
  console.log('result', result);
  if (result.length) {
    res.status(200).send(result)
  } else {
    res.status(400).send('Not found')
  }
}

function getCar (req, res, next) {
  console.log('req.params', req.params.carId);
  // going through the array (like a for loop) and return the item that matches the expression
  // don't need to return because it's a one-line arrow function and the return is implied
  var result = cars.find((car, index) => index.toString() === req.params.carId)
  // same as above
  // var result = cars.find((car, index) => {
  //   console.log('car', car, 'index', index);
  //   return index.toString() === req.params.carId
  // })

  // .find(function(itemInArray, indexOfItem))
  // .filter(function(item, index))
  // .map(function(item, index))
  if (result) {
    res.status(200).send(result)
  } else {
    res.status(404).send('Not found')
  }
}
