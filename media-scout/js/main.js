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
});

