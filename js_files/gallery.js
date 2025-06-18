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




// JavaScript for Fullscreen Image Viewer
const images = document.querySelectorAll('.image_col img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('fullImage');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentImageIndex = 0;

// Open Modal with Selected Image
function openModal(index) {
    modal.style.display = 'block';
    modalImg.src = images[index].src;
    currentImageIndex = index;
}

// Close Modal
function closeModal() {
    modal.style.display = 'none';
}

// Show Previous Image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentImageIndex].src;
}

// Show Next Image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImg.src = images[currentImageIndex].src;
}

// Event Listeners
images.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
});

closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Close Modal on Outside Click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
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