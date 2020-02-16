let windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
let isMobile = window.outerWidth < 500;
/* Set the width of the side navigation to 250px */
function openNav() {
  // document.getElementById("navbarr").style.height = "100vh !important";
  $('.navbar').css("height","100vh", "important");
  document.getElementById("drawer").style.width = "550px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  // $('.navbar').css("background","transparent", "important");
  document.getElementById("drawer").style.width = "0";
  setTimeout(() => {
    (isMobile) && $('.navbar').css("height", "120px", "important");
    // $('.navbar').css("background","rgba(256,256,256,.9)", "important");
  }, 400)
}

// function myFunction3() {
//   var elmnt = document.getElementById("body");
//   elmnt.scrollIntoView();
// }

// function myFunction1() {
//   var elmnt = document.getElementById("services");
//   elmnt.scrollIntoView();
// }

// function myFunction2() {
//   var elmnt = document.getElementById("features");
//   elmnt.scrollIntoView();
// }


function navFunction(n) {
  let elmnt;
  switch (n) {
    case 0:
      elmnt = document.getElementById("body");
      elmnt.scrollIntoView();
      break;

    case 1:
      elmnt = document.getElementById("services");
      elmnt.scrollIntoView();
      break;

    case 2:
      elmnt = document.getElementById("features");
      elmnt.scrollIntoView();
      break;
  }

  closeNav();
}


$('.slickk').slick({
  accessibility: false,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  arrows: isMobile,
  dots: false,
  swipeToSlide: true,
  infinite: true
});

