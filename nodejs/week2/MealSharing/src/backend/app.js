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

// const server = app.listen(3000, function () {
// 	console.log(`> Ready on http://localhost:3000`);
// });

// // Export app for testing purposes
module.exports = app;
