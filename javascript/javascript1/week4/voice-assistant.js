//SANDBOX URL: https://codesandbox.io/s/talk-to-your-computer-ph2ql?file=/src/index.js

function getReply(question) {
  switch (question) {
    case 'Hello my name is Deepti':
      return 'Nice to meet you Deepti';
    case 'What is my name?':
      return 'Your name is Deepti';
    case 'Add fishing to my todo':
      return 'Fishing added to your todo';
    case 'Add singing in the shower to my todo':
      return 'Singing in the shower added to your todo';
    case 'Remove fishing from my todo':
      return 'Removed fishing from your todo';
    case 'What is on my todo?':
      return 'Fishing and singing in the shower';
    case 'What day is it today?':
      return (
        new Date().getDate() +
        '. of ' +
        new Date().toLocaleString('default', { month: 'long' }) +
        ' ' +
        new Date().getFullYear()
      );
    case 'What is 3+3':
      return 3 + 3;
    case 'What is 6-3':
      return 6 - 3;
    case 'What is 4*12':
      return 4 * 12;
    case 'What is 9/3':
      return 9 / 3;
    case 'Set a timer for 4 minutes':
      setTimeout(function () {
        //I dont know why 'undefined is getting displayed...i tried debug,as well...need your help with this...thanks!
        console.log('Timer done');
      }, 4000);
      break;
    default:
      return 'Have a nice day!';
  }
}

console.log(getReply('Hello my name is Deepti'));
console.log(getReply('What is my name?'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('What is 3+3'));
console.log(getReply('What is 6-3'));
console.log(getReply('What is 4*12'));
console.log(getReply('What is 9/3'));
console.log(getReply('Set a timer for 4 minutes'));
