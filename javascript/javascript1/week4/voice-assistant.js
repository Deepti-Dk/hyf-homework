//SANDBOX URL: https://codesandbox.io/s/talk-to-your-computer-ph2ql?file=/src/index.js

let todos = [];
let nameVar; //naming vaiable <name> is giving some weird error in my code
let i = 0;

function getReply(question) {
  const questionWords = question.split(' ');
  if (question.startsWith('Hello my name is')) {
    nameVar = questionWords[questionWords.length - 1];
    return `Hello my name is ${nameVar}`;
  } else if (question === 'What is my name?') {
    return `Nice to meet you ${nameVar}`;
  } else if (question.startsWith('Add') && question.endsWith('to my todo')) {
    const todo = question.replace('Add', '').replace(' to my todo', '');
    todos.push(todo);
    return `${todo} added to your todo`;
  } else if (
    question.startsWith('Remove') &&
    question.endsWith('from my todo')
  ) {
    const todo = question.replace('Remove', '').replace(' from my todo', '');
    const todoIndex = todos.indexOf(todo);
    todos.splice(todoIndex, 1);
    return `${todo} removed from your todo`;
  } else if (question === 'What is on my todo?') {
    return `You have ${todos.length} todos - ${todos}`;
  } else if (question === 'What day is it today?') {
    return new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      year: 'numeric',
      month: 'long',
    });
  } else if (
    question.search('\\+') != -1 ||
    question.search('\\-') != -1 ||
    question.search('\\*') != -1 ||
    question.search('\\/') != -1
  ) {
    const number1 = parseInt(questionWords[2]);
    const number2 = parseInt(questionWords[4]);
    const operation = questionWords[3];
    if (number1 && number2) {
      switch (operation) {
        case '+':
          return number1 + number2;
        case '-':
          return number1 - number2;
        case '*':
          return number1 * number2;
        case '/':
          return number1 / number2;
      }
    }
  } else if (question.search('timer')) {
    nameVar = parseInt(questionWords[4]);
    console.log(nameVar);
    setTimeout(function () {
      console.log('Timer done');
    }, nameVar * 1000);
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
