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
  }, 6000); // Example: 3000 milliseconds (3 seconds)
});

var rellax = new Rellax('.rellax', {
  breakpoints: [576, 768, 1201]
});

let year = document.querySelector("#year");

$(year).ready(function () {
  year.innerText = new Date().getFullYear();
});

let custom_scroll = document.getElementById('body');
let scroll_timeout = undefined;
let ratio = 0.0000001;//change this to increase/descrease scroll speed/step
custom_scroll.addEventListener("wheel", (event) => {
  passive: false;
  event.preventDefault();

    clearTimeout(scroll_timeout);//if the previous scroll didn't finish, need to stop it to prevent infinite scroll.

    let target = custom_scroll.scrollTop + event.deltaY * ratio;
    let step = target > custom_scroll.scrollTop ? 1 : -1;

    let frame = () => {
        custom_scroll.scrollTop += step;
        if((target < custom_scroll.scrollTop && step < 0) || (target > custom_scroll.scrollTop && step > 0)) {
          scroll_timeout = setTimeout(frame, 5);
        }
    }
    frame();
});