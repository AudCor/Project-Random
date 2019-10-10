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
const bgDarkAway = () => {
  if (bgDark.classList.contains('dark-bg-active'))
  {
    bgDark.classList.remove('dark-bg-active');
    logSlider.classList.replace('slider-active', 'slider-closing');
    signSlider.classList.replace('slider-active', 'slider-closing');
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
    bgDarkActivation();
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
    bgDarkActivation();
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


//  Pour faire en sorte que les slider se retirent aussi quand on 
// clique en dehors : attacher un envenement sur le click du body ou main
// et appeler les fonctions de toggle des sliders sous condition que les volets 
// sont apparents


/*
créer une fonction qui a une durée d'exéc égale à la durée de l'effet slide
*/

/* ----- Pour le volet de création de liste ----- */
const createNewList = () => {
  const newList = '<li class="new-list">Liste test</li>';
  let lists = document.getElementById('lists-of-lists').innerHTML;

}