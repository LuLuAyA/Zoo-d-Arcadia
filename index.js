function createSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000);
}

createSlider('slider1');
createSlider('slider2');
createSlider('slider3');



//import Formulaire from './formulaire.js';
//on crée le formulaire
//export const formulaire = new Formulaire("formulaire");
//formulaire.maskChamp('societe');
//formulaire.maskChamp('email');
//addEventListener pour changer le comportement en fonction du radio coché
//formulaire.getElement('particulier').addEventListener('change', () => {formulaire.hideChamp('societe')});
//formulaire.getElement('professionnel').addEventListener('change', () => {formulaire.showChamp('societe')});
//adEventListener pour changer le comportement en fonction de l'objet
//formulaire.getElement('objet').addEventListener('change', ()  => {formulaire.isSelected('objet', "demande_de_contact", () => formulaire.showChamp('email'), () => formulaire.hideChamp('email'));});
//addEventListener pour récupérer les données du formulaire
//formulaire.formulaireHtml.addEventListener('submit',
//    (event) => {
//        event.preventDefault();
//        formulaire.affAnswers();
//        console.log(formulaire.answers)
//    }
//);

//export default class Formulaire {
  //définition du constructeur
  //constructor(id) {
    //  this.id = id;
    //this.formulaireHtml = document.getElementById(this.id);
    //  this.formdata = new FormData(this.formulaireHtml);
    //  this.answers = new Array();
  //}
  //méthode pour récupérer le div parent
  //getDiv(id) {
    //  return document.getElementById(id).parentNode;
  //}
  //méthode pour récupérer un élément
  //getElement(id) {
    //  return document.getElementById(id);
  //}
  //méthode permettant de masquer un élément sans animation
  //maskChamp(id) {
    //  this.getDiv(id).classList.add('masque');
    //  this.getElement(id).required = false;
  //}
  //méthode permettant d'afficher le champ
  //showChamp(id) {
    //  this.getDiv(id).classList.remove('disp');
    //  this.getDiv(id).classList.add('app');
    //  this.getElement(id).required = true;
  //}
  //méthode permettant de masquer le champ avec animation
  //hideChamp(id) {
    //  this.getDiv(id).classList.remove('app');
    //  this.getDiv(id).classList.add('disp');
    //  this.getElement(id).required = false;
  //}
  //méthode pour savoir si un radio est sélectionn
  //isSelected(id, value, action, otherAction) {
    //  this.formdata = new FormData(this.formulaireHtml);
    //  if(this.formdata.get(id) == value) {
    //      action();
    //  }
    //  else {
    //      otherAction();
    //  }
  //}
  //méthode pour récupérer les éléments de chaque input (et les ajouter à answer)
  //getAnswers() {
    //  this.formdata = new FormData(this.formulaireHtml);
    //  this.formdata.forEach(
    //      (value, key) => {
    //          if(value != "" && value != "on") {
    //              this.answers.push([key, value]);
    //          }
    //      }
    //  )
    //  return this.answers
  //}
  //MÉTHODE POUR AFFICHER DANS UN ALERT LES RÉSULTATS
  //affAnswers() {
    //  let chaine = "Récapitulatif\n\n";
    //  for (let ligne of this.getAnswers()) {
    //      chaine += `${ligne [0]} : ${ligne[1]}\n`
    //  }
    //  alert(chaine);
  //}
//}
