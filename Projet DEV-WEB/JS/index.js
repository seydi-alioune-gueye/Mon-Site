/*header*/
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
/*Inscriptions*/
const onglets = document.querySelectorAll(".ongletsPrime");
const contenu = document.querySelectorAll(".contenu");
var index = 0;
onglets.forEach((onglet) => {
  onglet.addEventListener("click", () => {
    if (onglet.classList.contains("active")) {
      return;
    } else {
      onglet.classList.add("active");
    }
    index = onglet.getAttribute("data-anim");
    console.log(index);
    for (var i = 0; i < onglets.length; i++) {
      if (onglets[i].getAttribute("data-anim") != index) {
        onglets[i].classList.remove("active");
      }
    }
    for (var j = 0; j < onglets.length; j++) {
      if (contenu[j].getAttribute("data-anim") == index) {
        contenu[j].classList.add("activeContenu");
      } else {
        contenu[j].classList.remove("activeContenu");
      }
    }
  });
});
/*Campus Social*/
var hebergement = document.getElementById("hebergementjs");
var avis, prenomNom, niveau, etablissement, spécialité, logement, mail;
hebergement.addEventListener("click", heberger);
function heberger() {
  avis = prompt("Voulez vous un logement oui / non");
  switch (avis) {
    case "oui":
      {
        prenomNom = prompt("Votre prénom et nom");
        niveau = prompt("Votre niveau");
        etablissement = prompt("Votre établissement");
        spécialité = prompt("Votre spécialité");
        logement = prompt("logement souhaité");
        mail = prompt("Votre mail");
        alert(
          "Votre demande est en cours de traitement. Vous allez recevoir un mail dans un instant. Merci ! "
        );
      }
      break;
    case "non":
      {
        alert("vous avez dit non. Merci !");
      }
      break;
    default:
      alert("Veuillez revoir votre choix !");
  }
}
var restaurant = document.getElementById("restaurantjs");
var dej, repas, diner, somme, payement;
restaurant.addEventListener("click", restaurer);
function restaurer() {
  alert("Bienvenue, vous pouvez effectuer vos achats de tickets ici ");
  dej = prompt(
    "Veuillez renseigner la quantité de tickets de déjeuner que vous voulez (0-n)"
  );
  repas = prompt(
    "Veuillez renseigner la quantité de tickets de repas que vous voulez (0-n)"
  );
  diner = prompt(
    "Veuillez renseigner la quantité de tickets de dîner que vous voulez (0-n)"
  );
  somme = 50 * parseInt(dej) + 100 * (parseInt(repas) + parseInt(diner));
  payement = prompt("Payement par Wave / OrangeMoney");
  alert("Somme à payer : " + somme + "FCFA" + " Merci de votre confiance ! ");
}
var informations = document.getElementsByClassName("informationsjs");
var inf;
for (var i = 0; i < informations.length; i++) {
  informations[i].addEventListener("click", informer);
  function informer() {
    inf = prompt(
      "Veuillez renseigner votre e-mail pour être informé de tous évènements !"
    );
    alert(
      "Merci de votre confiance ! Veuillez consulter votre boîte mail pour voir les récents évènements."
    );
  }
}
/*Gestion des cours */
var classe = document.getElementsByClassName("emploi");
var Niveau, email;
for (var i = 0; i < classe.length; i++) {
  classe[i].addEventListener("click", emploi);
  function emploi() {
    Niveau = prompt("Veuillez renseigner votre niveau ! ");
    email = prompt("Veuillez renseigner votre e-mail ! ");
    alert(
      "Merci de votre confiance ! Veuillez consulter votre boîte mail pour voir votre Emploi du temps ."
    );
  }
}
