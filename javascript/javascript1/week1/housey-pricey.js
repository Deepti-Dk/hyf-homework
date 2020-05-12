let peterHouseVolume = 8 * 10 * 10; //8m wide, 10m deep, 10m height
let peterGardenSize = 100; // in m2
let peterHousePrice = 2500000;

let juliaHouseVolume = 5 * 11 * 8; // 5m wide, 11m deep, 8m height
let juliaGardenSize = 70; // in m2
let juliaHousePrice = 1000000;

// formula to be used: housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

let calcPeterHousePrice, calcJuliaHousePrice;

calcPeterHousePrice = peterHouseVolume * 2.5 * 1000 + peterGardenSize * 300;
console.log(
  'Peter paid ' +
    peterHousePrice +
    ' and the calculated house price is: ' +
    calcPeterHousePrice
);

calcJuliaHousePrice = juliaHouseVolume * 2.5 * 1000 + juliaGardenSize * 300;
console.log(
  'Julia paid ' +
    juliaHousePrice +
    ' and the calculated house price is: ' +
    calcJuliaHousePrice
);
