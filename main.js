function signButton() {
    const signSlider = document.querySelector('.sign-slider');
    const bgDark = document.querySelector('.dark-bg');
    signSlider.classList.toggle('slider-active');
    signSlider.classList.toggle('slider-closing');
    bgDark.classList.toggle('dark-bg-active')
}

function loginButton() {
    const logSlider = document.querySelector('.log-slider');
    const bgDark = document.querySelector('.dark-bg');
    logSlider.classList.toggle('slider-active');
    logSlider.classList.toggle('slider-closing');
    bgDark.classList.toggle('dark-bg-active')
} 

function profileButton() {
    const profileSlider = document.querySelector('.profile-slider');
    const bgDark = document.querySelector('.dark-bg');
    profileSlider.classList.toggle('slider-active');
    profileSlider.classList.toggle('slider-closing');
    bgDark.classList.toggle('dark-bg-active')
}
