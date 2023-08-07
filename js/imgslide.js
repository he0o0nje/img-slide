window.onload = function () {
    const imgslide = document.querySelector('.imgslide');
    const slider = imgslide.querySelector('.slider');
    const slideli = slider.querySelectorAll('li');
    const controller = imgslide.querySelector('.controller');

    const liWidth = slideli[0].clientWidth;
    const sliderwidth = liWidth * slideli.length;
    slider.style.width = `${sliderwidth}px`;

    let currentIdx = 0;
    let translate = 0;
    controller.addEventListener('click', moveSlide);

    function moveSlide(event) {
        event.preventDefault();
        if (event.target.className === 'next') {
            if (currentIdx !== slideli.length - 1) {
                translate -= liWidth;
                slider.style.transform = `translateX(${translate}px)`;
                currentIdx += 1;
            }
        } else if (event.target.className === 'prev') {
            if (currentIdx !== 0) {
                translate += liWidth;
                slider.style.transform = `translateX(${translate}px)`;
                currentIdx -= 1;
            }
        }
    }
};
