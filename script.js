// Typed.js Initialization
var typed2 = new Typed(".type2", {
  strings: ["Web Developer", "Software Developer", "Programmer"],
  typeSpeed: 80,
  backSpeed: 70,
  loop: true
});

// Hamburger Toggle
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const navLinks = document.querySelectorAll(".nav-bar ul li a");

hamburger.onclick = function () {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
};

// Close menu and remove hamburger active when nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Scroll-based active link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// Scroll-to-top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  this.blur();
});

// Clear contact form on submit
document.querySelector(".contact-form form").addEventListener("submit", function (e) {
  // Optional: Immediately clear form inputs
  setTimeout(() => {
    this.reset(); // Clears all fields
  }, 10); // Delay ensures the data still gets sent to Formspree
});


// Refresh the page if returned to #contact section (after form submission)
if (window.location.hash === "#contact") {
  window.location.hash = ""; // Clear the hash
  location.reload(); // Force reload
}


  function redirectAfterSubmit() {
    setTimeout(() => {
      window.location.href = "thankyou.html";
    }, 100); // Delay ensures the form is submitted first
  }

