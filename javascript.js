window.onload = function() {
	document.getElementById("outside").onclick = outside;
	document.getElementById("inside").onclick = inside;
	document.getElementById("outside-inside").onclick = outside_inside;

	document.getElementById("happy").onclick = happy;
	document.getElementById("sad").onclick = sad;

	document.getElementById("happy1").onclick = happy1;
	document.getElementById("sad1").onclick = sad1;

	document.getElementById("hiking").style.display = "none";
	document.getElementById("boardgames").style.display = "none";

};

function outside() {
	clear1();
	document.getElementById("outside").src = "images/outside-check.jpg";
	document.getElementById("hiking").style.display = "inline-block";
	document.getElementById("boardgames").style.display = "none";
}

function inside() {
	clear1();
	document.getElementById("inside").src = "images/inside-check.jpg";
	document.getElementById("hiking").style.display = "none";
	document.getElementById("boardgames").style.display = "inline-block";
}

function outside_inside() {
	clear1();
	document.getElementById("outside-inside").src = "images/outside-inside-check.jpg";
	document.getElementById("hiking").style.display = "inline-block";
	document.getElementById("boardgames").style.display = "inline-block";
}

function clear1() {
	document.getElementById("outside").src = "images/outside.jpg";
	document.getElementById("inside").src = "images/inside.jpg";
	document.getElementById("outside-inside").src = "images/outside-inside.jpg";
}

function happy() {
	document.getElementById("hiking-picture").src = "images/hiking-check.jpg";
	
}

function sad() {
	document.getElementById("hiking-picture").src = "images/hiking-no.jpg";
	
}

function happy1() {
	document.getElementById("boardgames-picture").src = "images/boardgames-check.jpg";
}

function sad1() {
	document.getElementById("boardgames-picture").src = "images/boardgames-no.jpg";
}

