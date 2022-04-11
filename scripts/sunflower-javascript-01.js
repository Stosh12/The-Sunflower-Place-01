/* Sunflower JavaScript */

/* This script will use the toggle method to display and hide the menu. */

// Define a variable (icon) to serve as the container for the hamburger. We will use 
// 'const' here. 
const icon = document.querySelector("#icon img");

// Define a variable (myMenu) to serve as a container for the menu. We will use
// 'const' here.
const myMenu = document.querySelector("nav ul");

// Add event listener to hamburger icon, which toggles the active class.
// Hint: classList.toggle
icon.addEventListener("click", () => {
    myMenu.classList.toggle("active");
    icon.classList.toggle("active");
});

