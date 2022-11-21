const liste_img = new Array("./../img/produit/pcg1.png","./../img/produit/pcg2.jpg","./../img/produit/pcg3.jpg");

var gauche = document.getElementById("box-gauche");
var droite = document.getElementById("box-droite");
var img_box = document.getElementById("img-box");

let increment = 0;

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

