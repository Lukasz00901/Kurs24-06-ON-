const fs = require('fs');
const readline = require('readline');

// Interface für die Benutzereingaben
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funktion, um Eingaben zu erhalten und Dateioperationen durchzuführen
rl.question('Gib den Namen der Datei ein: ', (fileName) => { // name der Datei.
  rl.question('Gib die Nachricht ein, die in die Datei geschrieben oder angehängt werden soll: ', (message) => {
    // Dateiinhalt anhängen
    fs.appendFile(fileName, message + '\n', (err) => {
      if (err) {
        console.error('Fehler beim Schreiben in die Datei:', err); // fehler beim Öffnen der Datei
      } else {
        console.log('Nachricht erfolgreich hinzugefügt.');  //nachrich wurde erfolgreich hinzugefügt
      }
      rl.close(); // Interface schließen
    });
  });
});
