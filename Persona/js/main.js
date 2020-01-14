$(document).ready(function () {
    /* fixed menu */
    var $nav = $('.nav-head');
    var posTop = $nav.position().top;
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        if (y > posTop) { $nav.addClass('fixed'); }
        else { $nav.removeClass('fixed'); }
    });
    /* end fixed menu */
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    });
    $('.user-phone').each(function(){
      $(this).mask("+9 ( 999 ) 999 - 99 - 99");
    });
    $('.recall-bt').click(function(event){
        event.preventDefault();
        $('body').append('<div class="shadow"></div>'); 
        var box = $('.recall-box').stop(true, true).fadeToggle('slow', 'linear');
        box.show();
        box.css("left", (($(window).width() - box.outerWidth()) / 2) + $(window).scrollLeft() + "px");
        box.css("top", (($(window).height() - box.outerHeight()) / 2) + $(window).scrollTop() + "px");
	});
    $('.close-form').click(function(event){
        event.preventDefault();
        $('.recall-box').fadeOut('slow', 'linear');
		$('.shadow').remove();
	});
    $('.show-map').click(function(event){
        event.preventDefault();
        $('body').append('<div class="shadow"></div>'); 
        var box = $('.map').stop(true, true).fadeToggle('slow', 'linear');
        box.show();
        box.css("left", (($(window).width() - box.outerWidth()) / 2) + $(window).scrollLeft() + "px");
        box.css("top", (($(window).height() - box.outerHeight()) / 2) + $(window).scrollTop() + "px");
	});
    $('.close-form').click(function(event){
        event.preventDefault();
        $('.map').fadeOut('slow', 'linear');
		$('.shadow').remove();
	});
    // scroll body to 0px on click
    $('.footer-logo').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $(".anchor").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top-0;
        $("body,html").animate({scrollTop: destination }, 800);
    });

    //проверяем валидность когда нажимается конпка
    $("form").submit(function() {
        var error = $(this).find('input').hasClass('error');
        if( !error ) {
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: th.serialize(),
            }).done(function() {
                $('.recall-box').fadeOut();
                $('.modal-thanks').removeClass('hidden');

                setTimeout(function() {
                    th.trigger("reset");
                }, 1000);

                setTimeout(function() {
                    $('.shadow').remove();
                    $('.modal-thanks').addClass('hidden');
                }, 3000);
            });
            return false;
        }
	});
});