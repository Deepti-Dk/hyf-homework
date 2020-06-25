/**Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.*/
function firstFun(str) {
  console.log('firstFun: ' + str);
}
function secondFun(str) {
  console.log('secondFun: ' + str);
}
function thirdFun(str) {
  console.log('thirdFun: ' + str);
}
let arrayOfFunctions = [firstFun, secondFun, thirdFun];
console.log('\n --------Array of fucntions------------');
arrayOfFunctions.forEach((func) => func('Hello'));

/**Create a function as a const and try creating a function normally. Call both functions. Read up on this if you are interested: https://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip*/

const doSomethingConst = function (str) {
  console.log('\n -----Function as a constant------');
  console.log(`The string is ${str}`);
};
doSomethingConst('Hello');
doSomethingConst('World!');

let doSomethingNormal = function (str) {
  console.log('\n -----Function as a normal one------');
  console.log(`The string is ${str}`);
};
doSomethingNormal('Hello again');
doSomethingNormal('Normal World!');
/*********Create an object that has a key whose value is a function. Try calling this function.*/
let person = {
  firstName: 'Jackie',
  lastName: 'Chan',
  id: 5566,
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
console.log('\n ----------Object with key value as a function--------');
console.log(`Person's fullname is: ${person.fullName()}`);
