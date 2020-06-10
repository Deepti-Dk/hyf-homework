//SANDBOX URL: https://codesandbox.io/s/talk-to-your-computer-ph2ql?file=/src/index.js

let nameArray = [];
let activity = [];
let temp;
let i = 0;

function getReply(question) {
  if (question.startsWith('Hello my name is')) {
    nameArray = question.split(' ');
    temp = nameArray[nameArray.length - 1];
    return `Hello my name is ${temp}`;
  } else if (question.startsWith('What is my name?')) {
    return `Nice to meet you ${temp}`;
  } else if (question.startsWith('Add')) {
    nameArray = question.split(' ');
    temp = nameArray[1];
    activity.push(temp);
    return temp + ' added to your todo';
  } else if (question.startsWith('Remove')) {
    temp = activity.pop();
    return 'Removed ' + temp + ' from your todo list';
  } else if (question.startsWith('What is on my todo')) {
    return activity;
  } else if (question === 'What day is it today?') {
    return new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      year: 'numeric',
      month: 'long',
    });
  } else if (question.search('\\+') != -1) {
    nameArray = question.split(' ');
    temp = parseInt(nameArray[2]) + parseInt(nameArray[4]);
    return temp;
  } else if (question.search('\\-') != -1) {
    nameArray = question.split(' ');
    temp = parseInt(nameArray[2]) - parseInt(nameArray[4]);
    return temp;
  } else if (question.search('\\*') != -1) {
    nameArray = question.split(' ');
    temp = parseInt(nameArray[2]) * parseInt(nameArray[4]);
    return temp;
  } else if (question.search('\\/') != -1) {
    nameArray = question.split(' ');
    temp = parseInt(nameArray[2]) / parseInt(nameArray[4]);
    return temp;
  } else if (question.search('timer')) {
    nameArray = question.split(' ');
    temp = parseInt(nameArray[4]);
    console.log(temp);
    setTimeout(function () {
      console.log('Timer done');
    }, temp * 1000);
  }
}

console.log(getReply('Hello my name is John'));
console.log(getReply('What is my name?'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('What is 3 + 3'));
console.log(getReply('What is 6 - 3'));
console.log(getReply('What is 4 * 12'));
console.log(getReply('What is 9 / 3'));
console.log(getReply('Set a timer for 4 minutes'));
