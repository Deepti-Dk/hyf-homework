const express = require('express');
const app = express();

const meal = require('./routes/meal.js');
const cheapMeal = require('./routes/cheap-meals.js');
const largeMeal = require('./routes/large-meals.js');
const randomReservation = require('./routes/reservation.js');
const reservations = require('./routes/reservations.js');
const meals = require('./routes/meals.js');

app.get('/meals', (request, response) => {
  response.send(meals);
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
app.get('/reservations', (request, response) => {
  response.send(reservations);
});
app.get('/reservation', (request, response) => {
  response.send(randomReservation);
});

module.exports = app;
