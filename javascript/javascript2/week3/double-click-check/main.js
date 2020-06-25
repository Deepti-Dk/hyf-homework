console.log('Double click check on the page');

/*********Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!" */
//const body = window. document.querySelector('body');
const body = document.querySelector('body');
body.addEventListener('dblclick', function () {
  alert('That was a double click!!!');
});
