const signSlider = document.querySelector('.sign-slider'); // sélectionne les éléments ayant la classe "sign-slider"
const logSlider = document.querySelector('.log-slider'); // sélectionne les éléments ayant la classe "log-slider"
const profileSlider = document.querySelector('.profile-slider'); // sélectionne les éléments ayant la classe "profile-slider"
const bgDark = document.querySelector('.dark-bg'); // sélectionne les éléments ayant la classe "dark-bg"


// fonction pour mettre un fond sombre sur la page
const bgDarkActivation = () => {
  if (signSlider.classList.contains('slider-closing') && logSlider.classList.contains('slider-closing') && profileSlider.classList.contains('slider-closing'))
    {
      bgDark.classList.remove('dark-bg-active');
    } else
    {
      bgDark.classList.add('dark-bg-active');
    }
}

// fonction pour enlever le fond sombre sur la page
const bgDarkAway = () => {
  if (bgDark.classList.contains('dark-bg-active'))
  {
    bgDark.classList.remove('dark-bg-active');
    logSlider.classList.replace('slider-active', 'slider-closing');
    signSlider.classList.replace('slider-active', 'slider-closing');
  }
}

// fonction appelée quand on clique sur le bouton "Inscription"
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

// fonction appelée quand on clique sur le bouton "Connexion"
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

// fonction appelée quand on clique sur le bouton "Profil"
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