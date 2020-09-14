const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Getting data through query parameters using GET
app.get('/calculator/add', async (request, response) => {
  let result =
    Number(request.query.firstParam) + Number(request.query.secondParam);
  response.send(`the result is ${result}`);
});
app.get('/calculator/substract', async (request, response) => {
  let result =
    Number(request.query.firstParam) - Number(request.query.secondParam);
  response.send(`the result is ${result}`);
});
app.get('/calculator/multiply', async (request, response) => {
  let result =
    Number(request.query.firstParam) * Number(request.query.secondParam);
  response.send(`the result is ${result}`);
});
app.get('/calculator/divide', async (request, response) => {
  let result =
    Number(request.query.firstParam) / Number(request.query.secondParam);
  response.send(`the result is ${result}`);
});

// Getting data through the request body using POST
const addition = async ({ firstParam, secondParam }) => {
  return await (firstParam + secondParam);
};
app.post('/calculator/add', async (request, response) => {
  addition({
    firstParam: Number(request.body.firstParam),
    secondParam: Number(request.body.secondParam),
  })
    .then((result) => response.json(result))
    .catch((error) => {
      response.status(400).send('Bad request').end();
      console.log(error);
    });
});

const substration = async ({ firstParam, secondParam }) => {
  return await (firstParam - secondParam);
};
app.post('/calculator/substract', async (request, response) => {
  substration({
    firstParam: Number(request.body.firstParam),
    secondParam: Number(request.body.secondParam),
  })
    .then((result) => response.json(result))
    .catch((error) => {
      response.status(400).send('Bad request').end();
      console.log(error);
    });
});

const multiplication = async ({ firstParam, secondParam }) => {
  return await (firstParam * secondParam);
};
app.post('/calculator/multiply', async (request, response) => {
  multiplication({
    firstParam: Number(request.body.firstParam),
    secondParam: Number(request.body.secondParam),
  })
    .then((result) => response.json(result))
    .catch((error) => {
      response.status(400).send('Bad request').end();
      console.log(error);
    });
});

const division = async ({ firstParam, secondParam }) => {
  return await (firstParam / secondParam);
};
app.post('/calculator/divide', async (request, response) => {
  division({
    firstParam: Number(request.body.firstParam),
    secondParam: Number(request.body.secondParam),
  })
    .then((result) => response.json(result))
    .catch((error) => {
      response.status(400).send('Bad request').end();
      console.log(error);
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port ${port}!`));
