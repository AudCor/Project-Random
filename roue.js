window.onload = ()=>{
  updateList();
  checkCookie();
}
var time = 4000;
var scrollDistancePerSecond = 1000; // Scroll 1000px every second.
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
  document.location = "#choice0";
  btn.removeEventListener("click", demarrageRoue2);
    var timout = setTimeout(function accelerer(){
        internal = setInterval(() => {
            if (doNotTurn) {
                doNotTurn = false;
                clearInterval(internal);
                return;
            };
            scrollDistancePerSecond = scrollDistancePerSecond + 500;
            if (scrollDistancePerSecond > 10000) {
              contient.style.animationPlayState = "running"
              contient.style.animation = "shake 0.5s infinite";
              if (scrollDistancePerSecond === 20000) {
                  console.log(choixFinal);
                  document.location = choixFinal;
                 contient.style.animationPlayState = "paused";
                cancelAnimationFrame(animation);
                  clearInterval(internal);
                  scrollDistancePerSecond = 2000;
                  clearTimeout(timout);
                  if(myArray.length === noms.length){
                    btn.disabled = true;
                  }
                  else {
                    btn.disabled = false;
                  }
                  addWinnerOnlist();
                  return;
              }
            }
          }, 200);
    }, 1000);  
}

var noms = [];
var choix = null;
var choixFinal = null;
var doNotAdd = false;
// bouton demarrez
btn.addEventListener("click", () =>{
  demarrageRoue2();
  addNameOnArray();
  random3();
  btn.disabled = true;
  griseInputs();
  
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
    btn.disabled = false;
    doNotAdd = false;
    noms = [];
    myArray = [];
    winnersList.innerHTML = "";
    startStyleInputs();
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
//recalcule les clones
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
  if (doNotAdd) {
    return};
  for (let index = 0; index < realInput.length; index++) {
        const element = realInput[index];
          noms.push(element.value);
}
doNotAdd = true;
}
//fonction qui grise les inputs
function griseInputs(){
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    element.disabled = true;//on ne peut plus modifier le input
    element.style.color = "grey"; 
  }
}
//fonction qui remet les inputs dans leurs style de depart
function startStyleInputs(){
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    element.disabled = false;
    element.style.color = "black"; 
  }
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
  var newInput = document.getElementById(`choice${realInput.length - 1}`).insertAdjacentHTML("afterend",`<section id=choice${realInput.length} class=${choixCouleurs}><input class="inputWheel inputWheelTotal" type="text" placeholder="Input your name here"></section>`);
}

boutonPLus.addEventListener("click", () => {
  colorChoice();
  addDivAtTheEnd();
  init ();//fonction remet a jour les clones
  if (realInput.length > 2) {//Des quil y a plus de 2 div on reactive le bouton moins
    boutonMoins.disabled = false;
  }
})
//fonction qui choisi une couleur differente a chaque nouvel div
var choixCouleurs = null;
const couleurs = ["green","yellow","blue","rose","grey","red"];
function colorChoice() {
  choixCouleurs = couleurs[Math.floor(Math.random() * couleurs.length)];
if (document.getElementById(`choice${realInput.length - 1}`).className === choixCouleurs) {
  colorChoice();
}
}

//fonction random 
const winnersList = document.getElementById("winnersList");
let myArray = [];
function random3() {
  console.log(noms);
  rand = noms[Math.floor(Math.random() * noms.length)];
if(myArray.includes(rand)) {
 random3();
}
 else {
   myArray.push(rand)
   choix = noms.indexOf(rand);
   choixFinal = `#choice${choix}`;
   console.log(myArray) 
if(myArray.length === noms.length){
      console.log("cest finis")
      return
   }
 }
}
//fonction qui cree element dans la div des gagnants
function addWinnerOnlist() {
  var creaElt = document.createElement("li"); // Création d'un élément li
   creaElt.appendChild(document.createTextNode(rand)); // Définition de son contenu textuel
   winnersList.appendChild(creaElt); // Insertion du nouvel élément 
}
console.log(document.cookie)

//A Function to Set a Cookie
function setCookie(cname,cvalue,exdays) {
  var d = new Date(); //Create an date object
  d.setTime(d.getTime() + (exdays*1000*60*60*24)); //Set the time to exdays from the current date in milliseconds. 1000 milliseonds = 1 second
  var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
  document.cookie = cname+"="+cvalue+"; "+expires;//Set the cookie with value and the expiration date
}
//A Function to Get a Cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
//A Function to Check a Cookie //fonction qui verifie si un username est deja enregistre
function checkCookie() {

  var username = getCookie("username");
  if (username != "") {
    userNameH2.textContent = username

   for (let index = 0; index < messageAcceuil.length; index++) {
    const element = messageAcceuil[index];
    element.style.display = "none";
  }
  for (let index = 0; index < newAcceuil.length; index++) {
    const element = newAcceuil[index];
    element.style.display = "flex";
  } 
  }
}


//fonction qui efface le message dacceuil
var btnAcceuil = document.getElementById("btnAcceuil");
var messageAcceuil = document.getElementsByClassName("acceuilMessage");
btnAcceuil.addEventListener("click", ()=>{
    for (let index = 0; index < messageAcceuil.length; index++) {
      const element = messageAcceuil[index];
      element.style.display = "none";
    } 
})
//input userName devient userNameH2
var userName = document.getElementById("userName")
var userNameH2 = document.getElementById("userNameH2");
var newAcceuil = document.getElementsByClassName("newAcceuil");
userName.addEventListener("input", ()=>{
  userNameH2.textContent = userName.value
})
//affichage newAcceuil //enregitrement du username dans les cookies
btnAcceuil.addEventListener('click', ()=> {
  for (let index = 0; index < newAcceuil.length; index++) {
    const element = newAcceuil[index];
    element.style.display = "flex";
  }
    var username = userName.value
  if (username != "" && username != null) {
    
    setCookie("username", username, 365);
  }
})
//affichage input NewnameList
var btnAjouter = document.getElementById('btnAjouter');
var formNewNameList = document.getElementById('formNewNameList');
btnAjouter.addEventListener('click', ()=>{
  formNewNameList.style.display ="contents";
  btnAjouter.disabled = true;
})
//input newNameList devient newNameListH2
var keysName;
var newNameList = document.getElementById('newNameList');
let newNameListH2 = document.getElementById('newNameListH2');
newNameList.addEventListener("input", ()=>{
  newNameListH2.textContent = newNameList.value
   keysName = newNameList.value;
})
//disparition input nom nouvelle liste
var newNameListBtn = document.getElementById('newNameListBtn');
var newParticipants = document.getElementsByClassName("newParticipants");
newNameListBtn.addEventListener('click', ()=>{
  formNewNameList.style.display ="none";
  newNameListBtn.disabled = true;
  for (let index = 0; index < newParticipants.length; index++) {
    const element = newParticipants[index];
    element.style.display = "flex"; 
  }
})
//creation li pour chaque participants
let newPeopleList = [];
var btnAddParticipant = document.getElementById('btnAddParticipant');
var participant = document.getElementById('participant');
var showList = document.getElementById('showList')
let saveListbtn = document.getElementById('saveListbtn');
btnAddParticipant.addEventListener('click', ()=>{
    newPeopleList.push(participant.value)//on rentre les elements dans un array
    var liparticipant = document.createElement('li');
    liparticipant.classList.add('linewList')
    liparticipant.textContent = participant.value
    showList.appendChild(liparticipant);
    participant.value = " ";
    var linewList = document.getElementsByClassName('linewList');
    if (linewList.length > 10) {
      btnAddParticipant.disabled = true;
        return
    }
    if (linewList.length >= 2) {
      saveListbtn.disabled = false;
    }  
console.log(newPeopleList)
})
//fonction qui rajoute un li a liste des listes 
function createLiList(i) {
  var ulLists = document.getElementById('ulLists');
    var liVoslists = document.createElement('li');
    var btnLists = document.createElement('button');
    var resto = localStorage.getItem(localStorage.key(i));
    var arrayCorrespondant = Object.values(JSON.parse(resto));
    btnLists.className = "boutonsListes"
    btnLists.setAttribute("title", arrayCorrespondant[0])
    btnLists.textContent = keysName;
    liVoslists.appendChild(btnLists);
    ulLists.appendChild(liVoslists);
    btnLists.addEventListener('click',()=>{
      UpdateWheel(arrayCorrespondant[0])
      console.log(arrayCorrespondant[0])
    })
    
}
// creer un objet avec la nouvelle liste et envoyer objet dans le localStorage
var obj = {};

saveListbtn.addEventListener('click', ()=>{
  var longueurLocalStorage = localStorage.length;
  obj = {
    [keysName]: newPeopleList
  }
  if (localStorage.getItem("myList0")) {
    localStorage.setItem(`myList${longueurLocalStorage}`, JSON.stringify(obj))
    createLiList(longueurLocalStorage - 1)
    
  }
  else {
    /* localStorage.clear(); */
    localStorage.setItem(`myList0`, JSON.stringify(obj))
    createLiList(0)
  }
  showList.innerHTML = "";
  newNameList.value = "";
  saveListbtn.disabled = true;
  newNameListH2.innerText = "";
  btnAjouter.disabled = false;
  newNameListBtn.disabled = false;
  newPeopleList = [];
  keysName = "";
  obj = {};
  for (let index = 0; index < newParticipants.length; index++) {
    const element = newParticipants[index];
    element.style.display = "none"; 
  }
})
//update la listes des listes crees au reload de la page
var nomsData = []
function updateList() {
  for (var i = 0; i < localStorage.length; i++) {
    var resto = localStorage.getItem(localStorage.key(i));
    var titreList = Object.keys(JSON.parse(resto));
    var ulLists = document.getElementById('ulLists');
    var liVoslists = document.createElement('li');
    var btnLists = document.createElement('button');
    var arrayCorrespondant = Object.values(JSON.parse(resto));
    btnLists.textContent = titreList;
    btnLists.id = `myList${i}`;
    btnLists.className = "boutonsListes"
    btnLists.setAttribute("title", arrayCorrespondant[0])
    liVoslists.appendChild(btnLists);
    ulLists.appendChild(liVoslists);
 }
 var boutonsListes = document.getElementsByClassName("boutonsListes");

    for (let index = 0; index < boutonsListes.length; index++) {
      const element = boutonsListes[index];
      element.addEventListener('click', ()=>{
        var arrayist = Object.values(JSON.parse(localStorage.getItem(localStorage.key(index))))[0];
        UpdateWheel(arrayist);

      })
    }
}

//mise a jour div dans la roue 
function UpdateWheel(tableau) {
  if (realInput.length > tableau.length) {
    while (realInput.length > tableau.length) {
      removeLastDiv();
      init();
    }
    for (let y = 0; y < realInput.length; y++) {
      const element = realInput[y];
      const element2 = tableau[y];
      element.value = element2
    } 
  }
if (realInput.length < tableau.length) {
  while (realInput.length < tableau.length) {
    colorChoice();
    addDivAtTheEnd();
    init();
  }
  for (let y = 0; y < realInput.length; y++) {
    const element = realInput[y];
    const element2 = tableau[y];
    element.value = element2
  } 
}
}
































  
  


    
  
    













