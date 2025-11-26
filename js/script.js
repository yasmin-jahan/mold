
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 600,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  breakpoints: {
  320: {   // ≥320px
    slidesPerView: 1,
    spaceBetween: 30,
  },
  575: {   // ≥575px
    slidesPerView: 2,
    spaceBetween: 30,
  },
  991: {   // ≥991px
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1420: {  // ≥1420px
    slidesPerView: 4,
    spaceBetween: 30,
  }
},
  });

//   function MatchHeight() {
//   $('.you_content h4').matchHeight();
// // $('.resp-tabs-container .resource_tab_card_content h3').matchHeight({ byRow: false });
//   // $('.resource_tab_card_content p').matchHeight();
// }

//MatchHeight for slider 
 function MatchHeight() {
    $('.you_content h4').matchHeight({});
  }
  MatchHeight();


});

//MatchHeight for resource tab
  function MatchHeight() {
    $('.resource_tab_card_content h3').matchHeight();
  }
  MatchHeight();




  //scroll_header
  window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 30) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

//tab-1
$(".tab_content").hide();
$(".tab_content:first").show();

// Desktop tab click
$("ul.tabs li a").click(function (e) {
  e.preventDefault();
  let activeTab = $(this).attr("rel");

  if ($(this).hasClass("active")) return; // Prevent re-click in desktop mode

  $("ul.tabs li a").removeClass("active");
  $(this).addClass("active");

  $(".tab_content").hide();
  $("#" + activeTab).fadeIn();

  $(".tab_drawer_link").removeClass("d_active");
  $(".tab_drawer_link[rel='" + activeTab + "']").addClass("d_active");
});

// Mobile accordion click
$(".tab_drawer_link").click(function (e) {
  e.preventDefault();
  let activeTab = $(this).attr("rel");

  if ($(this).hasClass("d_active")) {
    $(this).removeClass("d_active");
    $("#" + activeTab).slideUp();
  } else {
    $(".tab_drawer_link").removeClass("d_active");
    $(".tab_content").slideUp();

    $(this).addClass("d_active");
    $("#" + activeTab).slideDown();

    $("ul.tabs li a").removeClass("active");
    $("ul.tabs li a[rel='" + activeTab + "']").addClass("active");
  }
});



    //menu
    // Hamburger button click
    document.querySelector(".hamburger_menu").addEventListener("click", () => {
  document.querySelector(".header_main_nav").classList.add("header_mobile_nav_active");
  document.querySelector(".black_overlay").style.display = "block"; // replaces fadeIn
});

// Close button click
document.querySelector(".close_btn").addEventListener("click", () => {
document.querySelector(".header_main_nav").classList.remove("header_mobile_nav_active");
document.querySelector(".black_overlay").style.display = "none";
});

// Black overlay click
document.querySelector(".black_overlay").addEventListener("click", () => {
document.querySelector(".header_main_nav").classList.remove("header_mobile_nav_active");
document.querySelector(".black_overlay").style.display = "none";
});



// $(document).ready(function () {
//   $(".Resource_tab_section").each(function () {
//     var $section = $(this);

//     // Desktop tabs
//     $section.find(".Resource_tab-link").click(function (e) {
//       e.preventDefault();
//       var target = $(this).attr("href");

//       $section.find(".Resource_tab-link").removeClass("active");
//       $(this).addClass("active");

//       $section.find(".Resource_tab-content").removeClass("active");
//       $section.find(target).addClass("active");
//     });

//     // Mobile accordion
//     $section.find(".Resource_accordion-link").click(function (e) {
//       e.preventDefault();
//       var target = $(this).attr("href");

//       if ($(this).hasClass("active")) {
//         $(this).removeClass("active");
//         $section.find(target).removeClass("active");
//       } else {
//         $section.find(".Resource_accordion-link").removeClass("active");
//         $section.find(".Resource_accordion-content").removeClass("active");

//         $(this).addClass("active");
//         $section.find(target).addClass("active");
//       }
//     });
//   });
// });



$(document).ready(function () {
  $(".Resource_tab_section").each(function () {
    var $section = $(this);

    // ✅ Initialize icons based on active state
    $section.find(".Resource_accordion-link").each(function () {
      if ($(this).hasClass("active")) {
        $(this).find(".icon").removeClass("fa-plus").addClass("fa-minus");
      } else {
        $(this).find(".icon").removeClass("fa-minus").addClass("fa-plus");
      }
    });

    // Desktop tabs
    $section.find(".Resource_tab-link").click(function (e) {
      e.preventDefault();
      var target = $(this).attr("href");

      $section.find(".Resource_tab-link").removeClass("active");
      $(this).addClass("active");

      $section.find(".Resource_tab-content").removeClass("active");
      $section.find(target).addClass("active");
    });

    // Mobile accordion
    $section.find(".Resource_accordion-link").click(function (e) {
      e.preventDefault();
      var target = $(this).attr("href");

      if ($(this).hasClass("active")) {
        // Close the active accordion
        $(this).removeClass("active")
               .find(".icon").removeClass("fa-minus").addClass("fa-plus");
        $section.find(target).removeClass("active");
      } else {
        // Reset all
        $section.find(".Resource_accordion-link")
                .removeClass("active")
                .find(".icon").removeClass("fa-minus").addClass("fa-plus");

        $section.find(".Resource_accordion-content").removeClass("active");

        // Open this one
        $(this).addClass("active")
               .find(".icon").removeClass("fa-plus").addClass("fa-minus");
        $section.find(target).addClass("active");
      }
    });
  });
});
