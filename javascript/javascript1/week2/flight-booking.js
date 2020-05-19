//global variable declaration
let fullName1, fullName2;
let useFormalName = true;

//creating function to store and return formal or informal name
function getFullName(firstName, surName, useFormalName = 'false') {
  let fullName;
  if (useFormalName === true) {
    fullName = 'Lord ' + firstName + ' ' + surName;
  } else {
    fullName = firstName + ' ' + surName;
  }
  return fullName;
}
//calling function for the formal full name
fullName1 = getFullName('John', 'Smith', true);
//calling function for the informal full name
fullName2 = getFullName('Jane', 'Smith');
//displaying the formal name
console.log('First name for the booking: ' + fullName1);
//displaying the informal name
console.log('Second name for the booking: ' + fullName2);
