let numbers = [1, 2, 3, 4];
let newNumbers = [];
let swapArray = [];

numbers.forEach((value, index) => {
  console.log(value + '   ' + index);
  value % 2 !== 0 ? (swapArray[index] = value * 2) : false;
});

newNumbers = swapArray.filter((value) => {
  return value != null;
});

console.log('The doubled numbers are', newNumbers); // [2, 6]
