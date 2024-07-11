"use strict";

var toTop = document.querySelector(".to-top");
$('.carousel').carousel({
  interval: 1500
})(function ($) {
  var navbarScrolled = function navbarScrolled() {
    if ($("#navbar").offset().top > 50) {
      $("#navbar").addClass("navbar-scrolled");
    } else {
      $("#navbar").removeClass("navbar-scrolled");
    }
  };

  navbarScrolled(); // when the page is scrolled

  $(window).scroll(navbarScrolled); // for active scrollspy

  $('body').scrollspy({
    target: '#navbar',
    offset: 75
  });
})(jQuery);
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
$(document).ready(function () {
  $(".fancybox").fancybox();
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  ;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}