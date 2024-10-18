var button = document.getElementById('clickButton');

var messageContainer = document.getElementById('messageContainer');

button.addEventListener('click', function() {

    var newParagraph = document.createElement('p');
    
    newParagraph.textContent = 'Button wurde geklickt!';
    
    messageContainer.appendChild(newParagraph);
});
