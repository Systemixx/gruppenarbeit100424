const fs = require('fs');
const readline = require('readline');

const NOTES_FILE = 'notes.txt';

// Funktion zum Hinzufügen einer Notiz
function addNote(note) {
    fs.appendFile(NOTES_FILE, note + '\n', (err) => {
        if (err) {
            console.error('Fehler beim Hinzufügen der Notiz:', err);
        } else {
            console.log('Notiz erfolgreich hinzugefügt.');
        }
    });
}

// Funktion zum Anzeigen aller Notizen
function showNotes() {
    fs.readFile(NOTES_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error('Fehler beim Lesen der Notizen:', err);
        } else {
            const notes = data.split('\n').filter(note => note.trim() !== '');
            if (notes.length === 0) {
                console.log('Keine Notizen vorhanden.');
            } else {
                console.log('Notizen:');
                notes.forEach((note, index) => {
                    console.log(`${index + 1}. ${note}`);
                });
            }
        }
    });
}

// Funktion zum Löschen einer Notiz
function deleteNote(noteToDelete) {
    fs.readFile(NOTES_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error('Fehler beim Lesen der Notizen:', err);
        } else {
            let notes = data.split('\n').filter(note => note.trim() !== '');
            const index = notes.findIndex(note => note === noteToDelete);
            if (index === -1) {
                console.log('Die Notiz wurde nicht gefunden.');
                return;
            }
            notes.splice(index, 1);
            fs.writeFile(NOTES_FILE, notes.join('\n'), (err) => {
                if (err) {
                    console.error('Fehler beim Löschen der Notiz:', err);
                } else {
                    console.log('Notiz erfolgreich gelöscht.');
                }
            });
        }
    });
}

// Einrichten der CLI für Benutzerinteraktionen
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Was möchten Sie tun? (add/show/delete/exit): ', (answer) => {
    if (answer === 'add') {
        rl.question('Geben Sie die Notiz ein, die Sie hinzufügen möchten: ', (note) => {
            addNote(note);
            rl.close();
        });
    } else if (answer === 'show') {
        showNotes();
        rl.close();
    } else if (answer === 'delete') {
        rl.question('Geben Sie die Notiz ein, die Sie löschen möchten: ', (note) => {
            deleteNote(note);
            rl.close();
        });
    } else if (answer === 'exit') {
        rl.close();
    } else {
        console.log('Ungültige Eingabe. Bitte geben Sie add, show, delete oder exit ein.');
        rl.close();
    }
});