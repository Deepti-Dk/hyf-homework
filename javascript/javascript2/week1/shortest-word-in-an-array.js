const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function shortestWord(words) {
  let shortest = '';

  for (let word of words) {
    if (
      typeof word === 'string' &&
      (shortest === '' || word.length < shortest.length)
    ) {
      shortest = word;
    }
  }
  return shortest;
}
console.log('The shortest word is: ' + shortestWord(danishWords));
