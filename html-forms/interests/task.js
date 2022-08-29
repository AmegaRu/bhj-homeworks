const interests = document.querySelectorAll('.interests_active');

for (let i = 0; i < interests.length; i++) {
    let check = interests[i].closest('.interest').firstElementChild.firstElementChild;
    let items = interests[i].querySelectorAll('.interest__check');

    check.addEventListener('change', function() {
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            if (this.checked) {
                item.checked = true;
            } else {
                item.checked = false;
            }
        }
    });
}