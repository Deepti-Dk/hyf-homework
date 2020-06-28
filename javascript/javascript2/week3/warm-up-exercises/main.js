console.log('And the js2-w3 warm-up starts!');

/***********Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded. */
setTimeout(function () {
  console.log('Called after 2.5 seconds');
}, 2500);

/************Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments. */
function delayedDisplay(delay, stringToLog) {
  setTimeout(function () {
    console.log(stringToLog);
  }, delay * 1000);
}
delayedDisplay(5, 'Hello!');
delayedDisplay(3, 'How are you?');

/**********Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds after the button is clicked. */
const btn = document.getElementById('click-button');
btn.addEventListener('click', function () {
  delayedDisplay(5, 'Called after 5 seconds');
});
