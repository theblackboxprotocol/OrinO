// =========================================================
// ORINO AI PROMPT STUDIO
// Prompt Controls
// =========================================================


// Elements

const promptBox = document.querySelector("textarea");

// =========================================================
// LOAD ART STYLES INTO MENUS
// =========================================================

function loadArtStyles(){

    const styleMenus = [
        document.querySelector("#style-1"),
        document.querySelector("#style-2"),
        document.querySelector("#style-3")
    ];

    styleMenus.forEach(function(menu){

        if(!menu){
            console.log("Menu style introuvable");
            return;
        }

        // Nettoyage du texte Loading styles...
        menu.innerHTML = "";

        artStyles.forEach(function(style){

            const option = document.createElement("option");

            option.value = style;
            option.textContent = style;

            menu.appendChild(option);

        });

    });

    console.log("Art Styles chargés :", artStyles.length);

}


// Démarrage
loadArtStyles();
// Debug simple

console.log("OrinO Script chargé");
console.log("Prompt box :", promptBox);


// Add text to prompt

function addToPrompt(value) {

    if (!promptBox) {
        console.log("Erreur : textarea introuvable");
        return;
    }


    if (!value || value.includes("Add")) {
        return;
    }


    let current = promptBox.value.trim();


    if (current === "") {

        promptBox.value = value;

    } 

    else if (!current.includes(value)) {

        promptBox.value = current + ", " + value;

    }


}


// Menus Prompt Tools

const promptMenus = [
    "shot-menu",
    "effect-menu",
    "color-menu",
    "genre-menu"
];



promptMenus.forEach(function(id) {


    const menu = document.getElementById(id);


    if(menu) {


        menu.addEventListener("change", function() {


            addToPrompt(this.value);


            this.selectedIndex = 0;


        });


    }

});
