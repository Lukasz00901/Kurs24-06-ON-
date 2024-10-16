// Erstellt ein Array mit den Namen von fünf verschiedenen Städten
let cities = ["Berlin", "München", "Hamburg", "Frankfurt", "Köln"];

// Iteriert über das Array und gib jede Stadt in Großbuchstaben aus
for (let city of cities) {
  console.log(city.toUpperCase());
}

// Erstellt ein neues Array, das die Anzahl der Buchstaben in jedem Stadtnamen speichert
let cityNameLengths = cities.map(city => city.length);
console.log("Anzahl der Buchstaben in den Städtenamen:", cityNameLengths);
