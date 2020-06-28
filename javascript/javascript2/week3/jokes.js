/****Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa. */

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) logFunnyJoke();
  else logBadJoke();
}
function logFunnyJoke() {
  console.log('Why could not the bicycle stand up? Because it was two tired!');
}
function logBadJoke() {
  console.log('What does a baby computer call its father? Data.');
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
