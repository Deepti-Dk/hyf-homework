/**Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. For meals that do not have any reviews, the "reviews" property will be an empty array. (watch the GIF below to understand how it should be structured) */

const meal = require('../data/meals.json');
const review = require('../data/reviews.json');

let mealReviews = [],
  mealNoReviews = [];
for (let i = 0; i < meal.length; i++) {
  for (let c = 0; c < review.length; c++) {
    if (meal[i].id === review[c].id) {
      mealReviews.push(review[c]);
      meal[i].description = mealReviews;
    } else {
      meal[i].reviews = mealNoReviews;
    }
  }
}

// const express = require('express');
// const router = express.Router();
// let meals = require('../data/meals.json');
// let reviews = require('../data/reviews.json');

// router.get('/', async (request, response) => {
//   response.json(
//     (meals = meals.map((meal) => {
//       return {
//         ...meal,
//         reviews: reviews.filter((review) => {
//           return review.mealId === meal.id;
//         }),
//       };
//     }))
//   );
// });
// module.exports = router;

module.exports = meal;
