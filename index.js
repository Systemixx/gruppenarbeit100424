const fs = require('fs');
const express = require('express');
const app = express();

const NOTES_FILE = 'notes.txt';

// Funktion zum Hinzufügen einer Notiz
app.get('/add', (req, res) => {
    const note = req.query.note;
    if (!note) {
        res.status(400).send('Bitte geben Sie eine Notiz ein.');
        return;
    }
    fs.appendFile(NOTES_FILE, note + '\n', (err) => {
        if (err) {
            console.error('Fehler beim Hinzufügen der Notiz:', err);
            res.status(500).send('Fehler beim Hinzufügen der Notiz.');
        } else {
            console.log('Notiz erfolgreich hinzugefügt.');
            res.send('Notiz erfolgreich hinzugefügt.');
        }
    });
});

// Funktion zum Löschen einer Notiz
app.get('/delete', (req, res) => {
    const noteToDelete = req.query.note;
    if (!noteToDelete) {
        res.status(400).send('Bitte geben Sie eine Notiz zum Löschen an.');
        return;
    }
    fs.readFile(NOTES_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error('Fehler beim Lesen der Notizen:', err);
            res.status(500).send('Fehler beim Lesen der Notizen.');
        } else {
            let notes = data.split('\n').filter(note => note.trim() !== '');
            const index = notes.findIndex(note => note === noteToDelete);
            if (index === -1) {
                console.log('Die Notiz wurde nicht gefunden.');
                res.send('Die Notiz wurde nicht gefunden.');
                return;
            }
            notes.splice(index, 1);
            fs.writeFile(NOTES_FILE, notes.join('\n'), (err) => {
                if (err) {
                    console.error('Fehler beim Löschen der Notiz:', err);
                    res.status(500).send('Fehler beim Löschen der Notiz.');
                } else {
                    console.log('Notiz erfolgreich gelöscht.');
                    res.send('Notiz erfolgreich gelöscht.');
                }
            });
        }
    });
});

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
