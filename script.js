window.addEventListener("load", function(){

var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");
var tab1content = document.getElementById("tab1content");
var tab2content = document.getElementById("tab2content");
var tab3content = document.getElementById("tab3content");


tab1.addEventListener("click", function(){
	tab1.style.background = "grey";
	tab2.style.background = "white";
	tab3.style.background = "white";
	tab1content.style.display = "inline-block";
	tab2content.style.display = "none";
	tab3content.style.display = "none";
});

tab2.addEventListener("click", function(){
	tab2.style.background = "grey";
	tab1.style.background = "white";
	tab3.style.background = "white";
	tab2content.style.display = "inline-block";
	tab1content.style.display = "none";
	tab3content.style.display = "none";
});

tab3.addEventListener("click", function(){
	tab3.style.background = "grey";
	tab2.style.background = "white";
	tab1.style.background = "white";
	tab3content.style.display = "inline-block";
	tab1content.style.display = "none";
	tab2content.style.display = "none";
});


});