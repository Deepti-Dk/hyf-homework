//I have created and called all functions according to the homework sequence

var activities = [
  {
    date: '23/7-2018',
    activity: 'Youtube',
    duration: 70, //in minutes
  },
];
const date = new Date();
const today = date.toLocaleDateString();

function addActivity(website, period) {
  //function to append activities array
  activities.push({ date: today, activity: website, duration: period });
}

addActivity('Whatsapp', 30);
addActivity('Facebook', 60);
addActivity('Instagram', 40);
console.log(activities); //displaying activities array

function showStatus(array) {
  //function to calculate and display of smartphone usageS
  let time = 0;
  let count = 0;
  let todayDuration = 0;
  const limit = 120;
  for (let i = 0; i < array.length; i++) {
    // implementing the optional exercise criteria
    time += array[i].duration;
    if (array[i].date == today) {
      count++; //calculating number of activities for today
      todayDuration += array[i].duration; //calculating time spent, today
    }
  }
  console.log(
    '\n You have added total of ' +
      array.length +
      ' activities. These amount to the total of ' +
      time +
      ' minutes of usage'
  );

  console.log(
    // implementing the optional exercise criteria
    '\n Number of activities for today: ' +
      count +
      ' and time spent is: ' +
      todayDuration +
      ' minutes'
  );
  if (time > limit) {
    // implementing the optional exercise criteria
    console.log(
      '\n You have reached your limit, no more smartphoning for you!'
    );
  }
}
showStatus(activities); // calling showStatus()

function activity(arr) {
  // implementing the optional exercise criteria
  let max = 0;
  let act;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].date === today && arr[i].duration > max) {
      max = arr[i].duration;
      act = arr[i].activity;
    }
  }
  console.log('\n You spent the maximum time on ' + act + ' today!!!');
}
activity(activities); //calling function to check the activity with most time spent
