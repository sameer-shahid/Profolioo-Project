// Select the modal
const modal = document.querySelector('.modal');
const projectButtons = document.querySelectorAll('.project-button');
const closeModal = document.querySelector('.close-modal');

// Function to show the modal
function showModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function hideModal() {
  modal.style.display = 'none';
}

// Attach event listeners to each "See project" button
projectButtons.forEach(button => {
  button.addEventListener('click', showModal);
});

// Attach event listener to the close button
closeModal.addEventListener('click', hideModal);

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    hideModal();
  }
});




document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('show');
});

document.querySelectorAll('.dropdown-header').forEach(header => {
  header.addEventListener('click', () => {
    const target = document.querySelector(header.dataset.target);
    
    // Toggle open/closed class
    target.classList.toggle('open');
    header.classList.toggle('open');
    
    // Adjust the dropdown list's height based on whether it's open or closed
    if (target.classList.contains('open')) {
      target.style.height = target.scrollHeight + 'px'; // Set to the scroll height when open
    } else {
      target.style.height = '0px'; // Set to 0px when closed
    }

    // Adjusting opacity for smooth transitions
    const dropdownList = target.querySelector('.dropdown-list');
    if (dropdownList.classList.contains('open')) {
      dropdownList.classList.remove('open'); // Remove the 'open' class for smooth transition
    } else {
      dropdownList.classList.add('open'); // Add the 'open' class when opening
    }
  });
});




// Open the mobile menu
document.getElementById("menuIcon").addEventListener("click", function() {
  document.getElementById("mobileMenu").style.display = "block";
});

// Close the menu and scroll to section when clicking a menu link
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent default anchor behavior
    event.preventDefault();

    // Close the mobile menu
    document.getElementById("mobileMenu").style.display = "none";

    // Scroll smoothly to the target section
    const targetSection = document.querySelector(this.getAttribute("href"));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
