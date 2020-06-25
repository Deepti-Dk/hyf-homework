console.log('Location details');

const locationButton = document.getElementById('location-check');
const mapRef = document.getElementById('googleMap');
let latiTude;
let longiTude;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

function showPosition(position) {
  latiTude = position.coords.latitude;
  longiTude = position.coords.longitude;

  console.log(
    'This is Latitude: ' + latiTude + '<br>',
    'This is Longitude: ' + longiTude
  );
  myMap();
}
locationButton.addEventListener('click', getLocation);

function myMap() {
  //just in preview mode so doesn't display exact location
  let mapProp = {
    center: new google.maps.LatLng(latiTude, longiTude),
    zoom: 5,
  };
  let map = new google.maps.Map(mapRef, mapProp);
  console.log(map);
}
