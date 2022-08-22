const tabArray = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabArray.length; i++) {
    const tab = tabArray[i];
  
    tab.addEventListener('click', () => {
        const tabActive = document.querySelector('.tab_active');
        const tabContentActive = document.querySelector('.tab__content_active');

        tab.classList.add('tab_active');
        tabContent[tabArray.indexOf(tab)].classList.add('tab__content_active');

        tabActive.classList.remove('tab_active');
        tabContentActive.classList.remove('tab__content_active');
    });
}