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
        $(this).find(".wp-block-image").css("height", getHeightFromDataAttr($(this).attr('data-video-height')));
        $(this).css("height", getHeightFromDataAttr($(this).attr('data-video-height')));
        var figureHtml = $(this).find(".wp-block-image").html();
        $(this).find(".wp-block-image").html(figureHtml + "<div class='overlay-fade' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5);'></div>");
    });

    // open video modal on click
    $(".video-container-with-popup").click(function() {
        $(this).find(".video-container").css("display", "block");
    });
    $(".video-container").click(function(event) {
        event.stopPropagation();
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
    });

    // image background container
    $(".image-background").each(function() {
        $(this).find(".wp-block-image").css("height", getHeightFromDataAttr($(this).attr("data-container-height")));
    });

    // accordion modal
    $(".accordion .close-modal").click(function() {
        $(this).parents(".accordion-collapse").removeClass("show");
    });

    $(".accordion-button").click(function() {
        var collapseContainer = $(this).attr('data-bs-target');
        $(collapseContainer).find(".slick-slider")[0].slick.refresh();
    })

    // popup
    sleep(2000).then(() => {
        let popupCookie = getCookie("popup");
        if(popupCookie != "hide") {
            $(".popup-message").slideDown();
        }
    });
    $("#mc-embedded-subscribe").click(function() {
        setCookie("popup", "hide", 30);
    });
    $(".close-popup").click(function() {
        $(".popup-message").slideUp();
    });
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}