// Squarespace Template Javascript
// Developed by Joshua Marino © 2025

// CUSTOM FUNCTIONS


// CUSTOM CURSOR
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
[document.querySelector('.home .collections .gallery-block'), document.querySelector('.home .collections .image-block'), document.querySelector('.home .footer .ctas')].forEach(item => {
  item.addEventListener('mouseover', function () {
    cursor.classList.add('active');
  });

  item.addEventListener('mouseout', function () {
    cursor.classList.remove('active');
  });

})


// PAGE LOAD FUNCTIONS
$(document).ready(function () {

  // Link Logo to Homepage Function
  $('.logo').click(function(){
    window.location = '../home';
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
