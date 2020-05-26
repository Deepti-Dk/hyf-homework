//CODEPEN: https://codepen.io/Dee_Sharma/pen/qBOGOqd

const notes = [];

function saveNote(content, id) {
  //function to save notes and id in array
  notes.push({ content: content, id: id });
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);
saveNote('Make lunch', 3);
saveNote('See a movie', 4);
saveNote('Do yoga', 5);

console.log('\nOutput from saveNote()\n-------------------------');
console.log(notes);

function getNote(id) {
  //creating function to find a particular id
  for (let i = 0; i < notes.length; i++) {
    //looping to search through array
    if (notes[i].id === id) {
      //check where id matches
      return notes[i];
    } else if (toString(notes[i].id).trim() === '' || isNaN(notes[i].id)) {
      return 'Error!'; //check for spaces and if id is number type
    }
  }
}

const firstNote = getNote(3); //calling getNote() function
console.log('\nOutput from getNote()\n-------------------------');
console.log(firstNote);

function logOutNotesFormatted() {
  //function to display formatted array
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

logOutNotesFormatted(); //calling format function array
