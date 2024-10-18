var button = document.getElementById('submitButton');
var input = document.getElementById('textInput');
var outputContainer = document.getElementById('outputContainer');

button.addEventListener('click', function() {
    var inputText = input.value; // Oder auch input.getAttribute('value')

    var newParagraph = document.createElement('p');
    
    newParagraph.textContent = inputText;

    outputContainer.appendChild(newParagraph);
    
    input.value = '';
});
