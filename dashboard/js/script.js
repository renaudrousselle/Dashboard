'use strict';

var pourcentageJaune = 0;
var pourcentageVert = 0;
var affichagePourcentageMois = document.getElementById('poucentmois');
var barreMois = document.getElementById('barremois');
var barreAnnee = document.getElementById('barreannee');
var affichagePourcentageAnnee = document.getElementById('pourcentannee');
var arrowmois = document.getElementById('pourcentmoisarrow');
var arrowannee = document.getElementById('pourcentanneearrow');
var compteurMois;
var compteurAnnee;

/* Fonctions */
function augmenterPourcentageMois() {
    pourcentageJaune++;
    affichagePourcentageMois.textContent = pourcentageJaune + "%";
    if (pourcentageJaune == 1) {
        animationBarreJaune();
        arrowmois.style.left = "calc(65% - 40px)";
        arrowmois.style.color = "#fbe15f";
    } else if (pourcentageJaune == 65) {
        clearInterval(compteurMois);
    }
}

function augmenterPourcentageAnnee() {
    pourcentageVert++;
    affichagePourcentageAnnee.textContent = pourcentageVert + "%";
    if (pourcentageVert == 1) {
        animationBarreVert();
        arrowannee.style.left = "calc(75% - 40px)";
        arrowannee.style.color = "#49e394";
    } else if (pourcentageVert == 75) {
        clearInterval(compteurAnnee);
    }
}

function chronoMois() {
    compteurMois = setInterval(augmenterPourcentageMois, 25);
}

function chronoAnnee() {
    compteurAnnee = setInterval(augmenterPourcentageAnnee, 25);
}

function animationBarreJaune() {
    barreMois.classList.remove('zero');
    barreMois.classList.add('jaune');
    arrowmois.classList.add('transition');
}

function animationBarreVert() {
    barreAnnee.classList.remove('zero');
    barreAnnee.classList.add('vert');
    arrowannee.classList.add('transition');
}

/* Appel des fonctions */
document.addEventListener('DOMContentLoaded', function () {
    chronoMois();
    chronoAnnee();
});