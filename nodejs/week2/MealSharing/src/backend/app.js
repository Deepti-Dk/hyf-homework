const express = require('express');
const app = express();

const meal = require('./routes/meal.js');
const cheapMeal = require('./routes/cheap-meals.js');
const largeMeal = require('./routes/large-meals.js');
const randomReservation = require('./routes/reservation.js');
const reservations = require('./routes/reservations.js');
const meals = require('./routes/meals.js');
const reviews = require('./routes/reviews.js');

app.get('/meals', (request, response) => {
  response.send(meals);
});
app.get('/meals/:id', async (req, res) => {
  let result = meals.filter((data) => {
    if (data.id === parseInt(req.params.id)) return true;
  });
  if (result.length != 0) {
    res.send(result);
  } else {
    res
      .status(404) // HTTP status 404: NotFound
      .send('Not found');
  }
});

app.get('/reservations', (request, response) => {
  response.send(reservations);
});
app.get('/reservations/:id', async (req, res) => {
  let result = reservations.filter((data) => {
    if (data.id === parseInt(req.params.id)) return true;
  });
  if (result.length != 0) {
    res.send(result);
  } else {
    res
      .status(404) // HTTP status 404: NotFound
      .send('Not found');
  }
});

app.get('/reviews', (request, response) => {
  response.send(reviews);
});
app.get('/reviews/:id', async (req, res) => {
  let result = reviews.filter((data) => {
    if (data.id === parseInt(req.params.id)) return true;
  });
  if (result.length != 0) {
    res.send(result);
  } else {
    res
      .status(404) // HTTP status 404: NotFound
      .send('Not found');
  }
});

app.get('/cheap-meals', (request, response) => {
  response.send(cheapMeal);
});
app.get('/large-meals', (request, response) => {
  response.send(largeMeal);
});
app.get('/meal', (request, response) => {
  response.send(meal);
});

app.get('/reservation', (request, response) => {
  response.send(randomReservation);
});

///meals?maxPrice=90
app.get('/meals/:maxPrice', async (req, res) => {
  let result = meals.filter((data) => {
    if (data.price < parseInt(req.params.maxPrice)) return true;
  });
  if (result.length != 0) {
    res.send(result);
  } else {
    res
      .status(404) // HTTP status 404: NotFound
      .send('Not found');
  }
});
module.exports = app;
