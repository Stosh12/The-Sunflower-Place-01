/* Sunflower JavaScript */

/* This script will use the toggle method to display and hide the menu. */

// Define a variable (icon) to serve as the container for the hamburger. We will use 
// 'const' here. 
const icon = document.querySelector("#icon img");

// Define a variable (myMenu) to serve as a container for the menu. We will use
// 'const' here.
const myMenu = document.querySelector("nav ul");

// Variable for all links; returns an array
const menuLink = document.querySelectorAll(".menu-link");

// Event Listener
window.addEventListener("load" (event));

// Function
// checkWindowSize();


// Event Listener on icon
icon.addEventListener("click", changeOpacity);

// menuLink.onload = inactiveLinks(); {
//     if(!myMenu.classList.contains("active")){
//         for(let i=0; i < menuLink.length; i++) {
//             menuLink[i].classList.toggle("inactive");
//         } 
//         } 
// }


// Function to run as a part of the eventListener
function changeOpacity() {
    if(myMenu.style.display == "block") {
        myMenu.style.display = "none";
    }
    myMenu.classList.toggle("active");
    icon.classList.toggle("active");

    // If the menuLinks are set to 'inactive' remove this class;
    // Resetting the links.
    for(let n=0; n < menuLink.length; n++){
        if(menuLink[n].classList.contains("inactive")){
            menuLink[n].classList.remove("inactive");
        }
    }

    // If the menu classList does not contain 'active', hide the links.
    if(!myMenu.classList.contains("active")){
        // This for loop moves through the array of links and toggles the active 
    // class, which was added in the CSS file.
    for(let i=0; i < menuLink.length; i++) {
        menuLink[i].classList.toggle("inactive");
    } 
    } 
}

function checkWindowSize(){
    console.log(screen.width);
if (screen.width < 1225) {
    console.log("It's less than 1225.");
    for(let i=0; i < menuLink.length; i++) {
        menuLink[i].classList.toggle("inactive");
    } 
} 
}




// Add event listener to hamburger icon, which toggles the active class.
// Hint: classList.toggle
// icon.addEventListener("click", () => {
//     myMenu.classList.toggle("active");
//     icon.classList.toggle("active");
// });

