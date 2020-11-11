$(document).ready(function () {
    // anchor link
    $(".anchor").click(function( event ) {
        event.preventDefault();
        if($(document).width() >= 1440) {
            $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 90  }, 1000);
        }
        else {
            let headerHeight = $('.header').innerHeight() - 5;
            $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - headerHeight  }, 1000);
        }
    });
    $('.show-menu').click(function (e) {
        e.preventDefault();
        if($('.header-nav').css('display') == 'none') {
            $('.header-nav').slideDown();
            $(this).addClass('active');
        }
        else {
            $('.header-nav').slideUp();
            $(this).removeClass('active');
        }
    });
    $(".lang-block").click(function () {
        if($('.inner-lang').css('display') == 'none') {
            $('.inner-lang').show();
            $('.lang').addClass('active');
        }
        else {
            $('.inner-lang').hide();
            $('.lang').removeClass('active');
        }
    });
    let modal = $(".modal");
    let regModal = $(".register-modal");
    $(".show-reg").click(function (e) {
        e.preventDefault();
        if (regModal.css("display") == "none") {
            regModal.fadeIn();
            regModal.addClass("active");
            $('body').css({'overflow':'hidden', "padding-right":"15px"});
        }
    });
    $(".modal-close").click(function (e) {
        e.preventDefault();
        if (modal.css("display") == "block") {
            modal.fadeOut();
            modal.removeClass("active");
            $('body').css({'overflow':'visible', "padding-right":"0"});
        }
    });
    if($('.reviews-content').length) {
        let slickState = {
            infinite: true,
            arrow: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            centerMode: true,
            centerPadding: "48px",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        $(window).on( "orientationchange, resize", function( event ) {
            setTimeout(function () {
                if($(window).width() < 767.98) {
                    if(!$('.reviews-content .row').hasClass('slick-initialized')) {
                        $('.reviews-content .row').slick(slickState);
                    }
                }
                else {
                    if($('.reviews-content .row').hasClass('slick-initialized')) {
                        $('.reviews-content .row').slick("unslick");
                    }
                }
            }, 300);
        });
        if($(window).width() < 767.98) {
            $('.reviews-content .row').slick(slickState);
        }
    }
    /* tabs */
    $('.tabs-nav li').click(function() {
        var el = '.parent';
        var current = $(this).data('tab');
        if (!$(this).hasClass('selected')) {
            $(this).parents('.tabs-holder').find('.tabs-nav li').removeClass('selected');
            $(this).addClass('selected');
            $(this).parents('.tabs-holder').find('div.parent').slideUp('');
            $(".tabs-holder").find(el+"[data-tab='" + current + "']").slideDown('');
        }
    });
});