const dogYearOfBirth = 2010;
const dogYearFuture = 2022;
const dogYear = dogYearFuture - dogYearOfBirth;

let shouldShowResultInDogYears = true;

/*console.log("Enter 0 for age in dog years and 1 for age in human years");
DONOT know about getting input from user, so just coding as below:-)*/

if (shouldShowResultInDogYears === true) {
  console.log(
    'Your dog will be ' + dogYear + ' dog years old in ' + dogYearFuture
  );
} else {
  console.log(
    'Your dog will be ' + dogYear * 7 + ' human years old in ' + dogYearFuture
  );
}
