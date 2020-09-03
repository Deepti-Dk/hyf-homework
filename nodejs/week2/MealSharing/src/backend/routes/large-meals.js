const meal = require('../data/meals.json');

let largeMeal = meal.filter((element) => {
  return element.maxReservations > 100;
});

module.exports = largeMeal;
