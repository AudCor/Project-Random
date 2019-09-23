const signSlider = document.querySelector('.sign-slider');
const logSlider = document.querySelector('.log-slider');
const profileSlider = document.querySelector('.profile-slider');
console.log(signSlider);

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
  }
}


function profileButton() {
  if (signSlider.classList.contains('slider-active'))
  {
    signSlider.classList.replace('slider-active', 'slider-closing');
    profileSlider.classList.toggle('slider-active');
    profileSlider.classList.toggle('slider-closing');  
  } else if (logSlider.classList.contains('slider-active'))
  {
    logSlider.classList.replace('slider-active', 'slider-closing');
    profileSlider.classList.toggle('slider-active');
    profileSlider.classList.toggle('slider-closing');  
  } else
  { 
  profileSlider.classList.toggle('slider-active');
  profileSlider.classList.toggle('slider-closing');
  } 
}

// function chooseResult() {
//     const nameDiv = document.querySelectorAll('.all-divs');
//     let addingTime = 0;
//     switch () {
//         case nameDiv[0]:
            
//             break;
    
//         default:
//             break;
//     }
// }