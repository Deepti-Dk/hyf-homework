/*-----------------FreeCodeCamp id: @dee2020 --------------------*/

const names = [
  'Peter',
  'Ahmad',
  'Yana',
  'kristina',
  'Rasmus',
  'Samuel',
  'katrine',
  'Tala',
];
const nameToRemove = 'Ahmad';
const index = names.indexOf(nameToRemove);
names.splice(index, 1); //using splice() to remove '1' element at 'index'---googled this function

console.log(names);
