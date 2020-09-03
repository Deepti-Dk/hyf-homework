const meals = require('../data/meals.json');
const review = require('../data/reviews.json');

let mealReviews = [],
  mealNoReviews = [];
for (let i = 0; i < meals.length; i++) {
  for (let c = 0; c < review.length; c++) {
    if (meals[i].id === review[c].id) {
      mealReviews.push(review[c]);
      meals[i].description = mealReviews;
      //console.log(meal[i]);
    } else {
      meals[i].description = mealNoReviews;
      //console.log(meal[i]);
    }
  }
}
//console.log(meal);
module.exports = meal;
