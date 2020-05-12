let dogYearOfBirth = 2010;
let dogYearFuture = 2022;
let dogYear = dogYearFuture - dogYearOfBirth;

var shouldShowResultInDogYears = 'True';

/*console.log("Enter 0 for age in dog years and 1 for age in human years");
DONOT know about getting input from user, so just coding as below:-)*/

if (shouldShowResultInDogYears === 'True') {
  console.log(
    'Your dog will be ' + dogYear + ' dog years old in ' + dogYearFuture
  );
} else {
  console.log(
    'Your dog will be ' + dogYear * 7 + ' human years old in ' + dogYearFuture
  );
}
