// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: 'smooth' // Use smooth scrolling for better user experience
    });
}

// Add event listener after the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the element with the class "top"
    const topElement = document.querySelector('.top');

    // Attach the click event listener to the element
    topElement.addEventListener('click', scrollToTop);
});

// Get references to the hamburger and navbar
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

// Add click event listener to the hamburger
hamburger.addEventListener("click", (event) => {
    // Toggle the 'open' class on the navbar
    navbar.classList.toggle("open");

    // Toggle the 'active' class on the hamburger for animation
    hamburger.classList.toggle("active");

    // Prevent the click event from propagating to the document
    event.stopPropagation();
});

// Add click event listener to the document
document.addEventListener("click", (event) => {
    // Check if the click occurred outside the navbar
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        // Remove the 'open' class from the navbar
        navbar.classList.remove("open");

        // Remove the 'active' class from the hamburger
        hamburger.classList.remove("active");
    }
});




// Handle submenu toggling
const dropdownLinks = document.querySelectorAll(".dropdown > .navBar_srvc");
const submenus = document.querySelectorAll(".submenu");

// Add click event listener to each dropdown link
dropdownLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior
        
        // Close other submenus
        submenus.forEach((submenu, submenuIndex) => {
            if (submenuIndex !== index) {
                submenu.style.display = "none";
            }
        });

        // Toggle the visibility of the clicked submenu
        const submenu = link.nextElementSibling;
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });
});

// Close submenus when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
        submenus.forEach((submenu) => {
            submenu.style.display = "none";
        });
    }
});







// Initialize the Google Translate widget
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  }
  
  // Add event listener to toggle the Google Translate dropdown visibility
  document.getElementById('translateToggleButton').addEventListener('click', function () {
    const translateElement = document.getElementById('google_translate_element');
    
    if (translateElement) {
      if (translateElement.style.display === 'none' || translateElement.style.display === '') {
        translateElement.style.display = 'block'; // Show the Google Translate dropdown
      } else {
        translateElement.style.display = 'none'; // Hide the Google Translate dropdown
      }
    } else {
      console.error('Google Translate element not found.');
    }
  });
  
  var loader = document.getElementById("preloader");

  window. addEventListener ("load", function () {
  loader.style.display = "none"
  
  I})





  document.addEventListener("DOMContentLoaded", function () {
    const srvcContainer = document.querySelector(".srvc_1st");
    const links = Array.from(srvcContainer.querySelectorAll("a"));
    const visibleCount = 3;
    let start = 0;

    // Create and insert the slider wrapper
    const sliderWrapper = document.createElement("div");
    sliderWrapper.classList.add("slider");

    // Append all original links to the slider
    links.forEach(link => sliderWrapper.appendChild(link));
    
    // Clone the first few links to create a seamless transition
    const clonedLinks = links.slice(0, visibleCount).map(link => link.cloneNode(true));
    clonedLinks.forEach(link => sliderWrapper.appendChild(link));

    srvcContainer.appendChild(sliderWrapper);

    function slide() {
        start = (start + 1) % links.length;
        const translateValue = -(start * (100 / visibleCount)) + "%";
        sliderWrapper.style.transition = "transform 1s ease";
        sliderWrapper.style.transform = `translateX(${translateValue})`;

        // After reaching the last set of links, reset position to simulate a seamless loop
        if (start === links.length - visibleCount) {
            setTimeout(() => {
                sliderWrapper.style.transition = "none"; // Disable transition
                sliderWrapper.style.transform = "translateX(0%)"; // Reset to the start
                start = 0; // Reset start index
            }, 1000); // Wait for the transition to complete before resetting
        }
    }

    setInterval(slide, 4000);
});
