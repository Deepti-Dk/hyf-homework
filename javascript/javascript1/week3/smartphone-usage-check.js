//I have created and called all functions according to the homework sequence and implemented optional exercises criterias, as well...commented to differentiate

const activities = [
  {
    date: '23/7-2018',
    activity: 'Youtube',
    duration: 70, //in minutes
  },
];
const date = new Date();
const today = date.toLocaleDateString();

function addActivity(website, period) {
  //modified this function as per the optional exercise criteria as that states to auto pick system date
  activities.push({ date: today, activity: website, duration: period });
}

addActivity('Whatsapp', 30);
addActivity('Facebook', 60);
addActivity('Instagram', 40);
console.log(activities);

function showStatus(activities) {
  if (activities.length === 0) {
    console.log('Add some activities before calling showStatus');
    return;
  }
  let time = 0;
  let count = 0;
  let todayDuration = 0;
  const limit = 120;
  for (let i = 0; i < activities.length; i++) {
    // implementing the optional exercise criteria
    time += activities[i].duration;
    if (activities[i].date === today) {
      count++; //calculating number of activities for today
      todayDuration += activities[i].duration; //calculating time spent, today
    }
  }
  console.log(
    '\n You have added total of ' +
      activities.length +
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
showStatus(activities);

function activity(arr) {
  // implementing the optional exercise criteria
  let max = 0;
  let activity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].date === today && arr[i].duration > max) {
      max = arr[i].duration;
      activity = arr[i].activity;
    }
  }
  console.log('\n You spent the maximum time on ' + activity + ' today!!!');
}
activity(activities);
