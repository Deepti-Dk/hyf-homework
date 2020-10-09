console.log('Hello! Want to know your animal spirit name!');

const spiritAnimals = [
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
/***********GETTING FORM ELEMENTS******************************** */
const submit = document.getElementById('submit');
let input = document.getElementById('input-text');
const clear = document.getElementById('clear');
const output = document.getElementById('output');
/******************GETTING RADIO BUTTONS ************************* */
const hover = document.getElementById('mouseover');
const click = document.getElementById('click');
const inputR = document.getElementById('change');

/*********************FUNCTIONS************************************ */
function getRandomNumber() {
  return Math.floor(Math.random() * spiritAnimals.length);
}

function displaySpiritName() {
  const spiritAnimal = spiritAnimals[getRandomNumber()];
  output.innerHTML = `${input.value} ${spiritAnimal}`;
}
/******************RADIO BUTTONS CHECK****************************** */
hover.onclick = function onSelect() {
  if (hover.checked) {
    input.removeEventListener('keyup', displaySpiritName);
    submit.removeEventListener('click', displaySpiritName);
    input.addEventListener('mouseover', displaySpiritName);
  }
};
click.onclick = function onSelect() {
  if (click.checked) {
    input.removeEventListener('mouseover', displaySpiritName);
    input.removeEventListener('keyup', displaySpiritName);
    submit.addEventListener('click', displaySpiritName);
  }
};
inputR.onclick = function onSelect() {
  if (inputR.checked) {
    input.removeEventListener('mouseover', displaySpiritName);
    submit.removeEventListener('click', displaySpiritName);
    input.addEventListener('keyup', displaySpiritName);
  }
};
/***************** CLEAR ****************************** */
clear.addEventListener('click', function () {
  input.value = '';
  output.textContent = '';
});
