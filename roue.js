


var time = 4000;
var scrollDistancePerSecond = 1000; // Scroll 50px every second.
var animation = null;
var doNotTurn = false;
var internal = null;
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
  doNotTurn = false;
  autoScroll();
  document.location = "#choice0"; // remet la roue à zéro, sur la première div de la roue
  btn.removeEventListener("click", demarrageRoue2); // empêche clic sur bouton démarrer quand la roue est en train de tourner
    var timout = setTimeout(function accelerer(){
        // fonction setInterval() : toutes les 1000 millisecondes (valeur déterminée ds setTimeOut()), on accélère de 200
        internal = setInterval(() => {
            if (doNotTurn) {
                doNotTurn = false;
                clearInterval(internal);
                return;
            };
            scrollDistancePerSecond = scrollDistancePerSecond + 500;
            // si l'anomatin a vraiment beaucoup accéléré (sup à 10000), on lui rajoute une animation :
            if (scrollDistancePerSecond > 10000) {
              contient.style.animationPlayState = "running"
              contient.style.animation = "shake 0.5s infinite";
              if (scrollDistancePerSecond === 20000) {
                  console.log(choixFinal);
                  document.location = choixFinal;
                 contient.style.animationPlayState = "paused";
                 // arrête l'animation "animation"
                cancelAnimationFrame(animation);
                  clearInterval(internal);
                  scrollDistancePerSecond = 2000;
                  /* btn.addEventListener("click",demarrageRoue2); */
                  clearTimeout(timout);
                  btn.disabled = false;
                  return;
              }
            }
          }, 200);
    }, 1000);  
}

var noms = [];
var rand = null;
var choix = null;
var choixFinal = null;
// bouton demarrez
btn.addEventListener("click", () =>{
  noms = [];
  demarrageRoue2();
  addNameOnArray();
  randomn(noms);
  btn.disabled = true;
});


//bouton reinitialiser
const btn2 = document.getElementById("reset-button");
function stopAnimation() {
    doNotTurn = true;
    cancelAnimationFrame(animation);
    scrollDistancePerSecond = 2000; //on remet la vitesse de depart
    btn.addEventListener("click",demarrageRoue2); //on remet la fonction demarrageRoue sur le bouton Demarrez    
}

btn2.addEventListener("click", () => {
    stopAnimation();
    location.href = "#choice0";
    contient.style.animationPlayState = "paused";
    deleteTextInput();
    noms = [];
    btn.disabled = false;

});
//lutilisateur peut tourner la roue des 2 sens
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


// fonction qui remet les inputs de la roue à zero
var elements = document.getElementsByClassName("inputWheelTotal");
function deleteTextInput() {
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.placeholder = "Input your name here";
        element.value = "";     
    }
}

//fonction qui copie les 2 premiers inputs dans les 2 clones et inversement
var input0 = document.getElementById("input0");
var input1 = document.getElementById("input1");
var inputclone0 = document.getElementById("inputclone0");
var inputclone1 = document.getElementById("inputclone1");
input0.addEventListener('input', function (evt) {
     inputclone0.value = this.value;
})
input1.addEventListener('input', function (evt) {
    inputclone1.value = this.value;
})
inputclone0.addEventListener('input', function (evt) {
    input0.value = this.value;
})
inputclone1.addEventListener('input', function (evt) {
   input1.value = this.value;
})


//ajout des valeurs des inputs dans un array
var realInput = document.getElementsByClassName("inputWheel");
function addNameOnArray() {
  for (let index = 0; index < realInput.length; index++) {
        const element = realInput[index];
          noms.push(element.value);
}
}
//fonction choix randomn
function randomn(noms) {
  console.log(noms);
  rand = noms[Math.floor(Math.random() * noms.length)];
   choix = noms.indexOf(rand);
  console.log(choix);
   choixFinal = `#choice${choix}`;
}
//fonction qui retire une div de la roue
var boutonMoins = document.getElementById("controlMoins");
function removeLastDiv() {
  var contentwrapper = document.getElementById("contentwrapper");
  contentwrapper.removeChild(document.getElementById(`choice${realInput.length - 1}`));
  if (realInput.length < 3) {//on ne peut pas descendre plus bas que 2 div
    boutonMoins.disabled = true;
    return
  }
}

boutonMoins.addEventListener("click", () => {
  removeLastDiv();
  init ();//fonction remet a jour les clones
})

//fonction qui ajoute une div dans la roue
var boutonPLus = document.getElementById("controlPlus");
function addDivAtTheEnd() {
  var newInput = document.getElementById(`choice${realInput.length - 1}`).insertAdjacentHTML("afterend",`<section id=choice${realInput.length} class="rose"><input class="inputWheel inputWheelTotal" type="text" placeholder="Input your name here"></section>`);
}

boutonPLus.addEventListener("click", () => {
  addDivAtTheEnd();
  init ();//fonction remet a jour les clones
  if (realInput.length > 2) {//Des quil y a plus de 2 div on reactive le bouton moins
    boutonMoins.disabled = false;
  }
})



  
  


    
  
    













