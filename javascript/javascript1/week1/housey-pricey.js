// formula to be used: housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

// Calculations for Peters House
const width1 = 8;
const deep1 = 10;
const height1 = 10;
const peterHouseVolume = width1 * deep1 * height1; //in meters
const peterGardenSize = 100; // in m2
const peterHousePrice = 2500000;

const calcPeterHousePrice =
  peterHouseVolume * 2.5 * 1000 + peterGardenSize * 300;
if (calcPeterHousePrice > peterHousePrice) {
  console.log('Peter paid more than the estimated price for the house.');
} else {
  console.log('Peter paid less than the estimated price for the house.');
}

//Calculations for Julias House
const width2 = 5;
const deep2 = 11;
const height2 = 8;
const juliaHouseVolume = width2 * deep2 * height2; // in meters
const juliaGardenSize = 70; // in m2
const juliaHousePrice = 1000000;

const calcJuliaHousePrice =
  juliaHouseVolume * 2.5 * 1000 + juliaGardenSize * 300;
if (calcJuliaHousePrice > juliaHousePrice) {
  console.log('Julia paid more than the estimated price for the house.');
} else {
  console.log('Julia paid less than the estimated price for the house.');
}
