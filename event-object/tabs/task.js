const tabArray = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabArray.length; i++) {

    tabArray[i].addEventListener('click', () => {

        for (let k = 0; k < tabArray.length; k++) {
            tabArray[k].classList.remove('tab_active');
        };

        tabArray[i].classList.add('tab_active');
        
        for(let m = 0; m < tabContent.length; m++) {

            if (tabContent[m].classList.contains('tab__content_active')) {
                tabContent[m].classList.remove('tab__content_active');
            };

        tabContent[i].classList.add('tab__content_active');
        };
    });
}

