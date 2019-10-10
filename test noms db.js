// définition d'un array qui, plus tard, récupèrera ces noms depuis la DB
let arrayNomsDB = ["Sika", "Yannick", "Hadibéré", "Salim", "Andrea"]

// class qui génère un input pour chaque nom
class NomAjouteDansListe {
  constructor(nom) {
    this.nom = nom
  }
  ajoutNouveauNom () {
    const a = document.createElement("input");
    a.textContent = this.nom;
    // a.id = 
    const b = document.createElement("li");
    b.appendChild(a);
  }
}

// fonction appelée quand on clique sur une liste
const listActive = (arrayNomsDB) => {
  for (i = 0; i < arrayNomsDB.length; i++)
  {
    let temporaire = new NomAjouteDansListe(arrayNomsDB[i]);
    arrayNomsDB[i].ajoutNouveauNom();
  }
}




  