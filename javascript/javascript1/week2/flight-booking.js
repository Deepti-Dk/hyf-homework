// CODEPEN check: https://codepen.io/Dee_Sharma/pen/VwvgVLz

//global variable declaration
let useFormalName = true;

//creating function to store and return formal or informal name
function getFullName(firstName, surName, useFormalName = false) {
  if (useFormalName === true) {
    return 'Lord ' + firstName + ' ' + surName;
  } else {
    return firstName + ' ' + surName;
  }
}
//calling function for the formal full name
const fullName1 = getFullName('John', 'Smith', true);
//calling function for the informal full name
const fullName2 = getFullName('Jane', 'Smith');
//displaying the formal name
console.log('First name for the booking: ' + fullName1);
//displaying the informal name
console.log('Second name for the booking: ' + fullName2);
