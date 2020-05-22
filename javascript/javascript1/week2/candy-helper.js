//global variable declaration
const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

console.log('Total money available for candies: ' + amountToSpend);
//calculating candy prices and storing these in array
function addCandy(candyType, weight) {
  if (candyType === 'Sweet') {
    boughtCandyPrices.push(weight * 0.5);
  } else if (candyType === 'Chocolate') {
    boughtCandyPrices.push(weight * 0.7);
  } else if (candyType === 'Toffee') {
    boughtCandyPrices.push(weight * 1.1);
  } else if (candyType === 'Chewing-gum') {
    boughtCandyPrices.push(weight * 0.03);
  } else {
    console.log('Not a valid candy type, try again!');
  }
}
//test data
addCandy('Sweet', 5);
addCandy('Sweet', 15);
addCandy('Chocolate', 5);
addCandy('Toffee', 5);

//function to calculate the total of candy price array and to return 'true' or 'false' accordingly
function canBuyMoreCandy(candyType) {
  //function scope(local) variable declaration
  let count = 0;
  let totalPrice = 0;
  //calculating total amount spent
  while (count < boughtCandyPrices.length) {
    totalPrice += boughtCandyPrices[count];
    count++;
  }
  //displaying total amout spent
  console.log('Candy shopping done for: ' + totalPrice);
  //comparing total amout spent to amout available
  return totalPrice < amountToSpend;
}
//displaying further shopping option based on 'true' or 'false' return from canBuyMoreCandy()
if (canBuyMoreCandy('Sweet')) {
  console.log('You can buy more, so please do!');
  addCandy('Sweet', 10);
} else {
  console.log('Enough candy for you!');
}
