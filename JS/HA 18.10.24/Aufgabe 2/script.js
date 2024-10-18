function getRandomColor() {
    let randomColor = Math.floor(Math.random() * 17777777).toString(16);
    return "#" + randomColor.padStart(6, '0');
}

var button = document.getElementById('colorButton');

button.addEventListener('click', function() {
    // Zufällige Farbe generieren und als Hintergrund setzen
    button.style.backgroundColor = getRandomColor();
});
