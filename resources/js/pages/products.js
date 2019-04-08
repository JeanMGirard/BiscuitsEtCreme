content_show_delay=600;
content_hide_delay=0;

function empty_content(){
    $(".selector-content").hide();
}
function hide_content(){
    $("#selected-content").css("opacity", "0");
    if(content_hide_delay==0){
        $("#selected-content").hide();
        empty_content();
    }
    else{
        setTimeout(function(){
            $("#selected-content").hide();
            empty_content();
        }, content_hide_delay);
    }
    
}
function show_content(){
    $("#selected-content").show();
    $("#selected-content").css("opacity", "1");
}

$(function() {
    $('.prod-ctg-ttl').each(function () {
        (new CircleType(this)).radius(500)
    }).css("opacity", "1");

    

    empty_content();
    $("#selected-content").hide();
    $("#selected-content").css("z-index", "1");

    $("#unselect-button").click(hide_content);
    $("#selector-1").click(function() {
        $("#selector-1-content").show();
        show_content();
    });
    $("#selector-2").click(function() {
        $("#selector-2-content").show();
        show_content();
    });
    $("#selector-3").click(function() {
        $("#selector-3-content").show();
        show_content();
    });
});