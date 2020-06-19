const danishString1 = ['Blå grød med røde bær'];
const str1 = danishString1.toString(); //creating alphabet array from string array

const danishString2 = ['Jeg har en blå bil'];
const str2 = danishString2.toString(); //creating alphabet array from string array
let danishLetters = { æ: 0, ø: 0, å: 0 };

function danishLettersCount(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'æ') {
      danishLetters.æ++;
    } else if (array[i] === 'ø') {
      danishLetters.ø++;
    } else if (array[i] === 'å') {
      danishLetters.å++;
    }
  }
  console.log(array);
  if (danishLetters.æ === 0) {
    console.log(
      'total: ' +
        (danishLetters.ø + danishLetters.å) +
        ' , ø: ' +
        danishLetters.ø +
        ' , å: ' +
        danishLetters.å
    );
  } else if (danishLetters.ø === 0) {
    console.log(
      'total: ' +
        (danishLetters.æ + danishLetters.å) +
        ' , ø: ' +
        danishLetters.æ +
        ' , å: ' +
        danishLetters.å
    );
  } else {
    console.log(
      'total: ' +
        (danishLetters.æ + danishLetters.ø) +
        ' , ø: ' +
        danishLetters.æ +
        ' , å: ' +
        danishLetters.ø
    );
  }
} // returns {total: 4, æ: 1, ø: 2, å: 1}
danishLettersCount(str1);
danishLettersCount(str2);
