const meal = require('../data/meals.json');
const review = require('../data/reviews.json');

let mealReviews = [],
  mealNoReviews = [];
for (let i = 0; i < meal.length; i++) {
  for (let c = 0; c < review.length; c++) {
    if (meal[i].id === review[c].id) {
      mealReviews.push(review[c]);
      meal[i].description = mealReviews;
      //console.log(meal[i]);
    } else {
      meal[i].reviews = mealNoReviews;
      //console.log(meal[i]);
    }
  }
}
//console.log(meal);
module.exports = meal;
