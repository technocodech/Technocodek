const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.getElementById('navbar-menu');
const overlay = document.getElementById('overlay');

// Buat tombol close (X) secara dinamis
const closeBtn = document.createElement('div');
closeBtn.classList.add('close-btn');
closeBtn.innerHTML = '<i class="fas fa-times"></i>';
navbarMenu.appendChild(closeBtn);

// Function to toggle menu, overlay, and close button
const toggleMenu = () => {
    navbarMenu.classList.toggle('active');
    overlay.classList.toggle('active');
};

// Event listener for hamburger menu
mobileMenu.addEventListener('click', toggleMenu);

// Event listener for close button (X)
closeBtn.addEventListener('click', toggleMenu);

// Event listener for overlay to close menu
overlay.addEventListener('click', toggleMenu);