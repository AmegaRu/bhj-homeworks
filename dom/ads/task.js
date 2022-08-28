let activeCase = document.querySelector('.rotator__case_active');
let firstCase = document.querySelector('.rotator').firstElementChild;
let lastCase = document.querySelector('.rotator').lastElementChild;

function rotation () {
    activeCase.classList.remove('rotator__case_active');
    if (activeCase === lastCase) {
        activeCase = firstCase;
    } else {
        activeCase = activeCase.nextElementSibling;
    };

    activeCase.classList.add('rotator__case_active');
}

setInterval(rotation, 1000)