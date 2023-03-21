console.log("Your index.js file is loaded correctly!");

$(".burger").on("click", function() {
    console.log("you clicked on hamburger!");
});


$(".burger").on("click", function() {
    $(".dropDown").fadeToggle("400");
});


$(".burger").change (function() {
    $(".burger").change(".close");
});


$(".close").on("click", function() {
    $(".dropDown").fadeToggle("200");
});



  $(document).on("click", ".burger", function(){
    $(this).toggleClass("burger");
    if ($(this).hasClass("burger")) {
      $(this).find("div").removeClass("burger");
      $(this).find("closeNav").addClass("close");
    }
    else {
      $(this).find("div").addClass("close");
    }
  });