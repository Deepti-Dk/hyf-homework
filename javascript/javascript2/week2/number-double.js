let numbers = [1, 2, 3, 4];
let newNumbers = [];

newNumbers = numbers
  .filter((check) => check % 2 != 0)
  .map((check) => check * 2);
console.log(newNumbers);
