$(document).ready(function(){

    $('.burger').click(function () {
        $('.header_r').toggleClass('active')
    });

    if($('.clients').length) {
        let slickState = {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            arrows: false,
            dots: true,
            infinite: true,
            adaptiveHeight: true,
            autoplaySpeed: 4000,
            vertical: true,
            pauseOnFocus: true,
            responsive: [
                {
                    breakpoint: 767.98,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]

        };
        $(window).on("orientationchange, resize", function (event) {
            initializeSlider();
        });
        function initializeSlider() {
            setTimeout(function () {
                if ($(window).width() < 767.98) {
                    if (!$('.clients .section-content').hasClass('slick-initialized')) {
                        $('.clients .section-content').slick(slickState);
                    }
                } else {
                    if ($('.clients .section-content').hasClass('slick-initialized')) {
                        $('.clients .section-content').slick("unslick");
                    }
                }
            }, 300);
            if ($(window).width() < 767.98) {
                $('.clients .section-content').slick(slickState);
            }
        }
        initializeSlider();
    }

    // aside

    $('.box-info').each(function () {
        if($(this).find('h2').length) {
            let point = $(this).find('h2').text();
            let pointId = $(this).find('h2').attr('id');
            let createElem = $("<li class='aside-list__el'></li>").html("<a href='#" + pointId +"'>"+ point +"</a>");
            $('.aside-list').append(createElem);

            if($(this).find('h3').length) {
                let subList = $('<ol class="aside-list-inner"></ol>');
                for(i=0;i<$(this).find('h3').length;i++) {
                    let point = $(this).find('h3').eq(i).text();
                    let pointId = $(this).find('h3').eq(i).attr('id');
                    let createElem = $("<li class='aside-list__el'></li>").html("<a href='#" + pointId +"'>"+ point +"</a>");
                    subList.append(createElem)
                }
                createElem.append(subList);
            }
        }
    });


    $('a[href^="#"]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - -10
        }, 800);
        e.preventDefault();
    });
});

