$(document).ready(function () {
    $('.header-search__label').on('click', function (e) {
        e.preventDefault();
        $('.header-search__input').toggleClass('show');
        $('.navigation').fadeToggle();
    });

    let modal = $('.pop-up');
    $('.btn-modal').on('click', function (e) {
        e.preventDefault();
        modal.slideDown();
        modal.css('background', 'rgba(0, 0, 0, 0.6)');
        $('body').css('overflow', 'hidden');
        $(document).mouseup(function (e){
            let content = $(".pop-up__content");
            if (!content.is(e.target)
                && content.has(e.target).length === 0) {
                $('body').css('overflow', 'visible');
                modal.slideUp();
            }
        });
    });

    $('.pop-up__close').on('click', function () {
        $('.pop-up').slideUp();
        $('body').css('overflow', 'visible');
    });

    $('.burger').click(function () {
        $('.header .menu-nav').slideToggle();
        $('.header').toggleClass('active');
    })
});
