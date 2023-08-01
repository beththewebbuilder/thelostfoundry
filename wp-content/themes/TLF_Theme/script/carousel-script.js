function setSlickCarousel(carousel) {
    var showArrows = getBooleanValueFromDataAttr($(carousel).attr("data-show-arrows"));
        var autoScroll = getBooleanValueFromDataAttr($(carousel).attr("data-auto-scroll"));
        var imagesToShow = $(carousel).attr("data-images-to-show");
        var autoScrollTime = $(carousel).attr("data-scroll-time");
        var pauseAutoScroll = getBooleanValueFromDataAttr($(carousel).attr("data-pause-scroll"));
        var scrollArrowColour = $(carousel).attr('data-arrow-colour');
        var carouselHeight = getHeightFromDataAttr($(carousel).attr("data-image-size"));

        var slickContainer = $(carousel).find(".slider-content");

        $(slickContainer).find("img").each(function(i, obj) {
            $(obj).css({"height": carouselHeight, "object-fit": "cover"});
        });

        $(slickContainer).slick({
            dots: showArrows,
            infinite: true,
            speed: 300,
            slidesToShow: imagesToShow,
            slidesToScroll: 1,
            autoplay: autoScroll,
            autoplaySpeed: autoScrollTime,
            arrows: showArrows,
            pauseOnHover: pauseAutoScroll,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        $(carousel).find(".slick-prev").css("color", scrollArrowColour).html('<i class="fa-solid fa-chevron-left"></i>');
        $(carousel).find(".slick-next").css("color", scrollArrowColour).html('<i class="fa-solid fa-chevron-right"></i>');
}

function getBooleanValueFromDataAttr(dataAttr)
{
    if(dataAttr === 'true') {
        return true;
    }
    return false;
}