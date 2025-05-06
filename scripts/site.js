// Squarespace Template Javascript
// Developed by Joshua Marino © 2025

// CUSTOM FUNCTIONS

    // Show Menu
    function showMenu() {
      $('body, .header, .page-content, .footer').toggleClass('showMenu');
      cursor.classList.remove('active');
    }

    // Custom Cursor
    const cursor = document.querySelector(".cursor");

    // Position custom cursor to cursor position
    document.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    });

    // Add 'click' class to cursor on mouse down and remove on mouse up
    document.addEventListener("mousedown", (e) => cursor.classList.add("click"));
    document.addEventListener("mouseup", (e) => cursor.classList.remove("click"));

    // Show custom cursor only over certain elements
    [document.querySelector('.home .collections .gallery-block'), document.querySelector('.home .collections .sqs-block-image-figure'), document.querySelector('.footer .ctas'), document.querySelector('.home .header .menu-icon')].forEach(item => {
      item?.addEventListener('mouseover', function () {
        cursor.classList.add('active');
      });

      item?.addEventListener('mouseout', function () {
        cursor.classList.remove('active');
      });

    })

    // Customize cursor based on specific element
    document.querySelector('.home .header .menu-icon').addEventListener('mouseover', function () {
      cursor.classList.remove('view');
      cursor.classList.remove('shop');
      cursor.classList.remove('contact');
      cursor.classList.remove('register');
      cursor.classList.add('menu');
    });

    document.querySelector('.home .collections .gallery-block').addEventListener('mouseover', function () {
      cursor.classList.remove('menu');
      cursor.classList.remove('shop');
      cursor.classList.remove('contact');
      cursor.classList.remove('register');
      cursor.classList.add('view');
    });

    document.querySelector('.footer .ctas .contact').addEventListener('mouseover', function () {
      cursor.classList.remove('view');
      cursor.classList.remove('menu');
      cursor.classList.remove('shop');
      cursor.classList.remove('register');
      cursor.classList.add('contact');
    });

    document.querySelector('.footer .ctas .register').addEventListener('mouseover', function () {
      cursor.classList.remove('view');
      cursor.classList.remove('menu');
      cursor.classList.remove('shop');
      cursor.classList.remove('contact');
      cursor.classList.add('register');
    });

    [document.querySelector('.home .collections .sqs-block-image-figure'), document.querySelector('.footer .ctas .shop')].forEach(item => {
      item?.addEventListener('mouseover', function () {
        cursor.classList.remove('menu');
        cursor.classList.remove('view');
        cursor.classList.remove('contact');
        cursor.classList.remove('register');
        cursor.classList.add('shop');
      });
    })

// PAGE LOAD FUNCTIONS
$(document).ready(function () {

  // Link Logo to Homepage Function
  $('.logo').click(function(){
    window.location = '../home';
  });

  // Show Main Menu
  $('.menu-icon').click(function(){
    showMenu();
  });


});

// SQUARESPACE IMAGE LOADER
function loadAllImages() {
  var images = document.querySelectorAll('img[data-src]' );

  setTimeout(function() {

    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], {load: true});
    }

  }, 500);

}

// LOAD IMAGES ON PAGE LOAD
document.addEventListener('DOMContentLoaded', loadAllImages);

// RELOAD IMAGES ON WINDOW RESIZE
window.addEventListener('Resize', loadAllImages);
