$(document).ready();
$(".navBox").hide();

$(".glyphicon-menu-hamburger").click(function(){
    $(".navBox").slideToggle();
    $(".page").toggle();
});


$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});