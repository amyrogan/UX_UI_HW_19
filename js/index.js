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




