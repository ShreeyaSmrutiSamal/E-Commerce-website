// Sample product data
const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Tablet', price: 600 }
];

// Function to display products
function displayProducts(productList) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productDiv);
    });
}

// Search function
document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
});

// Display all products on page load
displayProducts(products);
