const meal = require('../data/meals.json');

let randomMeal = meal[Math.floor(Math.random() * meal.length)];

module.exports = randomMeal;
