$(function() {
    if($(window).scrollTop() > 30) {$("header, #content").addClass("scrolled");}
});

$(function() {
    $("header, #content").addClass("active");

    $(window).on("scroll", function() {



        // Header background effect
        if($(window).scrollTop() > 30) $("header, #content").addClass("scrolled");
        else $("header, #content").removeClass("scrolled");
        // ----------------------------------------------------------------
    });
});