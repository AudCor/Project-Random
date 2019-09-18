/*const navBar = document.getElementsByTagName('nav')
const navSlide = () => {
    const logButton = document.getElementById('log-button');
    const logSlider = document.getElementById('log-slider');
    const navLinks = document.querySelectorAll('.nav-links li');

    //active la nav au click
    logButton.addEventListener('click', () => {
        logSlider.classList.toggle('slider-active');
    });
}
navSlide(); */

/* function loginButton() {
    const logSlider = document.querySelector('log-slider');
    logSlider.classList.toggle('slider-active');

} */

function navSlide() {
    const logButton = document.getElementById('log-button');
    const logSlider = document.getElementById('log-slider');

    console.log(logSlider);
    logButton.addEventListener('click', () => {
        logSlider.classList.toggle('slider-active');
    });
}

navSlide();