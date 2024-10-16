// Erstellt ein 2D-Array, das eine 3x3-Matrix repräsentiert, die mit den Zahlen 1 bis 9 gefüllt ist
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Funktion, die die Diagonalsumme der Matrix (von oben links nach unten rechts) berechnet
  function diagonalSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
      sum += matrix[i][i];
    }
    return sum;
  }
  
  console.log("Diagonalsumme:", diagonalSum(matrix));
  
  // Verwandelt die Matrix in eine 3x3-Matrix mit Nullen in den Ecken
  matrix[0][0] = 0; // obere linke Ecke
  matrix[0][2] = 0; // obere rechte Ecke
  matrix[2][0] = 0; // untere linke Ecke
  matrix[2][2] = 0; // untere rechte Ecke
  
  console.log("Matrix mit Nullen in den Ecken:");
  console.log(matrix);
  