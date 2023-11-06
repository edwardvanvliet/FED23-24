// JavaScript Document
console.log("hi");



/*******************************************/
/* Navigatiemenu OPENEN met de MENU button */
/*******************************************/

// Variabelen opstellen, die vervolgens worden geselecteerd met de querySelector //
var openMenubutton = document.querySelector("header nav:first-child ul button:first-child");
var deNav = document.querySelector("header nav:nth-of-type(2)");


// Laat het menuknop luisteren naar de clicks en voer dan een functie uit //
openMenubutton.onclick = openNav;
console.log(openMenubutton);

// Voeg in de functie een class toe aan de nav //
function openNav() {
  var deNav = document.querySelector("header nav:nth-of-type(2)");
  deNav.classList.add("open");
  console.log(deNav);
}


/*********************************************/
/* Navigatiemenu SLUITEN met de SLUIT button */
/*********************************************/

// Zoek de sluit button op //
var sluitButton = document.querySelector("header nav:nth-of-type(2) button");

// Laat de sluit button luisteren naar de clicks //
sluitButton.onclick = sluitMenu;

// Verwijder in de functie de class van de nav //
function sluitMenu() {
  var deNav = document.querySelector("header nav:nth-of-type(2)");
  deNav.classList.remove("open");
}



/**********************************************************/
/* "BACK TO TOP"-button onderaan de pagina met JavaScript */
/**********************************************************/
/* Bron "getElementById()": https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById */
/* Bron "if... else-statement": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else */
var backtotopButton = document.getElementById("back-to-top");

// Show or hide the button based on scroll position //
window.onscroll = function() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    backtotopButton.style.display = 'block';
  } else {
    backtotopButton.style.display = 'none';
  }
};

// Scroll naar boven als er op de button wordt geklikt //
function scrollToTop() {
  document.body.scrollTop = 0; // Voor Safari
  document.documentElement.scrollTop = 0; // Voor Chrome, Firefox, Internet Explorer (Microsoft Edge?), etc.
}