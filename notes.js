const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// error function
var addNote = (title, body) => {
    var notes = fetchNotes();

    var note = {
        title,
        body
    };

    duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    notes = fetchNotes();
    filteredNote = notes.filter((note) => note.title === title);
    return filteredNote[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    remainingNotes = notes.filter((note) => note.title !== title);
    saveNotes(remainingNotes);

    return notes.length !== remainingNotes.length;
};

var logNote = (note) => {
    debugger;
    console.log("----");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};
//here we set names to values in the export but if both name and value are the same we just 
//write the name
//addNote identical to addNote: addNote
//i.e if u have a property whose name is identical to the value in es6 u can simply remove the values name
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};