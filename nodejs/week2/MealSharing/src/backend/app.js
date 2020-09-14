const express = require('express');
const app = express();

const meal = require('./routes/meal.js');
const cheapMeal = require('./routes/cheap-meals.js');
const largeMeal = require('./routes/large-meals.js');
const randomReservation = require('./routes/reservation.js');

const meals = require('./routes/meals.js');
app.use('/meals', meals);

const reservations = require('./routes/reservations.js');
app.use('/reservations', reservations);

const reviews = require('./routes/reviews.js');
app.use('/reviews', reviews);

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

module.exports = app;
