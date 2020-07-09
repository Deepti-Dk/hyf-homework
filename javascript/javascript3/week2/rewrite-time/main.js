/**Rewrite setTimeout to promises. */
function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
setTimeoutPromise(3000).then(() => {
  console.log('Called after 3 seconds');
});

/**Rewrite navigator.geolocation.getCurrentPosition to promises.
 * The getCurrentPosition function is probably going to throw an error, but that is fine. As long as you can use it as a promise. */
const getCurrentPosition = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});
getCurrentPosition
  .then((position) => {
    console.log(position);
  })
  .catch((error) => {
    console.log(error);
  });
