const book = document.querySelector('.book');
const sizeSmall = document.querySelector('.font-size_small');
const sizeBig = document.querySelector('.font-size_big');
const fontSize = Array.from(document.querySelectorAll('.font-size'));

function addSmile (event) {
    event.preventDefault();

    for (let i = 0; i < fontSize.length; i++) {
        if (fontSize[i].classList.contains('font-size_active')) {
            fontSize[i].classList.remove('font-size_active');
        }
    }

    sizeSmall.classList.add('font-size_active');
    book.classList.add('book_fs-small');
}

function addBig (event) {
    event.preventDefault();

    for (let i = 0; i < fontSize.length; i++) {
        if (fontSize[i].classList.contains('font-size_active')) {
            fontSize[i].classList.remove('font-size_active');
        }
    }

    sizeBig.classList.add('font-size_active');
    book.classList.add('book_fs-big');
}

sizeSmall.addEventListener('click', addSmile);
sizeBig.addEventListener('click', addBig);