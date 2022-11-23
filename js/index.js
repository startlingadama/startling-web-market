// declaration des variables liées  a la page index.html

var nav1 = document.getElementsByClassName("entete-head")[0];
var nav2 = document.getElementsByClassName("entete")[0];
const liste_img = new Array("./img/produit/pcg1.png","./img/produit/pcg2.jpg","./img/produit/pcg3.jpg");

var gauche = document.getElementById("box-gauche");
var droite = document.getElementById("box-droite");
var img_box = document.getElementById("img-box");

var contenair_box = document.getElementsByClassName("produit-box-panneaux")[0];
var close = document.getElementById("close");


let increment = 0;

window.onscroll = function(event){
	var scroll = window.pageYOffeset;
		if (scroll != 0) {
		nav1.style.backgroundColor= "#6F2809";
		nav2.style.backgroundColor= "#6F2809";
		}
}

/* declaration des fonctions et utilisation ecouteur des evenements */

// produit box

async function produit_box(){
	contenair_box.style.display = "block";
}


function close_f(){
	contenair_box.style.display = "none";
}

// une fois l'icone x cliqué sorti du box

close.addEventListener("click", close_f);

window.onclick = function(event){
	if( event.target == contenair_box ){
		contentair_box.style.display = "none";
	}
}


// gestion des images dans mon box produit, le defilement a gauche et a droite

gauche.addEventListener("click", () => {
        increment -= 1;
        var index = Math.abs(increment%3-1);
        if( index == -1 ){
                img_box.src = liste_img[2];
        }
        else{
                img_box.src = liste_img[index];
        }
});

droite.addEventListener("click", () => {
        increment += 1;
        var index = Math.abs(increment%3-1);
        if( index == -1 ){
                img_box.src = liste_img[2];
        }
        else{
                img_box.src = liste_img[index];
        }
});

// defilement asynchrone

if( contenair_box.style.display == "block"){
	img_box.src = liste_img[increment%3];
	increment++;
}
