const signSlider = document.querySelector('.sign-slider');
const logSlider = document.querySelector('.log-slider');
const profileSlider = document.querySelector('.profile-slider');
const bgDark = document.querySelector('.dark-bg');
console.log(signSlider);
const bgDarkActivation = () => {
  if (signSlider.classList.contains('slider-closing') && logSlider.classList.contains('slider-closing') && profileSlider.classList.contains('slider-closing'))
    {
      bgDark.classList.remove('dark-bg-active');
    } else
    {
      bgDark.classList.add('dark-bg-active');
    }
}

function signButton() {
  if (logSlider.classList.contains('slider-active'))
  {
    logSlider.classList.replace('slider-active', 'slider-closing');
    // fonction setTimeOut
    signSlider.classList.toggle('slider-active'); // mettre un delay
    signSlider.classList.toggle('slider-closing');
  } else if (profileSlider.classList.contains('slider-active'))
  {
    profileSlider.classList.replace('slider-active', 'slider-closing');
    signSlider.classList.toggle('slider-active');
    signSlider.classList.toggle('slider-closing');
  } else
  {
    signSlider.classList.toggle('slider-active');
    signSlider.classList.toggle('slider-closing'); 
    bgDarkActivation();
  }
}

function loginButton() {
  if (signSlider.classList.contains('slider-active'))
  {
    signSlider.classList.replace('slider-active', 'slider-closing');
    logSlider.classList.toggle('slider-active');
    logSlider.classList.toggle('slider-closing');  
  } else if (profileSlider.classList.contains('slider-active'))
  {
    profileSlider.classList.replace('slider-active', 'slider-closing');
    logSlider.classList.toggle('slider-active');
    logSlider.classList.toggle('slider-closing');  
  } else
  {
    logSlider.classList.toggle('slider-active');
    logSlider.classList.toggle('slider-closing');  
    bgDarkActivation();
  }
}


function profileButton() {
  if (signSlider.classList.contains('slider-active'))
  {
    signSlider.classList.replace('slider-active', 'slider-closing');
    profileSlider.classList.toggle('slider-active');
    profileSlider.classList.toggle('slider-closing');  
    bgDark.classList.remove('dark-bg-active');
  } else if (logSlider.classList.contains('slider-active'))
  {
    logSlider.classList.replace('slider-active', 'slider-closing');
    profileSlider.classList.toggle('slider-active');
    profileSlider.classList.toggle('slider-closing'); 
    bgDark.classList.remove('dark-bg-active'); 
  } else
  { 
  profileSlider.classList.toggle('slider-active');
  profileSlider.classList.toggle('slider-closing');
  bgDark.classList.remove('dark-bg-active');
  } 
}