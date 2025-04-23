// Squarespace Template Javascript
// Developed by Joshua Marino © 2025

// CUSTOM FUNCTIONS


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
  }, 100)

}

// LOAD IMAGES ON PAGE LOAD
document.addEventListener('DOMContentLoaded', loadAllImages);

// RELOAD IMAGES ON WINDOW RESIZE
window.addEventListener('resize', loadAllImages);
