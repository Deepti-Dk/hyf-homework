console.log('Hello! Want to know your animal spirit name!');
const array = [
  'The Playfull Coyote',
  'The Curious Cat',
  'The Transformed Butterfly',
  'Bear-The Leader',
  'An Innocent Deer',
  'The Peaceful Dolphin',
  'The Transformational Dragonfly',
  'The Attentive Fox',
  'Horse-The Driving Force',
  'The Powerful Lion',
];

const submit = document.querySelector('#submit');
const clear = document.querySelector('#clear');
const input = document.querySelector('#input');
const output = document.querySelector('#output');

const submitt = document.querySelector('#submit-lbl');
const hover = document.querySelector('#hover-lbl');
const inputt = document.querySelector('#inputt-lbl');

//Tried to implement radio button options(optional exercise), need help as could find help with google, as well. So, for now, just input,output and clear options are working
if (submitt) {
  submit.addEventListener('click', function onclick() {
    output.textContent = array[Math.floor(Math.random() * 10)];
  });
} else if (hover) {
  input.addEventListener('mouseover', function onhover() {
    output.textContent = array[Math.floor(Math.random() * 10)];
  });
} else if (inputt) {
  output.textContent = array[Math.floor(Math.random() * 10)];
}

clear.addEventListener('click', function () {
  input.value = '';
  output.textContent = '';
});
