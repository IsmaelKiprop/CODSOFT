// js/menu-toggle.js

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".navbar-toggler");
    const closeMenuLinks = document.querySelectorAll(".close-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    menuToggle.addEventListener("click", () => {
        if (menuToggle.classList.contains("collapsed")) {
            // Menu is open, close it
            menuToggle.click();
        }
    });

    closeMenuLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Close the menu
            menuToggle.click();
        });
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Close the menu
            menuToggle.click();
        });
    });
});

// Get references to the menu toggle button and close button
const menuToggleButton = document.querySelector('.navbar-toggler');
const closeButton = document.querySelector('#navbar-close-btn');

// Add event listener to the menu toggle button
menuToggleButton.addEventListener('click', function () {
    if (closeButton.style.display === 'none') {
        closeButton.style.display = 'inline-block';
    } else {
        closeButton.style.display = 'none';
    }
});

// Add event listener to the close button to hide it when clicked
closeButton.addEventListener('click', function () {
    closeButton.style.display = 'none';
});


