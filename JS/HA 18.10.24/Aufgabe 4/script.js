var newParagraph = document.createElement('p');

newParagraph.textContent = 'Dies ist ein neuer Absatz';

var container = document.getElementById('container');
container.appendChild(newParagraph);
