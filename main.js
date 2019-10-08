const signSlider = document.querySelector('.sign-slider'); // sélectionne les éléments ayant la classe "sign-slider"
const logSlider = document.querySelector('.log-slider'); // sélectionne les éléments ayant la classe "log-slider"
const profileSlider = document.querySelector('.profile-slider'); // sélectionne les éléments ayant la classe "profile-slider"
const bgDark = document.querySelector('.dark-bg'); // sélectionne les éléments ayant la classe "dark-bg"
console.log(signSlider);

// fonction pour mettre un fond sombre sur la page
const bgDarkActivation = () => {
  if (profileSlider.classList.contains('slider-closing'))
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
    profileSlider.classList.replace('slider-active', 'slider-closing');
  }
}


// fonction appelée quand on clique sur le bouton "Profil"
function profileButton() {
  profileSlider.classList.toggle('slider-active');
  profileSlider.classList.toggle('slider-closing');
  bgDark.classList.toggle('dark-bg-active');
}