
    let btnLang = document.querySelector(".btn-nav-lang");
    let btnCurrency = document.querySelector(".btn-nav-currency");
    let blockLang = document.querySelector(".block-inner-lang");
    let blockCurrency = document.querySelector(".block-inner-currency");

    btnLang.onclick = function () {
        if (blockLang.style.display == "block") {
            blockLang.style.display = "none";
            document.querySelector(".img-arrow-lang").style.transform = "rotate(0deg)";
        }
        else {
            blockLang.style.display = "block";
            document.querySelector(".img-arrow-lang").style.transform = "rotate(180deg)";
        }

    };
    btnCurrency.onclick = function () {
        if (blockCurrency.style.display == "block") {
            blockCurrency.style.display = "none";
            document.querySelector(".img-arrow-currency").style.transform = "rotate(0deg)";
        }
        else {
            blockCurrency.style.display = "block";
            document.querySelector(".img-arrow-currency").style.transform = "rotate(180deg)";
        }
    };
    let btnBasket = document.querySelectorAll('.basket-product');
    for (let i=0; i<btnBasket.length; i++){
        let counter = 1;
        btnBasket[i].onclick = function () {
            btnBasket[i].style.transform = `rotate(${360*counter}deg)`;
            counter++;
        };
    }



    var yourDateToGo = new Date("Feb 15, 2020 15:37:25");


    var timing = setInterval(
        function () {

            var currentDate = new Date().getTime();
            var timeLeft = yourDateToGo - currentDate;

            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            if (days < 10) days="0"+days;
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            if (hours < 10) hours="0"+hours;
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            if (minutes < 10) minutes="0"+minutes;
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            if (seconds < 10) seconds="0"+seconds;

            document.getElementById("countdown").innerHTML = '<div class="countdown-col">' + days + '<span class="countdown-box">days</span>' + "</div>" + " : " +'<div class="countdown-col">' + hours + '<span class="countdown-box">hrs</span>' + "</div>" + " : " +'<div class="countdown-col">' + minutes + '<span class="countdown-box">min</span>' + "</div>" + " : " +'<div class="countdown-col">' + seconds + '<span class="countdown-box">sec</span>' + "</div>";

            if (timeLeft <= 0) {
                clearInterval(timing);
                document.getElementById("countdown").innerHTML = "It's over";
            }
        }, 1000);

