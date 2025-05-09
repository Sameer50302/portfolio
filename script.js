// Initialize Typed.js for the type2 class (for the typewriter effect)
    var typed2=new Typed(".type2",{
        strings: ["Web Developer","Software Developer","Programmer"],
        typeSpeed:80,
        backSpeed:70,
        loop:true
    });        

  
// Select hamburger menu and navbar
    const hamburger = document.querySelector(".hamburger");
    const navBar = document.querySelector(".nav-bar");

// Toggle the menu when hamburger is clicked
    hamburger.onclick = function() 
    {
        hamburger.classList.toggle("active"); // 👈 This line adds the cross effect
        navBar.classList.toggle("active"); // Toggles the visibility of the nav menu
    }

// Close the menu when clicking a link inside the navbar
    const navLinks = document.querySelectorAll(".nav-bar ul li a");
    navLinks.forEach(link => {
    link.addEventListener("click", () => {
    navBar.classList.remove("active"); // Closes the menu
    hamburger.classList.remove("active");  // Resets the hamburger icon
    });
    });


    document.querySelectorAll('.education-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});