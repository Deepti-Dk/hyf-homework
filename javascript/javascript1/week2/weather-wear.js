//creating function to return attire for the right temperature
function weatherWear(temp) {
  let attire;
  if (temp <= 10) {
    attire = 'Time for sweaters, jackets and warm wear.';
  } else if (temp > 10 && temp <= 20) {
    attire = 'Enjoy summer clothes but always keep an extra layer handy.';
  } else {
    attire = 'T-shirts, shorts and head to the beach.';
  }
  return attire;
}

const clothesToWear = weatherWear(25); //calling function to display attire for 25degrees
console.log(clothesToWear); //displaying attire
