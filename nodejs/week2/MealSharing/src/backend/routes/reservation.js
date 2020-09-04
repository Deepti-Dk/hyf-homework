const reservation = require('../data/reservations.json');
let randomReservation =
  reservation[Math.floor(Math.random() * reservation.length)];
module.exports = randomReservation;
