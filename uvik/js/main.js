
/* SLIDE UP */
let slideUp = (target, duration=500) => {

    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}

/* SLIDE DOWN */
let slideDown = (target, duration=500) => {

    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
let slideDownFlex = (target, duration=500) => {

    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'flex';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
};
/* TOOGLE */
var slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
};

const q = (selector) => document.querySelector(selector),
    on = 'addEventListener';



if (window.innerWidth > 1366) {
    q('.menu-nav-wrap').classList.add('animation-slide-top—delay-200');
    q('.menu-nav-wrap').classList.add('animation-slide-top');
}
window.addEventListener('click', function (e) {
    if(!q('.menu-nav-wrap').contains(e.target) && !q('.burger').contains(e.target) && window.innerWidth > 1023) {
        document.body.style.overflow = 'visible';
        menu.classList.remove('active');
    }
});
q(".burger-close")[on]('click', function () {
    menu.classList.remove('active');
    document.body.classList.remove('active');
});

document[on]('scroll', function () {
    let headerFix = q('.header');
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop > 10) {
        q(".burger").classList.add('fix');
        headerFix.classList.add('fix');
    }
    else {
        headerFix.classList.remove('fix');
        q(".burger").classList.remove('fix');
    }

});
let menu = q('.menu-nav-wrap');
let burger = q(".burger");
burger[on]('click', function () {
    menu.classList.add('active');
    if (window.innerWidth < 1366) {
        document.body.classList.add('active');
    }

});
let faqQuestion = document.querySelectorAll('.faq__question');
faqQuestion.forEach(function (elem, i) {
    faqQuestion[i][on]('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            slideUp(this.childNodes[3], 500);
        }
        else {
            this.classList.add('active');
            slideDown(this.childNodes[3], 500);
        }

    })
});

faqQuestion.forEach(function (elem, i) {
    window.addEventListener('click', function (e) {
        if(!elem.contains(e.target)) {
            if(elem.classList.contains('active')) {
                elem.classList.remove('active');
                slideUp(elem.childNodes[3], 500);
            }
        }
    });
});

let navLink = document.querySelectorAll('.nav-el__link');

function clearMyDiv(currElem) {
    navLink.forEach(function (elem, i) {
        let dropElem = elem.parentElement.children[1];
        if(elem !== currElem && elem.parentElement.classList.contains('active')) {
            slideUp(dropElem, 500);
            dropElem.classList.remove('active');

            elem.parentElement.classList.remove('active');
        }
    });
}

navLink.forEach(function (elem, i) {
    navLink[i][on]('click', function () {
        let dropElem = elem.parentElement.children[1];

        clearMyDiv(navLink[i]);

        if(elem.parentElement.classList.contains('nav-el-parent')) {
            if(!dropElem.classList.contains('active')) {
                slideDown(dropElem, 500);
                dropElem.classList.add('active');
                elem.parentElement.classList.add('active');
            }
            else {
                slideUp(dropElem, 500);
                dropElem.classList.remove('active');
                elem.parentElement.classList.remove('active');
            }
        }
    })
});

let preferRow = document.querySelectorAll('.prefer-table__row');
let preferCol =  document.querySelectorAll('.prefer-table__col');

preferRow.forEach(function (elem, i) {
    preferRow[i][on]('click', function () {
        if (this.children[0].classList.contains('table__title_mob') && !this.classList.contains('active')) {
            this.classList.add('active');
            slideDownFlex(this.children[1], 300);
            slideDownFlex(this.children[2], 500);
            slideDownFlex(this.children[3], 700);

        }
        else {
            this.classList.remove('active');
            slideUp(this.children[1], 300);
            slideUp(this.children[2], 500);
            slideUp(this.children[3], 700);
        }
    })
});

window.addEventListener('scroll', function () {
    let animationBoxes = document.querySelectorAll('.will-animate');
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    animationBoxes.forEach(function (elem, index) {
        let offset = elem.offsetTop - 300;
        if(scrollTop >= offset && !elem.classList.contains('animate')) {
            elem.classList.add('animate');
        }
    })
});