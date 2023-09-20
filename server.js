const express = require('express');
const fs = require('fs');
const path = require('path');
const uuid =require('uuid');

const PORT = process.env.PORT || 4001;
const app = express(); 


//API ROUTES gets notes and saves it in db.json 
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))
});

//adds new notes to db.json 
app.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notes);
})