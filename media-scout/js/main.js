$(document).ready(function() {
    $('.burger').click(function () {
        if (!$('.header-nav').hasClass('active')) {
            $('.header-nav').addClass('active');
            $('body').css('overflow', 'hidden');
        }
        else {
            $('.header-nav').removeClass('active');
            $('body').css('overflow', 'visible');
        }
    });
    $(window).on('scroll', function () {
        let animate = $('.will-animate');
        animate.each(function (elem) {
            let offset = $(this).offset().top - 600;
            let scroll = $(window).scrollTop();
            if(scroll > offset) {
                $(this).addClass('animate');
            }
        })
    })
});

