const meal = require('../data/meals.json');

let cheapMeal = meal.filter((element) => {
  return element.price < 100;
});

module.exports = cheapMeal;
