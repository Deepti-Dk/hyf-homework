const reservation = require('../data/reservations.json');

function getRandomReservation() {
  let randomReservation =
    reservation[Math.floor(Math.random() * reservation.length)];
  return randomReservation;
}

module.exports = getRandomReservation;
