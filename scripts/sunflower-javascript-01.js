/* Sunflower JavaScript */

// --------- Variables -----------------

/* This script will use the toggle method to display and hide the menu. */

// Define a variable (icon) to serve as the container for the hamburger. We will use 
// 'const' here. 
const icon = document.querySelector("#icon img");

// Define a variable (myMenu) to serve as a container for the menu. We will use
// 'const' here.
const myMenu = document.querySelector("nav ul");

// Variable for all links; returns an array
const menuLink = document.querySelectorAll(".menu-link");

// ------- Event Listeners -------------


/* The links have been given a class of "inactive" within the HTML file. Keeping this in mind, 
    we must remove this class if the page is viewed in a larger viewport. */
window.addEventListener("load", checkWindowSize);

/* The next challenge that we face is that once the window is sized down, the links are still active.
    We need a function that will add the inactive class to the links if the window size is less than
    the specified viewport width */
window.addEventListener("resize", resetLinks);





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
    // if(myMenu.style.display == "block") {
    //     myMenu.style.display = "none";
    // }
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
    // console.log(window.innerWidth);
    if(window.innerWidth > 1225) {
        // console.log("The screen is greater than 1225.");
        for(let i=0; i < menuLink.length; i++) {
            if(menuLink[i].classList.contains("inactive")) {
                menuLink[i].classList.remove("inactive");
            }
        }
    } else {
        // console.log("The screen width is below 1225");
    }
}

/* Note: You will want to remove the console.log messages before pushing to the server. 
    They have been added so that you can see the classes being added and removed. */
function resetLinks() {
     if(window.innerWidth <= 1225) {
        //  console.log("The screen is smaller than 1225");
        for(let i=0; i < menuLink.length; i++) {
            // console.log(menuLink[i].classList);
            if (!menuLink[i].classList.contains("inactive")){
                menuLink[i].classList.toggle("inactive");
                // console.log("The inactive class was not present, so I added it.");
            } 
        }
    } else if(window.innerWidth > 1225){
        for(let i=0; i < menuLink.length; i++) {
            // console.log(menuLink[i].classList);
            if (menuLink[i].classList.contains("inactive")){
                menuLink[i].classList.toggle("inactive");
            } 
        }

    }

}




// Add event listener to hamburger icon, which toggles the active class.
// Hint: classList.toggle
// icon.addEventListener("click", () => {
//     myMenu.classList.toggle("active");
//     icon.classList.toggle("active");
// });

