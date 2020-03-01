$(document).ready(function() {
  // menu click event
  $(".menu-mobile-icon").click(function() {
    $("#app").toggleClass("menu-expanded");
    // if ($(this).hasClass("act")) {
    //   $(".mainMenu").addClass("act");
    // } else {
    //   $(".mainMenu").removeClass("act");
    // }
  });
});
