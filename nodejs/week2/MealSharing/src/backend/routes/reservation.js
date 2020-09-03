const reservation = require('../data/reservations.json');
let randomReservation =
  reservation[Math.floor(Math.random() * reservation.length)];
//console.log(randomMeal);check randomMeal
module.exports = randomReservation;
