// =========================================================
// ORINO AI PROMPT STUDIO
// Prompt Controls
// =========================================================


// Elements

const promptBox = document.querySelector("textarea");


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
