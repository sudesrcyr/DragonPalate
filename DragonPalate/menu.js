document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const cartItemsList = document.querySelector('.cart-items');
    let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

    // Sepetteki ürünleri localStorage'dan al
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Sepetteki ürünleri ve toplam tutarı güncelle
    function updateCart() {
        // Sepet içeriğini temizle
        cartItemsList.innerHTML = '';

        // Her ürün için
        cartItems.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button class="remove-from-cart">Delete</button>`;

            const removeFromCartButton = cartItem.querySelector('.remove-from-cart');
            removeFromCartButton.addEventListener('click', () => {
                // Ürünü sepetten çıkar
                removeFromCart(item);
            });

            cartItemsList.appendChild(cartItem);
        });

        // Toplam tutarı güncelle
        updateTotalPrice();
    }

    // Toplam tutarı güncelle
    function updateTotalPrice() {
        const totalElement = document.querySelector('.total-price');
        totalElement.textContent = `Total Amount: $${totalPrice.toFixed(2)}`;
    }

    // Ürünü sepete ekleme işlemi
    function addToCart(item) {
        cartItems.push(item);
        totalPrice += item.price;

        // Sepeti ve toplam tutarı localStorage'a kaydet
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('totalPrice', totalPrice.toString());

        // Sepeti ve toplam tutarı güncelle
        updateCart();
    }

    // Ürünü sepetteki kaldırma işlemi
    function removeFromCart(item) {
        const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (itemIndex !== -1) {
            totalPrice -= cartItems[itemIndex].price;
            cartItems.splice(itemIndex, 1);

            // Sepeti ve toplam tutarı localStorage'a kaydet
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            localStorage.setItem('totalPrice', totalPrice.toString());

            // Sepeti ve toplam tutarı güncelle
            updateCart();
        }
    }

    menuItems.forEach(item => {
        const addToCartButton = item.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => {
            const itemId = item.dataset.id;
            const itemName = item.dataset.name;
            const itemPrice = parseFloat(item.dataset.price);

            const newItem = { id: itemId, name: itemName, price: itemPrice };
            addToCart(newItem);
        });
    });

    // Sepeti başlangıçta güncelle
    updateCart();

    const checkoutButton = document.querySelector('.checkout-button');
    checkoutButton.addEventListener('click', () => {
        if (totalPrice > 0) {
            // Sepette ürün varsa, sipariş sayfasına yönlendir
            window.location.href = 'order.html';
        } else {
            alert('Card is empty. Please add food first.');
        }
    });
});



