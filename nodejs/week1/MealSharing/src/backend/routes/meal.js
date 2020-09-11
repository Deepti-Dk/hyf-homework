const meal = require('../data/meals.json');

function getRandomMeal() {
  let randomMeal = meal[Math.floor(Math.random() * meal.length)];
  return randomMeal;
}

module.exports = getRandomMeal;
