/**Do the 3 steps below using promises and .then.
Do the 3 steps below using async/await
The 3 steps:

Fetch some data from an api.
After that data has been fetched, wait 3 seconds
Log out the data from the api
Which way do you prefer, the promise way or the async/await way? */

fetch('http://api.open-notify.org/astros.json')
  .then((response) => response.json())
  .then((data) => {
    setTimeout(() => {
      console.log(data);
    }, 3000);
  })
  .catch(() => console.log('oops...something went wrong'));

async function astroMovies() {
  const astronauts = await fetch('http://api.open-notify.org/astros.json');

  try {
    setTimeout(() => {
      console.log(astronauts.json());
    }, 3000);
  } catch {
    console.log('There is a problem!');
  }
}
astroMovies();
//I PREFER ASYNC-AWAIT, MORE UNDERSTANDABLE
