const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list'); 

function toClick() {
    dropdownList.classList.add('dropdown__list_active');
}

dropdownValue.addEventListener('click', toClick);

dropdownList.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownValue.textContent = event.target.textContent;
    dropdownList.classList.remove('dropdown__list_active');
});