const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');

let mealReviews = [];

mealReviews = meals.map((meal) => ({
  ...meal,
  reviews: reviews.filter((review) => meal.id === review.mealId),
}));

module.exports = mealReviews;
