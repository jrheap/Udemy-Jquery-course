$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").fadeTo(2000, 0.5);
  // $(".blue-box").hide();
  // $(".blue-box").slideToggle(2000)
  // $("p").hide();
  // $("p").slideDown(1000)
  // $(".green-box").fadeToggle();
  // $(".green-box").fadeToggle();



  // ===== Custom functions  =====

  $(".blue-box").animate({
    "margin-left": "+=200px",
  }, 1000, "linear")
  
  $(".blue-box").animate({
    "margin-left": "-=200px",
  }, 1000, "linear")
});