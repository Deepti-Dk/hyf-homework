//global variable declaration
let dateVar = new Date(); //to get system date
let day = dateVar.getDay(); //to get system day number
let futureWeekDay;
//console.log(day); // to test if correct day is displayed

//array for the week days
let weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

//function to calculate THE event day
function getEventWeekday(numberOfDays) {
  numberOfDays = numberOfDays + (day - 1); //adding numberOfDays and today's day number and deducting 1 as array starts with 0-index
  if (numberOfDays < 7) {
    return weekDays[numberOfDays];
  } else {
    return weekDays[numberOfDays % 7];
  }
}

//calling function to calculate the future day for the event
futureWeekDay = getEventWeekday(15);
console.log('The week day will be ' + futureWeekDay); //displaying THE day
