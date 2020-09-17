const express = require('express');
const app = express();

app.get('/numbers/add/', async (req, res) => {
  let sum = Number(req.query.first) + Number(req.query.second);
  res.send(`The sum is: ${sum}`);
});

app.get('/numbers/multiply/:first/:second', async (req, res) => {
  let multiply = parseInt(req.params.first) * parseInt(req.params.second);
  res.send(`The multiplication is: ${multiply}`);
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
