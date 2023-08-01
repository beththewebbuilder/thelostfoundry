$(document).ready(function() {

    // navigation
    $(".mobile-nav-icon").click(function() {
        $(".mobile-nav-page").css("margin-top", "-100vh");
        $(".mobile-nav-page").show();
        $(".mobile-nav-page").animate({
            'marginTop': "+=100vh"
        });
    });
    $(".close-nav").click(function() {
        $(this).parent(".mobile-nav-page").animate({
            'marginTop': "-=100vh"
        });
    });
});