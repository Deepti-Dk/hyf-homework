//global variable declaration
const dateVar = new Date(); //to get system date
const day = dateVar.getDay(); //to get system day number

//console.log(day); // to test if correct day is displayed

//function to calculate THE event day
function getEventWeekday(numberOfDays) {
  //array for the week days
  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  numberOfDays = numberOfDays + (day - 1); //adding numberOfDays and today's day number and deducting 1 as array starts with 0-index
  if (numberOfDays < 7) {
    return weekDays[numberOfDays];
  } else {
    return weekDays[numberOfDays % 7];
  }
}

//calling function to calculate the future day for the event
const futureWeekDay = getEventWeekday(15);
console.log('The week day will be ' + futureWeekDay); //displaying THE day
