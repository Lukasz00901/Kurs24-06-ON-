var boxes = document.getElementsByClassName('box');

for (var i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener('click', function() {

        for (var j = 0; j < boxes.length; j++) {
            boxes[j].style.backgroundColor = 'blue'; 
        }
    });
}
