// Wait for the page to fully load
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('content');

  // Simulate network speed (adjust the time based on your needs)
  setTimeout(function() {
    // Hide the preloader
    preloader.style.display = 'none';
    // Show the content
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.alignItems = 'center';

    // Initialize AOS after preloader finishes
    AOS.init();
  }, 7000); // Example: 3000 milliseconds (3 seconds)
});

var rellax = new Rellax('.rellax');

let year = document.querySelector("#year");

$(document).ready(function () {
  year.innerText = new Date().getFullYear();
});