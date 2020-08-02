let nCoup = 0;
let textCoups = $("#nbCoups");

let textBateaux = $("#nbBateaux");
let nBateaux = 5;

let AfficherBateaux = $(".show")

let porteAvion = "cinq"
let croiseur = "quatre"
let sousMarin = "trois"
let torpilleur = "deux"

let nPorteAvion = 5
let nCroiseur = 4
let nSousMarin = 6
let nTorpilleur = 2

let button = $(".case");

let rejouer = $(".new")

//Fonction rejouer
rejouer.on('click',function() {
    location.reload();
})

button.on('click',function() {
    nCoup++;
    textCoups.html(nCoup);
	

	//Etat de la case: Touché || Coulé
	if($(this).hasClass(porteAvion) || $(this).hasClass(croiseur) || $(this).hasClass(sousMarin) || $(this).hasClass(torpilleur)){
    	$(this).css("background-image", "url(img/touche.png)");
    	$(this).attr("disabled", true);
    }
    else{
    	$(this).css("background-image", "url(img/rate.png)");
    	$(this).attr("disabled", true);
        ajouteMessage(getMessage(0));
    }

    if($(this).hasClass(porteAvion)){
        ajouteMessage(getMessage(2));
        nPorteAvion--;

        if(nPorteAvion < 1){
            ajouteMessage(getMessage(6));
            nBateaux--;
            textBateaux.html(nBateaux);
        }
    }

    if($(this).hasClass(croiseur)){
        ajouteMessage(getMessage(3));
        nCroiseur--;

        if(nCroiseur < 1){
            ajouteMessage(getMessage(7));
            nBateaux--;
            textBateaux.html(nBateaux);
        }
    }

    if($(this).hasClass(sousMarin)){
        ajouteMessage(getMessage(4));
        nSousMarin--;

        if(nSousMarin == 3){
            ajouteMessage(getMessage(8));
            nBateaux--;
            textBateaux.html(nBateaux);
        }

        if(nSousMarin == 0){
            ajouteMessage(getMessage(8));
            nBateaux--;
            textBateaux.html(nBateaux);
        }
    }

    if($(this).hasClass(torpilleur)){
        ajouteMessage(getMessage(5));
        nTorpilleur--;

        if(nTorpilleur < 1){
            ajouteMessage(getMessage(9));
            nBateaux--;
            textBateaux.html(nBateaux);
        }
    }

    finDePartie()
})

function getMessage(i) {
    switch (i) {
        case 0: return "A l'eau !";
        case 1: return "Case déjà jouée !";
        case 2: return "Porte-avion touché !";
        case 3: return "Croiseur touché !";
        case 4: return "Sous-marin touché !";
        case 5: return "Torpilleur touché !";
        case 6: return "Porte-avion coulé !";
        case 7: return "Croiseur coulé !";
        case 8: return "Sous-marin coulé !";
        case 9: return "Torpilleur coulé !";
        case 10: return "Partie terminée en "+nCoup+" coups.";
        case 11: return "Félications !";
        case 12: return "---------------------------";
        case 13: return "Cliquer sur Nouvelle Partie";
    }
}

function ajouteMessage(m) {
    // Nouveau texte dans la liste
    let nouveauTexte=$('<p></p>').html(m);
    $('#messages').append(nouveauTexte);

    // Positionnement sur le dernier texte
    let newmsg_top = parseInt($('#messages p:last').offset().top);
    $('#messages').scrollTop(newmsg_top);
}
    
//finDePartie() {
function finDePartie() {
    if(nBateaux == 0){
        ajouteMessage(getMessage(12));
        ajouteMessage(getMessage(10));
        ajouteMessage(getMessage(11));
        ajouteMessage(getMessage(12));
        ajouteMessage(getMessage(13));
        ajouteMessage(getMessage(12));


    }
}    







