//CODEPEN: https://codepen.io/Dee_Sharma/pen/qBOGOqd

const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);
saveNote('Make lunch', 3);
saveNote('See a movie', 4);
saveNote('Do yoga', 5);

console.log('\nOutput from saveNote()\n-------------------------');
console.log(notes);

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    } /*else if (toString(notes[i].id).trim() === '' || isNaN(notes[i].id)) {
      return 'Error!'; //check for spaces and if id is number type
    }*/
  }
  throw new Error('note not found');
}

const firstNote = getNote(3);
console.log('\nOutput from getNote()\n-------------------------');
console.log(firstNote);

function logOutNotesFormatted() {
  console.log('\nOutput from logNotesFormatted()\n-------------------------');
  for (let i = 0; i < notes.length; i++) {
    console.log(
      'The note with id: ' +
        notes[i].id +
        ', has the following note text: ' +
        notes[i].content
    );
  }
}

logOutNotesFormatted();
