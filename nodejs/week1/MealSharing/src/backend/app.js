const express = require('express');
const app = express();

const getRandomMeal = require('./routes/meal.js');
const getRandomReservation = require('./routes/reservation.js');

const cheapMeal = require('./routes/cheap-meals.js');
const largeMeal = require('./routes/large-meals.js');
const reservations = require('./routes/reservations.js');
const meals = require('./routes/meals.js');

app.get('/meal', (request, response) => {
  let randomMeal = getRandomMeal();
  response.send(randomMeal);
});
app.get('/reservation', (request, response) => {
  let randomReservation = getRandomReservation();
  response.send(randomReservation);
});

app.get('/meals', (request, response) => {
  response.send(meals);
});
app.get('/cheap-meals', (request, response) => {
  response.send(cheapMeal);
});
app.get('/large-meals', (request, response) => {
  response.send(largeMeal);
});

app.get('/reservations', (request, response) => {
  response.send(reservations);
});

module.exports = app;
