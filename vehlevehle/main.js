// state var
let services_touched = false;
let tt = false;

let windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
let ismobile = windowWidth < 500;
let istab = (windowWidth >= 768 && windowWidth <= 1024);
let medium_username = "ambhariilabs";

// service image paths
let service_images = [
  // default hathi image at 0
  'img/hathi.png',
  // left to right count order
  'img/121.png',
  'img/13.png',
  'img/10.png',
  'img/12.png',
];


// JS tilt Effect
// function hoverTilt () {
//   var tiltBlock = $('.js-tilt');
//   if(tiltBlock.length) {
//     $('.js-tilt').tilt({
//         glare: true,
//         maxGlare: .3
//     })
//   }
// }

// ( function( $ ) {

// 	"use strict";

//   $(".card").tilt({
//     maxTilt: 15,
//     perspective: 1400,
//     easing: "cubic-bezier(.03,.98,.52,.99)",
//     speed: 1200,
//     glare: true,
//     maxGlare: 0.2,
//     scale: 1.04
//   });

// }( jQuery ) );

// $(document).ready(function(){

// });


/* Set the width of the side navigation to 250px */
function openNav() {
  // document.getElementById("navbarr").style.height = "100vh !important";
  $('.navbar').css("height", "100vh", "important");
  document.getElementById("drawer").style.width = "550px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  // $('.navbar').css("background","transparent", "important");
  document.getElementById("drawer").style.width = "0";
  setTimeout(() => {
    (ismobile) && $('.navbar').css("height", "120px", "important");
    // $('.navbar').css("background","rgba(256,256,256,.9)", "important");
  }, 400)
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementsByClassName("grid")[0].style.WebkitFilter = 'blur(6px)';
  document.getElementsByClassName("grid")[0].style.filter = 'blur(6px)';
  closeNav();
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementsByClassName("grid")[0].style.WebkitFilter = 'blur(0px)';
  document.getElementsByClassName("grid")[0].style.filter = 'blur(0px)';
}


// JS tilt Effect
function hoverTilt() {
  var tiltBlock = $('.js-tilt');
  if (tiltBlock.length) {
    $('.js-tilt').tilt({
      glare: true,
      maxGlare: .3
    })
  }
}
// nav bar

$(document).ready(function () {

  $(".navbar").hide(); //Hide the navigation bar first

  $(window).scroll(function () {  //Listen for the window's scroll event
    if (isScrolledAfterElement("#content")) { //if it has scrolled beyond the #content elment
      $('.navbar').fadeIn();  //Show the navigation bar
    } else {
      $('.navbar').fadeOut(); //Else hide it
    }
  });

  $(".trigger_popup_fricc").click(function () {
    $('.hover_bkgr_fricc').show();
  });
  $('.hover_bkgr_fricc').click(function () {
    $('.hover_bkgr_fricc').hide();
  });
  $('.popupCloseButton').click(function () {
    $('.hover_bkgr_fricc').hide();
  });

  //Function that returns true if the window has scrolled beyond the given element
  function isScrolledAfterElement(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;

    return elemTop <= docViewBottom;
  }

  let facecount = ismobile ? 1 : 3;
  facecount = istab ? 2 : facecount;

  if (ismobile) {
    $('.navbar').css("height", "120px", "important");
  }


  let iconcount = ismobile ? 2 : 4;
  iconcount = istab ? 3 : iconcount;
  let darrows = (istab || ismobile) ? false : true;

  $('.slickk').slick({
    accessibility: false,
    infinite: true,
    slidesToShow: facecount,
    autoplay: true,
    arrows: darrows,
    dots: true,
    swipeToSlide: true,
    infinite: true,
    autoplaySpeed: 2000
  });

  $('.slickkk').slick({
    accessibility: false,
    infinite: true,
    slidesToShow: iconcount,
    autoplay: true,
    arrows: darrows,
    swipeToSlide: true
  });

  $('.slickkkk').slick({
    accessibility: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    arrows: darrows,
    dots: true,
    swipeToSlide: true,
    autoplaySpeed: 3000

  });
});

function myFunction0() {

}

function navFunction(n) {
  let elmnt;
  switch (n) {
    case 0:
      elmnt = document.getElementById("body");
      elmnt.scrollIntoView();
      break;

    case 1:
      elmnt = document.getElementById("content");
      elmnt.scrollIntoView();
      break;

    case 2:
      elmnt = document.getElementById("box5");
      elmnt.scrollIntoView();
      break;

    case 3:
      elmnt = document.getElementById("industries");
      elmnt.scrollIntoView();
      break;

    case 4:
      elmnt = document.getElementById("box12");
      elmnt.scrollIntoView();
      break;

    case 5:
      elmnt = document.getElementById("box16");
      elmnt.scrollIntoView();
      break;

    case 6:
      elmnt = document.getElementById("blog");
      elmnt.scrollIntoView();
      break;

    case 7:
      elmnt = document.getElementById("team");
      elmnt.scrollIntoView();
      break;
  }

  closeNav();
}

// end nav bar

// window.onscroll = function() {myFunction()};   
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;   
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }




const serviceDance = (ch) => {
  if (tt) {
    return;
  }
  if (!document.getElementById('myImg').src.includes(service_images[ch])) {
    $('#myImg').hide();
    document.getElementById('myImg').src = service_images[ch];
    $('#myImg').fadeIn(800);
  }
  tt = true;
  setTimeout(() => {
    tt = false;
  }, 200)
}

//Contact Form Validation
function contactFormValidation() {
  var activeForm = $('.form-validation');
  if (activeForm.length) {
    activeForm.validate({ // initialize the plugin
      rules: {
        sub: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        }
      },
      submitHandler: function (form) {
        $(form).ajaxSubmit({
          success: function () {
            $('.form-validation :input').attr('disabled', 'disabled');
            activeForm.fadeTo("slow", 1, function () {
              $(this).find(':input').attr('disabled', 'disabled');
              $(this).find('label').css('cursor', 'default');
              $('#alert-success').fadeIn();
            });
          },
          error: function () {
            activeForm.fadeTo("slow", 1, function () {
              $('#alert-error').fadeIn();
            });
          }
        });
      }
    });
  }
}


// Close suddess Alert
function closeSuccessAlert() {
  var closeButton = $(".closeAlert");
  if (closeButton.length) {
    closeButton.on('click', function () {
      $(".alert-wrapper").fadeOut();
    });
    closeButton.on('click', function () {
      $(".alert-wrapper").fadeOut();
    })
  }
}




const pathEvents = () => {

}


const buildUI = (p) => {
  // document.getElementById('dump').innerHTML = p[0].content;
  // p[0].content = document.getElementById('dump').innerText;
  // document.getElementById('dump').innerHTML = p[1].content;
  // p[1].content = document.getElementById('dump').innerText;

  // let c1 = p[0].content;
  // let c2 = p[1].content;

  //   c1 = c1.slice(0, 100)
  //   if (c1.includes('Unsplash')) {
  //     c1 = c1.slice(c1.indexOf("Unsplash") + 8, c1.length);
  //   }
  //   c2 = c2.slice(0, 100)
  //   if (c2.includes('Unsplash')) {
  //     c2 = c2.slice(c2.indexOf("Unsplash") + 8, c2.length);
  //   }
    let e = `
      <div class="box box19">
      <div class="blog1 hovereffect bloga">
        <a target="_blank" href="${p[0].link}"><img src="${p[0].thumbnail}"
            alt="blog1_creative"></a>
        <div class="overlay"></div>
        <p>${p[0].title}</p>
      </div>
    </div>

    <div class="box box20">
      <div class="blog2 bloga">
        <a target="_blank" href="${p[1].link}"><img src="${p[1].thumbnail}"
            alt="blog2_creative"></a>
        <div class="overlay"></div>
        <p>${p[1].title}</p>
      </div>
    </div>
      `
    // document.getElementById('dump').parentNode.insertBefore(e, document.getElementById('dump').nextSibling);
    $(e).insertAfter("#blog");


}

let ppp;

const getProfile = async () => {
  try {
    let r = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${medium_username}/?format=json`,
    );
    let profile = await r.json();
    profile = profile.items.slice(0,2);
    ppp = profile;
    buildUI(profile);
    document.getElementById('readmore').href = `https://medium.com/@${medium_username}`;
  } catch (e) {

  }
}

getProfile();







