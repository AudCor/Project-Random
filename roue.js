


var time = 4000;
var scrollDistancePerSecond = 1000; // Scroll 50px every second.
var animation = null;
//Roue tourne automatiquement
function autoScroll(){
    var element = document.getElementById('contentwrapper');
    if (element.scrollTop < element.scrollHeight) {
        animation = window.requestAnimationFrame(autoScroll.bind(null,element));
        element.scrollTop += Math.ceil(scrollDistancePerSecond  / 60);
    }
   
};


const btn = document.getElementById("turn-button");
var contient = document.getElementById("spin-div");

function demarrageRoue2() {
  autoScroll();
  document.location = "#first";
  btn.removeEventListener("click", demarrageRoue2);
    var timout = setTimeout(function accelerer(){
        var internal = setInterval(() => {
            scrollDistancePerSecond = scrollDistancePerSecond + 500;
            if (scrollDistancePerSecond > 10000) {
              contient.style.animationPlayState = "running"
              contient.style.animation = "shake 0.5s infinite";
              if (scrollDistancePerSecond === 20000) {
                  document.location = "#herve";
                 contient.style.animationPlayState = "paused";
                cancelAnimationFrame(animation);
                  clearInterval(internal);
                  scrollDistancePerSecond = 2000;
                  btn.addEventListener("click",demarrageRoue2);
              }
            }
          }, 200);
    }, 1000);  
}

btn.addEventListener("click", demarrageRoue2);


//bouton reinitialiser
const btn2 = document.getElementById("reset-button");
function stopAnimation() {
    cancelAnimationFrame(animation);
    scrollDistancePerSecond = 2000; //on remet la vitesse de depart
    btn.addEventListener("click",demarrageRoue2); //on remet la fonction demarrageRoue sur le bouton Demarrez      
}

btn2.addEventListener("click", () => {
    stopAnimation();
    contient.style.animationPlayState = "paused"; //on stoppe lanimation Shaky  
    location.href = "#first";
});
var doc = window.document,
  context = doc.querySelector('.js-loop'),
  clones = context.querySelectorAll('.is-clone'),
  disableScroll = false,
  scrollHeight = 0,
  scrollPos = 0,
  clonesHeight = 0,
  i = 0;

function getScrollPos () {
  return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
}

function setScrollPos (pos) {
  context.scrollTop = pos;
}

function getClonesHeight () {
  clonesHeight = 0;

  for (i = 0; i < clones.length; i += 1) {
    clonesHeight = clonesHeight + clones[i].offsetHeight;
  }

  return clonesHeight;
}

function reCalc () {
  scrollPos = getScrollPos();
  scrollHeight = context.scrollHeight;
  clonesHeight = getClonesHeight();

  if (scrollPos <= 0) {
    setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
  }
}

function scrollUpdate () {
  if (!disableScroll) {
    scrollPos = getScrollPos();

    if (clonesHeight + scrollPos >= scrollHeight) {
      // Scroll to the top when you’ve reached the bottom
      setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
      disableScroll = true;
    } else if (scrollPos <= 0) {
      // Scroll to the bottom when you reach the top
      setScrollPos(scrollHeight - clonesHeight);
      disableScroll = true;
    }
  }

  if (disableScroll) {
    // Disable scroll-jumping for a short time to avoid flickering
    window.setTimeout(function () {
      disableScroll = false;
    }, 40);
  }
}

function init () {
  reCalc();
  
  context.addEventListener('scroll', function () {
    window.requestAnimationFrame(scrollUpdate);
  }, false);

  window.addEventListener('resize', function () {
    window.requestAnimationFrame(reCalc);
  }, false);
}

if (document.readyState !== 'loading') {
  init()
} else {
  doc.addEventListener('DOMContentLoaded', init, false)
}










