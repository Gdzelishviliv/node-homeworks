const fs = require("fs");

//ფუნქცია რომელიც ფაილში ამატებს შენიშვნას

function addNoteToFile(noteTitle, noteContent) {
  const note = `${noteTitle}::${noteContent}`;
  fs.writeFile("notes.txt", note, (err) => {
    if (note === "") {
      console.log("error", err);
    } else {
      console.log("note is succesfully added to file");
    }
  });
}

addNoteToFile("Note", "note is here");

//ფუნქცია რომელიც გამოიტანს შენიშვნას ტერმინაში(დაგვილოგავს)

function readNotesFromFile() {
  fs.readFile("notes.txt", "utf-8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        return callback([]);
      } else {
        return console.log("error", err);
      }
    }
    console.log(data);
  });
}

readNotesFromFile();

//ფუნქცია რომელიც წაშლის შენიშვნას სათაურის მიხედვით

function deleteNoteFromFile(noteTitle) {
  fs.readFile("notes.txt", "utf-8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.log("bo notes to delete.");
      } else {
        console.log("error:", err);
      }
      return;
    }

    const notes = data.split("\n").filter((note) => note.trim() !== "");
    const updatedNotes = notes.filter((note) => {
      const [title] = note.split("::");
      return title !== noteTitle;
    });

    fs.writeFile("notes.txt", updatedNotes.join("\n"), (err) => {
      if (err) {
        console.log("error:", err);
      } else {
        console.log(`note with title -${noteTitle}- deleted successfully.`);
      }
    });
  });
}

deleteNoteFromFile("Note");
