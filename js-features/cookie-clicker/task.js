const image = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

image.onclick = function () {
    counter.textContent++;

    if(image.width == 200) {
        image.width = 250;
    } else image.width = 200;
}