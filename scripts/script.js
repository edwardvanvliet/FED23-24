// JavaScript Document
console.log("hi");

/*******************************************/
/* Navigatiemenu OPENEN met de MENU button */
/*******************************************/

// Variabelen opstellen, die vervolgens worden geselecteerd met de querySelector //
var openMenuButton = document.querySelector ("header nav > button:nth-of-type(1)");
var hetMenu = document.querySelector ("header > nav:nth-of-type(2)");


// Laat het menuknop luisteren naar de clicks en voer dan een functie uit //
openMenuButton.onclick = openNav;

// Voeg in de functie een class toe aan de nav //
function openNav() {
  hetMenu.classList.add("open");
}



/*********************************************/
/* Navigatiemenu SLUITEN met de SLUIT button */
/*********************************************/

// Zoek de sluit button op //
var sluitButton = document.querySelector("header nav > button:nth-of-type(2)");

// Laat de sluit button luisteren naar de clicks //
sluitButton.onclick = sluitMenu;

// Verwijder in de functie de class van de nav //
function sluitMenu() {
  var deNav = document.querySelector("header > nav:nth-of-type(2)");
  deNav.classList.remove("open");
}