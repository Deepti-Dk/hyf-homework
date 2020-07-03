/**HOW THIS API WORKS: API provides sunset and sunrise times for a given latitude and longitude (Copenhagen, in this case).
 * 
 * JSON DATA TYPE: AN OBJECT
 astronomical_twilight_begin: "12:00:01 AM"
astronomical_twilight_end: "12:00:01 AM"
civil_twilight_begin: "1:31:52 AM"
civil_twilight_end: "8:55:42 PM"
day_length: "17:24:52"
nautical_twilight_begin: "12:00:01 AM"
nautical_twilight_end: "12:00:01 AM"
solar_noon: "11:13:47 AM"
sunrise: "2:31:21 AM"
sunset: "7:56:13 PM"
 *
 **/

fetch('https://api.sunrise-sunset.org/json?lat=55.6867243&lng=12.5700724')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
