'use strict';
$(document).ready(function() {
  var $wrap = $(".wrapper"),
      pages = $(".page").length,
      scrolling = false,
      currentPage = 1,
      $navPanel = $(".nav-panel"),
      $scrollBtn = $(".scroll-btn"),
      $navBtn = $(".nav-btn");

  /*****************************
  ***** NAVIGATE FUNCTIONS *****
  *****************************/
  function manageClasses() {
    $wrap.removeClass(function (index, css) {
      return (css.match (/(^|\s)active-page\S+/g) || []).join(' ');
    });
    $wrap.addClass("active-page" + currentPage);
    $navBtn.removeClass("active");
    $(".nav-btn.nav-page" + currentPage).addClass("active");
    $navPanel.addClass("invisible");
    scrolling = true;
    setTimeout(function() {
      $navPanel.removeClass("invisible");
      scrolling = false;
    }, 1000);
  }
  function navigateUp() {
    if (currentPage > 1) {
      currentPage--;
      if (Modernizr.csstransforms) {
        manageClasses();
      } else {
        $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 1000);
      }
    }
  }

  function navigateDown() {
    if (currentPage < pages) {
      currentPage++;
      if (Modernizr.csstransforms) {
        manageClasses();
      } else {
        $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 1000);
      }
    }
  }

  /*********************
  ***** MOUSEWHEEL *****
  *********************/
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (!scrolling) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    }
  });

  $(function() {

   $("#about").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 30);
    
      event.preventDefault();

   });

});

  /**************************
  ***** RIGHT NAVIGATION ****
  **************************/

  /* NAV UP/DOWN BTN PAGE NAVIGATION */
  $(document).on("click", ".scroll-btn", function() {
    if ($(this).hasClass("up")) {
      navigateUp();
    } else {
      navigateDown();
    }
  });

  /* NAV CIRCLE DIRECT PAGE BTN */
  $(document).on("click", ".nav-btn:not(.active)", function() {
    if (!scrolling) {
      var target = $(this).attr("data-target");
      if (Modernizr.csstransforms) {
        $wrap.removeClass(function (index, css) {
          return (css.match (/(^|\s)active-page\S+/g) || []).join(' ');
        });
        $wrap.addClass("active-page" + target);
        $navBtn.removeClass("active");
        $(this).addClass("active");
        $navPanel.addClass("invisible");
        currentPage = target;
        scrolling = true;
        setTimeout(function() {
          $navPanel.removeClass("invisible");
          scrolling = false; 
        }, 1000);
      } else {
        $wrap.animate({"top": "-" + ( (target - 1) * 100) + "%"}, 1000);
      }
    }
  });

});

// end one page scroll navigation

// navbar

function openNav() {
  document.getElementById("drawer").style.width = "550px";
}

function closeNav() {
  document.getElementById("drawer").style.width = "0";
}

function myFunction1() {
  var elmnt = document.getElementById("about");
  elmnt.scrollIntoView();
}

function myFunction2() {
  var elmnt = document.getElementById("reviews");
  elmnt.scrollIntoView();
}

// end navbar

// form

function openForm() {
  document.getElementById("myForm").style.display = "block";
  // document.getElementsByClassName("wrapper")[0].style.WebkitFilter = 'blur(6px)';
  // document.getElementsByClassName("wrapper")[0].style.filter = 'blur(6px)';
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  // document.getElementsByClassName("wrapper")[0].style.WebkitFilter = 'blur(0px)';
  // document.getElementsByClassName("wrapper")[0].style.filter = 'blur(0px)';
}

// end form

// disabling vertical scroll on swipe



// end disabling vertical scroll on swipe





