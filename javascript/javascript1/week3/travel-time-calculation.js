const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function getTime(info) {
  return info.destinationDistance / info.speed; //formula: time = distance / speed
}

function formatTime() {
  const travelTime = getTime(travelInformation);
  let hours = Math.floor(travelTime);
  let minutes = Math.ceil((travelTime % hours) * 60);
  //if minutes calculated are greater or equal to 60, has to be converted to an hour and update remaining minutes
  if (minutes >= 60) {
    hours += Math.floor(minutes / 60);
    minutes -= 60;
  }
  console.log(hours + ' hours and ' + minutes + ' minutes'); // 4 hours and 42 minutes
}

formatTime();
