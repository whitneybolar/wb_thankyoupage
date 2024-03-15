
const buttonIconHamburger = document.getElementById("bar-image");
const buttonIconClose = document.getElementById("close-image");
const menuBackground = document.getElementsByClassName("menu-background");
const menuNav = document.getElementsByClassName("list-part");
/*const menuNavUnder = document.getElementsByClassName("list-part-under");*/

$(menuBackground).delay(500).css({ transform: 'scale(0.1)' });

function switchMenuButton(){

if(buttonIconHamburger.style.display == "none"){
    buttonIconClose.style.display = "none";
    $(buttonIconHamburger).slideDown();
    navVisibility();
}
else {
    $(buttonIconClose).slideDown();
    buttonIconHamburger.style.display = "none";
    navVisibility();
}
}

function navVisibility(){
if(buttonIconHamburger.style.display == "none"){
    /* try scale with circle above!*/
    $(menuBackground).css({ transform: 'scale(2000)' });
    $(menuNav).delay(500).slideDown();
    /*$(menuNavUnder).delay(500).slideDown();*/
    /*$(menuNavTwo).delay(500).fadeIn();
    $(menuNavThree).delay(500).fadeIn();*/
}
else {
    $(menuBackground).delay(500).css({ transform: 'scale(0.1)' });
    $(menuNav).fadeOut();
    /*$(menuNavUnder).fadeOut();*/
    /*$(menuNavTwo).fadeOut();
    $(menuNavThree).fadeOut();*/
}
}

window.onscroll = function() {

var currentPosition = window.scrollY;

if(currentPosition > 50){
    $(menuBackground).delay(500).css({ transform: 'scale(0.1)' });
    $(menuNav).fadeOut();
    buttonIconClose.style.display = "none";
    $(buttonIconHamburger).slideDown();
}
else{
    document.getElementsByClassName('entire-nav').style.top = "0";
}
}

