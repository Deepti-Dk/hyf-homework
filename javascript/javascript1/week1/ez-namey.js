let firstWords = [
  'Zenith',
  'Venture',
  'Startup',
  'Initial',
  'Rapid',
  'Biz',
  'Sequence',
  'Plan',
  'Upward',
  'Primary',
];
let secondWords = [
  'Point',
  'Awesome',
  'Interesting',
  'Motive',
  'Plan',
  'Profit',
  'Revolution',
  'Lineup',
  'Growth',
  'Engine',
];

const randomNumber = Math.floor(Math.random() * 10) + 0;

console.log('random number: ' + randomNumber);
console.log(
  'The startup: ' +
    firstWords[randomNumber] +
    ' ' +
    secondWords[randomNumber] +
    ' contains ' +
    (firstWords[randomNumber].length + secondWords[randomNumber].length) +
    ' characters'
);
