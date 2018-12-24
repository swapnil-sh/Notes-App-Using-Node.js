//var obj = {
//    
//    name : 'Andrew'
//}
//
//var stringObj = JSON.stringify(obj);
//console.log(typeof obj);
//console.log(typeof stringObj);
//console.log(obj);
//console.log(stringObj);

//var personString = '{"name":"Swapnil","Age":"21"}';
//var person = JSON.parse(personString);
//console.log(typeof personString);
//console.log(typeof person);
//console.log(personString);
//console.log(person);
//

const fs = require('fs');

var originalNote = {
    
    title: 'Personal Info',
    body: 'Hey this is me!!'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);