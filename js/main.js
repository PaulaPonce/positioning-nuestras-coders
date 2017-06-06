var h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "23px";
h1.style.marginLeft = "90px";

var hr = document.getElementsByTagName("hr")[0];
hr.style.borderBottom = "thick solid black";
hr.style.marginLeft = "90px";
hr.style.width = "80px";

var contenedor = document.getElementsByClassName("contenedor")[0];
contenedor.style.position = "relative";

var caja = Array.from(document.getElementsByClassName("caja"));
caja.forEach(function(el){
	el.style.width = "211px";
	el.style.height = "211px";
	el.style.position = "absolute";
	el.style.opacity = "0.8";
	el.style.padding = "20px";
	el.style.margin = "20px";
});

var profile1 = document.getElementById("prof-1");
profile1.style.top = "50px";
profile1.style.left ="50px";
var profile2 = document.getElementById("prof-2");
profile2.style.top = "50px";
profile2.style.left ="281px";
var profile3 = document.getElementById("prof-3");
profile3.style.top = "50px";
profile3.style.left ="512px";
var profile4 = document.getElementById("prof-4");
profile4.style.top = "291px";
profile4.style.left ="50px";
var profile5 = document.getElementById("prof-5");
profile5.style.top = "291px";
profile5.style.left ="281px";
var profile6 = document.getElementById("prof-6");
profile6.style.top = "291px";
profile6.style.left ="512px";

var parrafo = Array.from(document.getElementsByTagName("p"));
parrafo.forEach(function(e){
	e.style.fontFamily = "Roboto Slab";
	e.style.position = "absolute"; 
	e.style.right = "30px";
	e.style.bottom = "10px";
	e.style.color = "white";
});