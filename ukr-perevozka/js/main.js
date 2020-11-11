var map;
function initMap() {
    'use strict';
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: new google.maps.LatLng(50.4167545,30.6337594),
        mapTypeId: 'roadmap',
        styles: [{
            stylers: [{
                saturation: 0
            }]
        }]
    });
    var icon = {
        url: 'images/marker.png',
        scaledSize: new google.maps.Size(40, 40),
    };
    var features = [{
        position: new google.maps.LatLng(50.4167545,30.6337594),
        type: 'icon'
    }];
    features.forEach(function (feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icon,
            map: map
        });
    });
}

let number = document.querySelectorAll('.progress-bar__el-figure');
let scrollFromTop = document.querySelectorAll('.progress-bar__el-figure')[0].getBoundingClientRect().top -500;
let animationStarted = 0;
window.addEventListener('scroll', function () {
    if(window.pageYOffset >= scrollFromTop && animationStarted === 0) {
        starCounter();
        animationStarted++;
    }
});
function starCounter() {
    number.forEach(function (elem, index) {
        let counter = 0;
        let speed;
        if(index === 2) {
            counter = 700;
            speed = 1;
        }
        else if(index === 0) {
            speed = 120;
        }

        else if (index === 1){
            speed = 200;
        }
        else if(index === 3) {
            speed = 70;
        }
        var countdownTimer = function() {
            intervalID = setInterval(countdown, speed);
        };
        var countdown = function() {
            if (parseInt(elem.innerHTML) < elem.dataset.to) {
                elem.innerHTML = counter++;
            } else {
                if (intervalID) {
                    clearInterval(intervalID);
                }
            }
        };
        countdownTimer();
    });
}
let btnModal = document.querySelectorAll('.btn-modal');
let modal = document.querySelector('.pop-up');
let modalClose = document.querySelector('.pop-up__close');
    btnModal.forEach(function (elem, i) {
        btnModal[i].addEventListener('click', function () {
            if(getComputedStyle(modal, null).display === 'none') {
                modal.style.display = 'block';
                document.body.style.overflow = "hidden";
                setTimeout(function () {
                    modal.classList.add('active');
                }, 100);
            }
        })
    });
modalClose.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'none';
    modal.classList.remove('active');
    document.body.style.overflow = "visible";
});
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-right');
burger.addEventListener('click', function () {
    if(getComputedStyle(menu, null).display === 'none') {
        menu.style.display = 'block';
        setTimeout(function () {
            menu.classList.add('active');
        }, 100)
    } else {
        menu.style.display = 'none';
        menu.classList.remove('active');
    }
});