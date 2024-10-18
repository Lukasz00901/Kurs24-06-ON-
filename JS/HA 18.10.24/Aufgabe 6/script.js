var box = document.querySelector('.box');

box.addEventListener('mouseover', function() {
    box.style.backgroundColor = 'orange'; // Farbe ändern beim Überfahren mit der Maus
});

box.addEventListener('mouseout', function() {
    box.style.backgroundColor = 'lightblue'; // Zurück zur Ausgangsfarbe, wenn die Maus die Box verlässt
});
