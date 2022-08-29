const bookControl = Array.from(document.querySelectorAll('.book__control_font-size'));

bookControl.forEach (i => {
    const fonts = [...i.children];

    fonts.forEach(size => {
        size.addEventListener('click', m => {
            fonts.forEach(e => {    
                if (e.classList.contains('font-size_active')) {
                    e.classList.remove('font-size_active');
                }
            })

            book.className = 'book';
            book.classList.add(size.classList[1]);
            size.classList.add('font-size_active');

            m.preventDefault();
        })
    })
})