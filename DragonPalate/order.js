document.addEventListener('DOMContentLoaded', function () {
    const orderItemsList = document.querySelector('.order-items');
    const orderTotal = document.querySelector('.order-total');
    const confirmOrderButton = document.getElementById('completeOrderButton'); // Buradaki id'yi butonun id'siyle değiştirdik

    // Sepetteki ürünleri ve toplam tutarı localStorage'dan al
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

    // Sipariş sayfasındaki ürünleri ve toplam tutarı güncelle
    function updateOrderSummary() {
        // Sepet içeriğini temizle
        orderItemsList.innerHTML = '';

        // Her ürün için
        cartItems.forEach(item => {
            const orderItem = document.createElement('li');
            orderItem.classList.add('order-item');
            orderItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

            orderItemsList.appendChild(orderItem);
        });

        // Toplam tutarı güncelle
        orderTotal.textContent = `Total Amount: $${totalPrice.toFixed(2)}`;
    }

    // Sipariş sayfasındaki bilgileri başlangıçta güncelle
    updateOrderSummary();

    // Siparişi onayla butonuna tıklama olayı
    confirmOrderButton.addEventListener('click', () => {
        alert('Your order has been received! Thank you.');

        // Sipariş tamamlandıktan sonra localStorage'daki bilgileri temizle
        localStorage.removeItem('cartItems');
        localStorage.removeItem('totalPrice');

    });
});









