/**translateOneByOne - Should translate the circles one at a time from their random start position to their target see the target positions below. Log something out after each element has been moved
---TARGET POSITIONS---
Red circle target: x: 20px, y: 300px;
Blue circle target: x: 400px, y: 300px;
Green circle target: x: 400px, y: 20px;
*/

function translateOneByOne() {
  moveElement(document.querySelector('ul.marks li:nth-child(1)'), {
    x: 20,
    y: 300,
  })
    .then(() => console.log('Red element has been moved'))
    .then(() =>
      moveElement(document.querySelector('ul.marks li:nth-child(2)'), {
        x: 400,
        y: 300,
      })
    )
    .then(() => console.log('Blue element has been moved'))
    .then(() =>
      moveElement(document.querySelector('ul.marks li:nth-child(3)'), {
        x: 400,
        y: 20,
      })
    )
    .then(() => console.log('Green element has been moved'));
}
//translateOneByOne();

/**translateAllAtOnce - Should translate all the circles at the same time from their random start position to their target. Log out something after all elements have been moved
 */
function translateAllAtOnce() {
  const promiseRed = moveElement(
    document.querySelector('ul.marks li:nth-child(1)'),
    {
      x: 20,
      y: 300,
    }
  );
  const promiseBlue = moveElement(
    document.querySelector('ul.marks li:nth-child(2)'),
    {
      x: 400,
      y: 300,
    }
  );
  const promiseGreen = moveElement(
    document.querySelector('ul.marks li:nth-child(3)'),
    {
      x: 400,
      y: 20,
    }
  );
  Promise.all([promiseRed, promiseBlue, promiseGreen]).then(() => {
    console.log('All elements are moved');
  });
}
translateAllAtOnce(); //--UN-COMMENT TO RUN
//mostly used for get/send data to api //then-catch to wait for promise to either resolve or reject