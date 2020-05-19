//global variable declaration
const class07Students = [];
let index = 0;
//function to add student to the array and check for class size, duplicate name check and the queen name
function addStudentToClass(studentName) {
  let count;
  if (index < 6 || studentName === 'Margrethe') {
    for (count = 0; count < index; count++) {
      if (class07Students[count] === studentName) {
        console.log('Student ' + studentName + ' is already in the class');
        return;
      }
    }
    class07Students.push(studentName);
    index++;
  } else {
    console.log('Cannot add more students to class 07');
  }
}

//function to calculate number of students in the class07
function getNumberOfStudents() {
  let num;
  for (num = 0; num < index; num++) {}
  return num;
}

//test data
addStudentToClass('John');
addStudentToClass('Martha');
addStudentToClass('Sara');
addStudentToClass('Sara'); // wont get added as Sara is already being added
addStudentToClass('Joackim');
addStudentToClass('Sonia');
addStudentToClass('Mads');
addStudentToClass('Stine'); //wont get added as class size is already 6
addStudentToClass('Margrethe'); // will get added anyways as she has queen's name

//displaying total number of students
console.log('Number of students in class 07 are: ' + getNumberOfStudents());
//displaying class 07 students
console.log('List of class 07 students: ' + class07Students);
