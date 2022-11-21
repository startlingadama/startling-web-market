var nav1 = document.getElementsByClassName("entete-head")[0];
var nav2 = document.getElementsByClassName("entete")[0];

window.onscroll = function(event){
	var scroll = window.pageYOffeset;
		if (scroll != 0) {
		nav1.style.backgroundColor= "#6F2809";
		nav2.style.backgroundColor= "#6F2809";
		}
}

/*
function produit_box(){
	var width = window.innerWidth;

	if( width < 950){
		window.open("./html/produit.html", "", "toolbar=yes,scrollbars=no,titlebar=0,location=0,resizable=no,top=330,left=280,width=500,height=450");
	}
	else {
		window.open("./html/produit.html", "", "toolbar=yes,scrollbars=no,titlebar=0,location=0,resizable=no,top=200,left=650,width=700,height=600");
	}
}*/

// produit box

var contenair_box = document.getElementsByClassName("produit-box-panneaux")[0];
var close = document.getElementById("close");

function produit_box(){
	contenair_box.style.display = "block";
}


function close_f(){
	contenair_box.style.display = "none";
}

close.addEventListener("click", close_f);

window.onclick = function(event){
	if( event.target != contenair_box ){
		contentair_box.style.display = "none";
	}
}

