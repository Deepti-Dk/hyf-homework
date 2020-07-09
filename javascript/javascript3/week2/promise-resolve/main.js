/***Create a function that has one parameter: resolveAfter. Calling this function will return a promise that resolves after the resolveAfter seconds has passed.
 */
function delayedDisplay1(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`I am called asynchronously after ${resolveAfter} seconds`);
    }, resolveAfter * 1000);
  });
}
delayedDisplay1(5).then((output) => {
  console.log(output);
});

/** When you have written the promise, use it with async/await
 * WITH ASYNC AND AWAIT*/
async function delayedDisplay2(resolveAfter) {
  const result = await delayedDisplay1(resolveAfter);
  console.log(result);
}
delayedDisplay2(8);
