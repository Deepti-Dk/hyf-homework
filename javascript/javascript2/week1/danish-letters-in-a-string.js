const danishString1 = ['Blå grød med røde bær'];
const str1 = danishString1.toString(); //creating alphabet array from string array

const danishString2 = ['Jeg har en blå bil'];
const str2 = danishString2.toString(); //creating alphabet array from string array

function danishLetters(array) {
  let alpha1 = 0; //to count æ
  let alpha2 = 0; //to count ø
  let alpha3 = 0; //to count å
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'æ') {
      alpha1++;
    } else if (array[i] === 'ø') {
      alpha2++;
    } else if (array[i] === 'å') {
      alpha3++;
    }
  }
  console.log(array);
  console.log(
    'total: ' +
      (alpha1 + alpha2 + alpha3) +
      ', æ: ' +
      alpha1 +
      ' , ø: ' +
      alpha2 +
      ' , å: ' +
      alpha3
  );
} // returns {total: 4, æ: 1, ø: 2, å: 1}
danishLetters(str1);
danishLetters(str2);
