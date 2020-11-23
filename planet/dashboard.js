window.onload = () => {
    const boxEdit = document.querySelectorAll('.dashboard-more__inner');
    const details = document.querySelectorAll('.dashboard-details');
    const close = document.querySelectorAll('.close');

    details.forEach(elem => {
        elem.addEventListener('click', function() {
            if (!this.parentElement.classList.contains('active')) {
                this.parentElement.classList.add('active');
                close.forEach(elem => {
                    elem.addEventListener('click', function () {
                        if (this.closest('.dashboard-more').classList.contains('active')) {
                            this.closest('.dashboard-more').classList.remove('active');
                        }
                    });
                });

            }
            else {
                boxEdit.parentNode.classList.remove('active');
            }

        });
    });

if (window.innerWidth < 768) {
    const menu = document.querySelector('.dashboard-aside-wrap');
    var initialPoint;
    var finalPoint;
    document.addEventListener('touchstart', function(event) {
        event.preventDefault();
        event.stopPropagation();
        initialPoint=event.changedTouches[0];
    }, false);
    document.addEventListener('touchend', function(event) {
        event.preventDefault();
        event.stopPropagation();
        finalPoint=event.changedTouches[0];
        var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
        var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
        if (xAbs > 20 || yAbs > 20) {
            if (xAbs > yAbs) {
                if (finalPoint.pageX < initialPoint.pageX){
                    menu.style.left = '-90vw';
                    menu.style.zIndex = '99';
                    document.body.style.overflow = 'hidden';
                }
                else{
                    menu.style.left = '0';
                    menu.style.zIndex = '2';
                    document.body.style.overflow = 'visible';
                }
            }
            else {
                if (finalPoint.pageY < initialPoint.pageY){
                    /*СВАЙП ВВЕРХ*/}
                else{
                    /*СВАЙП ВНИЗ*/}
            }
        }
    }, false);
}

};




