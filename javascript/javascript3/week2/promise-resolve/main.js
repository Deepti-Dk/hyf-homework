/***Create a function that has one parameter: resolveAfter. Calling this function will return a promise that resolves after the resolveAfter seconds has passed.
 */
function delayedCall(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`I am called after ${resolveAfter} seconds`);
    }, resolveAfter * 1000);
  });
}
delayedCall(5).then((output) => {
  console.log(output);
});

/** When you have written the promise, use it with async/await
 * WITH ASYNC AND AWAIT*/
async function delayedCallAsync(resolveAfter) {
  const result = await delayedCall(resolveAfter);
  console.log(result);
}
delayedCallAsync(8);
