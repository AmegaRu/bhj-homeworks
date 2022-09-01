const quantityControl = Array.from(document.querySelectorAll('.product__quantity-control'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.getElementsByClassName('cart__products');



quantityControl.forEach(elem => {
    elem.addEventListener('click', (event) => {
        let target = event.target;
        let token = target.closest('.product__quantity-controls').querySelector('.product__quantity-value');

        if (target.classList.contains('product__quantity-control_dec') && (token.textContent > 1)) {
            token.textContent--;
        } else if (target.classList.contains('product__quantity-control_inc')) {
            token.textContent++;
        }
    });
});

productAdd.forEach(elem => {
    elem.addEventListener('click', (event) => {
        let target = event.target;
        let productImage = target.closest('.product').querySelector('.product__image').src;
        let value = target.closest('.product').querySelector('.product__quantity-value').textContent;
        let productId = target.closest('.product').dataset.id;
    
        const html = `<div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${productImage}">
        <div class="cart__product-count">${value}</div>
        </div>`;
    
        let check = Array.from(document.getElementsByClassName('cart__product')).find(item => item.dataset.id === productId);
    
        if (check != undefined) {
            let number = check.querySelector('.cart__product-count').textContent;
            check.querySelector('.cart__product-count').textContent = (+number) + (+value);
        } else cartProducts[0].insertAdjacentHTML("beforeEnd", html);
    });
});