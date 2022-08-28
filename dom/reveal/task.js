const reveal = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', () => {
    for (let i = 0; i < reveal.length; i++) {
        const top = reveal[i].getBoundingClientRect().top;
        const bottom = reveal[i].getBoundingClientRect().bottom;

        if (top < this.innerHeight && top > 0 || bottom < this.innerHeight && bottom > 0) {
            reveal[i].classList.add('reveal_active');
        } else {
            reveal[i].classList.remove('reveal_active');
        }
    }
})