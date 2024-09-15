// Load order history items
function loadOrderHistory() {
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const orderHistoryDiv = document.getElementById('order-history-items');
    
    if (orderHistory.length === 0) {
        orderHistoryDiv.innerHTML = '<p>No order history available!</p>';
    } else {
        orderHistoryDiv.innerHTML = orderHistory.map(item => `
            <div class="order-item">
                <p>${item.name} - $${item.price}</p>
            </div>
        `).join('');
    }
}

// Call the function to load order history when the page loads
window.onload = loadOrderHistory;
