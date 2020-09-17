const reviews = require('../data/reviews.json');

const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send(reviews);
});
router.get('/:id', async (req, res) => {
  let result = reviews.filter((data) => {
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
module.exports = router;
