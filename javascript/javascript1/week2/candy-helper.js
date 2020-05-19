//global variable declaration
const boughtCandyPrices = [];
let amountToSpend = Math.random() * 100;
//just checking how much amout available for candy shopping
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
//addCandy('misc', 20); //to test for any other candy type input
//console.log('Price List: ' + boughtCandyPrices); // to test if prices get calculated correct

//function to calculate the total of candy price array and to return 'true' or 'false' accordingly
function canBuyMoreCandy() {
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
  if (totalPrice < amountToSpend) {
    return true;
  } else {
    return false;
  }
}
//displaying further shopping option based on 'true' or 'false' return from canBuyMoreCandy()
if (canBuyMoreCandy()) {
  console.log('You can buy more, so please do!');
} else {
  console.log('Enough candy for you!');
}
