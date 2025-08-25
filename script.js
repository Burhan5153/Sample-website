//   cartcount
const cartCount = document.getElementById("cart-count");
const cart = JSON.parse(localStorage.getItem("cart")) || [];
cartCount.textContent = cart.length;

// darkmode

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
