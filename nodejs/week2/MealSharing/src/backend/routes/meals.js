const meals = require('../data/meals.json');

const express = require('express');
const router = express.Router();

// router.get('/', (request, response) => {
//   response.send(meals);
// });
router.get('/:id', async (req, res) => {
  let result = meals.filter((data) => {
    if (data.id === parseInt(req.params.id)) return true;
  });
  if (result.length != 0) {
    res.send(result);
  } else {
    res
      .status(404) // HTTP status 404: NotFound
      .send('Not found');
  }
});

router.get('/', async (req, res) => {
  /**maxPrice	Get meals that has a price smaller than maxPrice	Number	/meals?maxPrice=90 */
  if (req.query.maxPrice) {
    res.send(meals.filter((data) => data.price < Number(req.query.maxPrice)));
  } else {
    res.send(meals);
  }

  /**title	Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde	String	/meals?title=Indian%20platter */
  if (req.query.title) {
    res.send(
      meals.filter((data) => data.title.includes(String(req.query.title)))
    );
  } else {
    res.send(meals);
  }

  /**createdAfter	Get meals that has been created after the date	Date	/meals?createdAfter=2019-04-05 */
  if (req.query.createdAfter) {
    res.send(
      meals.filter(
        (data) => Date.parse(data.createdDate) > Number(req.query.createdAfter)
      )
    );
  } else {
    res.send(meals);
  }

  /**limit	Only specific number of meals	Number	/meals?limit=4 */
  if (req.query.limit) {
    let limitMeals = [];
    for (let i = 0; i < Number(req.query.limit) && i < meals.length; i++) {
      limitMeals.push(meals[i]);
    }
    res.send(limitMeals);
  } else {
    res.send(meals);
  }
});
module.exports = router;
