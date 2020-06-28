console.log('This is for delay callback function');
/*************Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions */

let delay;
function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}
runAfterDelay(4, function () {
  console.log('--------------------------------------');
  console.log(`.....is logged after ${delay} seconds....`);
  console.log('--------------------------------------');
});
