// Load cart items
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty!</p>';
    } else {
        cartItemsDiv.innerHTML = cart.map(item => `
            <div class="cart-item">
                <p>${item.name} - $${item.price}</p>
            </div>
        `).join('');
    }
}

// Call the function to load the cart when the page loads
window.onload = loadCart;

// Checkout function
function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    orderHistory = orderHistory.concat(cart);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    localStorage.removeItem('cart');
    alert('Order placed successfully!');
    loadCart();  // Reload cart after checkout
}
