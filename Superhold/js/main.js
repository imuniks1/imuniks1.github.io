$(document).ready(function () {
    $('.nav li a.drop-first').click(function(e){
        e.preventDefault();
        if ($(this).parents('li').find('.dropdown-menu').css('display') == 'none'){
        $('.dropdown-menu').hide();
        $(this).parents('li').find('.dropdown-menu').stop(true, true) .delay(100) .fadeIn('10');
        $(this).parents('li').addClass('active');
        }
        else {
        $(this).parents('li').removeClass('active');
        $(this).parents('li').find('.dropdown-menu').stop(true, true ) .fadeOut('10');
        }
    })
    $('.dropdown-menu li a.drop-bt').click(function(e){
        e.preventDefault();
        if ($(this).parents('li').find('.dropdown-menu-inner').css('display') == 'none'){
        $('.inner-drop').hide();
        $(this).parents('li').find('.dropdown-menu-inner').stop(true, true) .delay(100) .fadeIn('10');
        $(this).parents('li').addClass('active');
        }
        else {
        $(this).parents('.dropdown-menu li').removeClass('active');
        $(this).parents('.dropdown-menu li').find('.dropdown-menu-inner').stop(true, true) .fadeOut('10');
        }
    })
    $('.user-phone').each(function(){
      $(this).mask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");
    });
});