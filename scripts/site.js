// Squarespace Template Javascript
// Developed by Joshua Marino © 2025

// CUSTOM FUNCTIONS

    // Show Menu
    function showMenu() {
      $('body, .header, .content-header, .page-content, .footer').toggleClass('showMenu');
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

    // Attach event listeners to mouse events
    document.addEventListener('mouseover', function(event) {
      const home = event.target.closest('.logo a');
      const menu = event.target.closest('.menu-icon');
      const shop = event.target.closest('.collections .sqs-block-image-figure, .ctas .shop');
      const view = event.target.closest('.collections .gallery-block, .product-image');
      const register = event.target.closest('.ctas .register');
      const contact = event.target.closest('.ctas .contact');


      if (home || menu || shop || view || register || contact) {
        cursor.classList.add('active');
      }

      //Customize cursor icon
      cursor.classList.remove('home', 'view', 'shop', 'contact', 'register', 'menu');

      if(home){cursor.classList.add('home');}
      if(menu){cursor.classList.add('menu');}
      if(view){cursor.classList.add('view');}
      if(shop){cursor.classList.add('shop');}
      if(register){cursor.classList.add('register');}
      if(contact){cursor.classList.add('contact');}

    });

    document.addEventListener('mouseout', function(event) {
      const home = event.target.closest('.logo a');
      const menu = event.target.closest('.menu-icon');
      const shop = event.target.closest('.collections .sqs-block-image-figure, .ctas .shop');
      const view = event.target.closest('.collections .gallery-block, .product-image');
      const register = event.target.closest('.ctas .register');
      const contact = event.target.closest('.ctas .contact');


      if (home || menu || shop || view || register || contact) {
        cursor.classList.remove('active');
      }
    });

    // Add 'click' class to cursor on mouse down and remove on mouse up
    document.addEventListener("mousedown", (e) => cursor.classList.add("click"));
    document.addEventListener("mouseup", (e) => cursor.classList.remove("click"));


// Position Images
function convertDecimalsToPercentInBackgroundPosition() {
  const section = document.querySelector('.content-fill');
  if (!section) return;

  const styleAttr = section.getAttribute('style');

  // Match background-position: .54 .72 or similar
  const updatedStyle = styleAttr.replace(/background-position:\s*([\d.]+)\s+([\d.]+)/, (match, x, y) => {
    const xPercent = (parseFloat(x) * 100).toFixed(2);
    const yPercent = (parseFloat(y) * 100).toFixed(2);
    return `background-position: ${xPercent}% ${yPercent}%`;
  });

  section.setAttribute('style', updatedStyle);
}

// Execute after DOM is ready
document.addEventListener('DOMContentLoaded', convertDecimalsToPercentInBackgroundPosition);

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
  var filteredImages = Array.from(images).filter(img => {return !img.closest(`div.${excludedClass}`);});

  setTimeout(function() {

    for (var i = 0; i < filteredImages.length; i++) {
      ImageLoader.load(filteredImages[i], {load: true});
    }

  }, 500);

}

// LOAD IMAGES ON PAGE LOAD
document.addEventListener('DOMContentLoaded', loadAllImages);

// RELOAD IMAGES ON WINDOW RESIZE
window.addEventListener('Resize', loadAllImages);
