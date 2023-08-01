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

    // start all carousel's moving
    $('.carousel-container').each(function() {
        setSlickCarousel(this);
    });
    $('.review-carousel-container').each(function() {
        setSlickCarousel(this);
    });

    // video block add background grey
    $(".video-container-with-popup").each(function() {
        $(this).find(".wp-block-image").css("height", getHeightFromDataAttr($(this).attr('data-vimeo-height')));
        var figureHtml = $(this).find(".wp-block-image").html();
        $(this).find(".wp-block-image").html(figureHtml + "<div class='overlay-fade' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5);'></div>");
    });

    // open video modal on click
    $(".video-container-with-popup").click(function() {
        $(this).find(".vimeo-container").css("display", "block");
        var iframe = $(this).find("iframe");
        var player = new Vimeo.Player(iframe);
        player.play();
    });
    $(".vimeo-container").click(function(event) {
        event.stopPropagation();
        var iframe = $(this).find("iframe")[0];
        var player = new Vimeo.Player(iframe);
        player.pause();
        $(this).css("display", "none");
    });

    // autoplay video
    $(".autoplay-video").each(function() {
        $(this).css("height", getHeightFromDataAttr($(this).attr('data-video-height')));
        $(this).find(".wp-block-video video").css("height", getHeightFromDataAttr($(this).attr('data-video-height')));
    });

    // quad button
    $(".quad-image-button-item").each(function() {
        var buttonText = $(this).find(".wp-block-button__link").html();
        $(this).find(".wp-block-button__link").html('<div class="button-text" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:90%;">'+ buttonText +'</div>');
    })
});

function getHeightFromDataAttr(dataAttr){
    switch(dataAttr) {
        case 'full-screen':
            return '100vh';
        case 'ninty-five-percent-height':
            return '95vh';
        case 'three-quarter-height':
            return '75vh';
        case 'half-height':
            return '50vh';
        case 'one-quarter-height':
            return '25vh';
        default:
            return 'auto';
    }
}