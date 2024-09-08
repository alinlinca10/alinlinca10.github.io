// ? Show toast on enter on website, once per session

// const toastLiveExample = document.getElementById('liveToast')
// const toast = new bootstrap.Toast(toastLiveExample)

// $(document).ready(function() {
//   if(sessionStorage.getItem('#livetoast')!=='true')
//   {
//     toast.show();
//     sessionStorage.setItem('#livetoast',true);
//   }
// });

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// ? Initialize animate on scroll library

AOS.init();

// ? Page loader script

// $(window).on('load', function() {
//   $('#loading').fadeOut('slow');
// });

// ? Initalize Parallax script

var image = document.getElementsByClassName('dev-parallax');
new simpleParallax(image, {
	delay: .7,
  overflow: true,
	transition: 'cubic-bezier(0,0,0,1)'
});

// ? Rellax js

// var rellax = new Rellax('.rellax');

// ? Initialize Swiper

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 'auto',
//   spaceBetween: 30,
//   centeredSlides: 'auto',
//   loop: true,
//   // preloadImages: true,
//   slidesPerGroupSkip: 1,
//   grabCursor: true,
//   keyboard: {
//     enabled: true,
//   },
//   breakpoints: {
//     769: {
//       slidesPerView: 2,
//       slidesPerGroup: 1,
//     },
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     // type: "progressbar",
//     type: "fraction",
//   },
// });

// ? Apple scroll video animation

// var FRAMES = 150;
// var FPS = 100;
// var video = document.getElementById('video');

// window.addEventListener('scroll', function (e) {
//   var time = (window.scrollY / 1000) * FRAMES / FPS;
//   video.currentTime = time;
// });

// window.addEventListener('load', function(e) {
//   video.pause();
//   video.currentTime = 0;
// });

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

$("a.nav-link").click(function(){
  $('button.navbar-toggler').addClass('collapsed').attr('aria-expanded', 'false');
  $('.navbar-collapse').removeClass('show');
});

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("header").style.top = "0";
//   } else {
//     if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
//       document.getElementById("header").style.top = "0";
//     } else {
//       document.getElementById("header").style.top = "-40px";
//     }
//   }
//   prevScrollpos = currentScrollPos;
// }

$(document).ready(function() {
  var scrollTop = $(window).scrollTop();

  // Verificăm dacă utilizatorul face scroll în jos
  if (scrollTop > 0) {
    $('#header').addClass('nav-background');
  } else {
    $('#header').removeClass('nav-background');
  }
  
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

    // Verificăm dacă utilizatorul face scroll în jos
    if (scrollTop > 0) {
      $('#header').addClass('nav-background');
    } else {
      $('#header').removeClass('nav-background');
    }
  });
});