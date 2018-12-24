console.log('Starting app.js');

//installing local modules
var fs = require('fs');


//importing notes.js file
var notes = require('./notes.js');

const titleOptions = {
    
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

//installing npm module -lodash for utility functions
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs
    .command('add','Add a new note',{
        title: titleOptions,
        body: bodyOptions
    })
    .command('list','List all notes')
    .command('read','Read a note', {
        title: titleOptions
    })
    .command('remove','Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];
//console.log(command);
//console.log(process.argv);

console.log(argv);

if(command === 'add'){
    
    var note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log('Note created');
        notes.logNote(note);
        
   }
    else
        console.log("Note already taken!!");               
}

else if(command === 'list'){
    
   var allNotes = notes.getAll();
   console.log(`Printing ${allNotes.length} note(s).`)
   allNotes.forEach((note) => notes.logNote(note));
}

else if(command === 'remove'){
  
    notes.remNote(argv.title);
  //  console.log('Your note was removed successfully!!');
    
}

else if(command === 'read'){
    
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Opening Note...');
        notes.logNote(note);
        
   }
    else
        console.log("Note not found!");
    
}
else
    console.log('Command Not Recognized');



