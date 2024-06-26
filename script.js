// Wait for the page to fully load
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('content');
  const navbar = document.querySelector(".nav")
  const dropBtn = document.querySelector(".drop-btn")

  setTimeout(() => {
    preloader.style.opacity = '0';

    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1000)

    AOS.init();

    setTimeout(() => {
      navbar.style.overflow = 'visible';
    }, 1500)
  }, 5400);
});

var rellax = new Rellax('.rellax', {
  breakpoints: [576, 768, 1201]
});

let year = document.querySelector("#year");

$(year).ready(function () {
  year.innerText = new Date().getFullYear();
});