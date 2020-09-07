const meal = require('../data/meals.json');

let random = Math.floor(Math.random() * meal.length);

module.exports = meal[random];
