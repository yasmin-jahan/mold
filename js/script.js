
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

  function MatchHeight() {
  $('.you_content h4').matchHeight();
// $('.resp-tabs-container .resource_tab_card_content h3').matchHeight({ byRow: false });
  // $('.resource_tab_card_content p').matchHeight();
}

// 


});




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

//tab-2
//tab-1
// Initial state

// $(".Resource_tab_content").hide();
// $(".Resource_tab_content:first").show();

// // Desktop tab click
// $(".Resource_tab_ul li a").click(function (e) {
//   e.preventDefault();
//   let activeTab = $(this).data("tab"); // use data-tab

//   if ($(this).hasClass("active")) return;

//   $(".Resource_tab_ul li a").removeClass("active");
//   $(this).addClass("active");

//   $(".Resource_tab_content").hide();
//   $("#" + activeTab).show(); // use show() instead of fadeIn for consistency

//   $(".Resource_tab_drawer_link").removeClass("Resource_d_active");
//   $(".Resource_tab_drawer_link[data-tab='" + activeTab + "']").addClass("Resource_d_active");
// });

// // Mobile accordion click
// $(".Resource_tab_drawer_link").click(function (e) {
//   e.preventDefault();
//   let activeTab = $(this).data("tab");

//   if ($(this).hasClass("Resource_d_active")) {
//     $(this).removeClass("Resource_d_active");
//     $("#" + activeTab).slideUp();
//   } else {
//     $(".Resource_tab_drawer_link").removeClass("Resource_d_active");
//     $(".Resource_tab_content").slideUp();

//     $(this).addClass("Resource_d_active");
//     $("#" + activeTab).slideDown();

//     $(".Resource_tab_ul li a").removeClass("active");
//     $(".Resource_tab_ul li a[data-tab='" + activeTab + "']").addClass("active");
//   }
// });
