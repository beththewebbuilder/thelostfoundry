$(document).ready(function() {

    // navigation
    $(".close-nav").click(function() {
        $(this).parent(".mobile-nav-page").animate({
            'marginTop': "-=100vh"
        });
    });
});