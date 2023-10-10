// JavaScript Document
console.log("hi");

/*************************************/
/* Navmenu openen met de MENU button */
/*************************************/

// Variabelen opstellen, die vervolgens worden geselecteerd met de querySelector //
var deOpenMenuknop = document.querySelector ("header > button:first-child");
var hetMenu = document.querySelector ("nav:nth-of-type(2)");


// Laat het menuknop luisteren naar de clicks en voer dan een functie uit //
deOpenMenuknop.onclick = openNav;

// Voeg in de functie een class toe aan de nav //
function openNav() {
  hetMenu.classList.add("open");
}


















/************************************/
/* menu sluiten met de sluit button */
/************************************/

// Zoek de sluit-button op
/*var sluitButton = document.querySelector("nav button");

// Laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// In de functie verwijder de class van de nav
function sluitMenu(){
  var deNav = document.querySelector("nav");
  deNav.classList.remove("open");
}*/