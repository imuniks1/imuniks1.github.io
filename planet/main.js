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
};

var slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
};

let menuEl1 = document.querySelectorAll('.menu-section-list-el__txt');
let menuElPar = document.querySelectorAll('.menu-section-list-el');
let menus = document.querySelectorAll('.menu-standard');
let questions = document.querySelector('.wrap-questions');
menuEl1.forEach(function (elem, i) {
    menuEl1[i].addEventListener('click', function () {
        if (this.parentElement.querySelector('.menu-standard')) {
            if(!this.classList.contains('active')) {
                menus.forEach(function (el,index) {
                    el.classList.remove('active');
                });
                menuEl1.forEach(function (el,index) {
                    el.classList.remove('active');
                });
                menuElPar.forEach(function (el,index) {
                    el.classList.remove('active');
                });

                this.classList.add('active');
                this.parentElement.classList.add('active');
                this.parentElement.querySelector('.menu-standard').classList.add('active');

                menus.forEach(function (elem, index) {
                    if(menus[i].classList.contains('active')) {
                        questions.style.width = "calc(100% - 660px)";
                        questions.style.transform = "translateX(330px)";
                    }
                });
            }
            else {
                questions.style.width = "calc(100% - 330px)";
                questions.style.transform = "translateX(0)";
                this.classList.remove('active');
                this.parentElement.classList.remove('active');
                this.parentElement.querySelector('.menu-standard').classList.remove('active');
            }
        }

    });
});

let menuStandardTxt = document.querySelectorAll('.menu-standard-el__txt');
let menuStandardEl = document.querySelectorAll('.menu-standard-el');
let menuSpecification = document.querySelectorAll('.menu-specification');
menuStandardTxt.forEach(function (elem, i) {
    menuStandardTxt[i].addEventListener('click', function () {
        if (this.parentElement.querySelector('.menu-specification')) {
            if (!this.classList.contains('active')) {
                menuSpecification.forEach(function (el, index) {
                    el.classList.remove('active');
                });
                menuStandardEl.forEach(function (el, index) {
                    el.classList.remove('active');
                });
                menuStandardTxt.forEach(function (el, index) {
                   el.classList.remove('active');
                });

                this.classList.add('active');
                this.parentElement.classList.add('active');
                this.parentElement.querySelector('.menu-specification').classList.add('active');
            }
            else {
                this.classList.remove('active');
                this.parentElement.classList.remove('active');
                this.parentElement.querySelector('.menu-specification').classList.remove('active');
            }
        }
    });
});
let linkQuestion = document.querySelectorAll('.menu-specification-el');
linkQuestion.forEach(function (elem, i) {
    linkQuestion[i].addEventListener('click', function () {
        if (!this.classList.contains('active')) {
            linkQuestion.forEach(function (el, index) {
               el.classList.remove('active');
            });
            this.classList.add('active');
        }
        else {
            this.classList.remove('active');
        }
    });
});

// const questionOptions = document.querySelectorAll('.box-quiz input[type="radio"]');
// questionOptions.forEach((radio) => {
//     radio.addEventListener('change', (event) => {
//         (async() => {
//             const rawResponse = await fetch('/answer', {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json; charset=utf-8'
//                 },
//                 body: JSON.stringify({
//                     question: 1, // event.target.name,
//                     answer: 1, // event.target.id,
//                 })
//             });
//             return await rawResponse.json();
//         })()
//             .then(data => {
//                 console.log('data', data)
//             })
//             .then(error => {
//                 if (error) {
//                     console.error('error', error)
//                 }
//             });
//     });
// });

let inputQuiz = document.querySelectorAll('.box-quiz__input');

inputQuiz.forEach(function (elem, i) {
    inputQuiz[i].addEventListener('change', function () {
        this.closest('.box-question__content').classList.add('active');
    });
});