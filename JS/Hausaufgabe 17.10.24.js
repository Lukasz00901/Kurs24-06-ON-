// Aufgabe 1. Erstellen Sie eine Map namens BenutzerVerwaltung...


let BenutzerVerwaltung = new Map();

BenutzerVerwaltung.set('benutzer123', { email: 'benutzer123@example.com', role: 'Admin' });
BenutzerVerwaltung.set('benutzer456', { email: 'benutzer456@example.com', role: 'User' });
BenutzerVerwaltung.set('benutzer789', { email: 'benutzer789@example.com', role: 'Gast' });

function zeigeBenutzer() {
  for (let [benutzername, benutzerInfo] of BenutzerVerwaltung) {
    console.log(`${benutzername}: E-Mail: ${benutzerInfo.email}, Rolle: ${benutzerInfo.role}`);
  }
}

zeigeBenutzer();

//  Aufgabne 2. Erstellen Sie eine Set namens besuchteSeiten...

let besuchteSeiten = new Set();

besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');

besuchteSeiten.add('Startseite');  // Duplikat
besuchteSeiten.add('Hilfe');
besuchteSeiten.add('Profil');  // Duplikat

console.log(`Anzahl der eindeutigen Seiten: ${besuchteSeiten.size}`);

function zeigeSeiten(set) {
  for (let seite of set) {
    console.log(`Besuchte Seite: ${seite}`);
  }
}

zeigeSeiten(besuchteSeiten);

