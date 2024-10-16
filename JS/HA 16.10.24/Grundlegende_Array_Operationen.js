// Erstelle ein Array mit den Zahlen 1 bis 10
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array:", numbers);

// Fügt die Zahl 11 am Ende des Arrays hinzu
numbers.push(11);
console.log("Nach dem Hinzufügen von 11:", numbers);

// Entfernt die erste Zahl aus dem Array
numbers.shift();
console.log("Nach dem Entfernen der ersten Zahl:", numbers);

// Findet und gibt die Position der Zahl 5 im Array aus
let positionOfFive = numbers.indexOf(5);
console.log("Position der Zahl 5:", positionOfFive);

// Überprüfe, ob die Zahl 7 im Array enthalten ist
let containsSeven = numbers.includes(7);
console.log("Enthält das Array die Zahl 7?", containsSeven);
