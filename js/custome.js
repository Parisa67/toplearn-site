$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    new WOW().init();

    var headerMenu = $("#header-top-menu");
    var middleMenu = $("#header-middle-menu");
    var bottomMenu = $("#header-bottom-menu");

    $("#toggle-header-top").click(function(e) {

        middleMenu.slideUp();
        bottomMenu.slideUp();
        headerMenu.slideToggle();

    });
    $("#toggle-header-middle").click(function(e) {
        bottomMenu.slideUp();
        headerMenu.slideUp();
        middleMenu.slideToggle();

    });

    $("#toggle-header-bottom").click(function(e) {
        headerMenu.slideUp();
        middleMenu.slideUp();
        bottomMenu.slideToggle();

    });

});