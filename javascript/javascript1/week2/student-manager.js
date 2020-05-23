//CODEPEN: https://codepen.io/Dee_Sharma/pen/zYveQQx

//global variable declaration
const class07Students = [];

//function to add student to the array and check for class size, duplicate name check and the queen name
function addStudentToClass(studentName) {
  if (studentName.trim() === '') {
    return;
  }
  if (class07Students.length >= 6 && studentName.toLowerCase() !== 'queen') {
    console.log('Cannot add more students to class 07');
    return;
  }
  if (class07Students.includes(studentName)) {
    console.log('Student ' + studentName + ' is already in the class');
    return;
  }
  class07Students.push(studentName);
}

//function to calculate number of students in the class07
function getNumberOfStudents() {
  return class07Students.length;
}

//test data
addStudentToClass('Jack');
addStudentToClass('Martha');
addStudentToClass('Sara');
addStudentToClass('Sara'); // wont get added as Sara is already being added
addStudentToClass('Mads');
addStudentToClass('Zade');
addStudentToClass('Stine'); //wont get added as class size is already 6
addStudentToClass('Queen'); // will get added anyways as she has queen's name
addStudentToClass('Grace');

//displaying total number of students
console.log('Number of students in class 07 are: ' + getNumberOfStudents());
//displaying class 07 students
console.log('List of class 07 students: ' + class07Students);
