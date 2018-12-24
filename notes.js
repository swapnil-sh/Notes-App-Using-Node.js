console.log('Starting notes.js!')
const fs = require('fs');

var fetchNotes = () => {
    
    try{
        
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }catch(e){
        
        return [];
    }
};

var saveNotes = (notes) => {
    
     return fs.writeFileSync('notes-data.json',JSON.stringify(notes));// unlike append function it overrides the whole file instead of adding only the new data to it.
};

var addNote = (title,body) => {
    
   var notes = fetchNotes();
   var note = {
       
       title,
       body
   };
    

    
    //The filter() method returns a new array created from all elements that pass a certain test preformed on an original array.
    var duplicateNotes = notes.filter((note) => note.title === title);
    
    //if duplicate doesnt exists we push thw new node
    if(duplicateNotes.length === 0){
        
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    else
        console.log(duplicateNotes);
        
};

var getAll = () => {
    
    return fetchNotes();
    
};

var getNote = (title) => {
    
    var notes = fetchNotes();

    
    var filteredNotes = notes.filter((note) => note.title === title);
    
    if(filteredNotes.length !== 0)
        return filteredNotes[0];
    else
        return;
    
};

var remNote = (title) => {
    
    var notes = fetchNotes();
    var duplicateNotes = notes.filter((note) => note.title !== title);
    if(notes.length === duplicateNotes.length)
        console.log('The specified note doesnt exist!');
    else{
        saveNotes(duplicateNotes);
        console.log('Your note was successfully deleted!!');
    }
    
    
};

var logNote = (note) =>{
    
    console.log('------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
        
    
};

module.exports = {
    
  addNote,
  getAll,
  getNote,
  remNote,
  logNote
    
};