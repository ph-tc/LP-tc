// Scroll initialization

var scroll = new SmoothScroll('a[href*="#"]');


// Page functionality

var burger = document.querySelector('.hamburger');
var menu = document.querySelector('.section-1 ul');

burger.addEventListener('click', function() {
  burger.classList.toggle('is-active');
  menu.classList.toggle('open');
  document.body.classList.toggle('blocked');
});

menu.addEventListener('click', function(e) {
  var target = e.target;
  if ( target.tagName === 'A' ) {
    menu.classList.remove('open');
    burger.classList.remove('is-active');
    document.body.classList.remove('blocked');
  }
})