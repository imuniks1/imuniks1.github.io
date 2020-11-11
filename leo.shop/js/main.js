// let elColor = document.querySelector('.filter__el-color');
//
// elColor.onclick = function () {
//     if (i=0; i<elColor; )
//     elColor.classList.add('active');
// };
$(document).ready(function () {
   $('.header-menu__link').click(function () {
       let el = $(this).parents('.header-menu__el').find('.header-menu-drop');
       if (el.css('display') == 'none'){
           $('.header-menu-drop').slideUp();
           $('.header-menu__link').removeClass('active');
           $(this).addClass('active');
           el.slideDown();
       }
       else {
           el.slideUp();
           $(this).removeClass('active');
       }
   });
    $('.filter__title').click(function () {
        let el = $(this).parents('.filter-box').find('.filter-box_holder');
        if (el.css('display') == 'none'){
            $('.filter__title').removeClass('active');
            $(this).addClass('active');
            el.slideDown();
        }
        else {
            el.slideUp();
            $(this).removeClass('active');
        }
    });
    $('.main-bn-slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $(".filter-box_scroll").mCustomScrollbar({
        theme:"minimal"
    });

    var btn = $('.btn-up');

    $(window).scroll(function() {
        if($(window).scrollTop() > 500) {
            btn.addClass('show');
        }
        else {
            btn.removeClass('show');
        }
    });
    btn.click(function() {
        $('html, body').animate({scrollTop:0}, '300');
    });
});

