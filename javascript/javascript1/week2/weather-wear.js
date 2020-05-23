//creating function to return attire for the right temperature
function weatherWear(temperature) {
  if (temperature <= 10) {
    return 'Time for sweaters, jackets and warm wear.';
  } else if (temperature > 10 && temperature <= 20) {
    return 'Enjoy summer clothes but always keep an extra layer handy.';
  }
  return 'T-shirts, shorts and head to the beach.';
}

const clothesToWear = weatherWear(25); //calling function to display attire for 25degrees
console.log(clothesToWear); //displaying attire
