// Select the cart count element
const cartCount = document.getElementById('cartCount');

// Initialize cart count
let count = 0;

// Function to update cart count
function updateCartCount() {
    cartCount.textContent = count;
}

// Add event listeners to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.addToCart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        updateCartCount();
    });
});
