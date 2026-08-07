
// =========================================================
// ORINO AI PROMPT STUDIO
// Dynamic Style Controls
// =========================================================


// Elements

const promptBox = document.querySelector("textarea");
console.log("Prompt box :", promptBox);
const style1 = document.querySelector("#style-1");
console.log("Style trouvé :", style1);

// Add selected option to prompt

function addToPrompt(value){
alert("Choix reçu : " + value);

    let current = promptBox.value.trim();


    if(value.includes("Add")) {

        return;

    }


    if(current === "") {

        promptBox.value = value;

    }

    else if(!current.includes(value)) {

        promptBox.value =
        current + ", " + value;

    }


}
// Add Shot / Effect / Colors / Genre to Prompt

const promptMenus = [
console.log("Menus chargés");
    "#shot-menu",
    "#effect-menu",
    "#color-menu",
    "#genre-menu"

];


promptMenus.forEach(function(menuID){

    const menu = document.querySelector(menuID);


    menu.addEventListener("change", function(){

        addToPrompt(this.value);

        this.selectedIndex = 0;

    });

});


// Attach menus

const cinematicMenus = [

    "#shot-menu",
    "#effect-menu",
    "#color-menu",
    "#genre-menu"

];



cinematicMenus.forEach(function(menuID){


    const menu =
    document.querySelector(menuID);



    menu.addEventListener("change", function(){


        addToPrompt(this.value);



        // reset menu after selection

        this.selectedIndex = 0;


    });


});
// Activation des menus Prompt Tools

document.addEventListener("change", function(e){

    if(
        e.target.id === "shot-menu" ||
        e.target.id === "effect-menu" ||
        e.target.id === "color-menu" ||
        e.target.id === "genre-menu"
    ){

        let value = e.target.value;

        if(value.includes("Add")){
            return;
        }

        addToPrompt(value);

        e.target.selectedIndex = 0;

    }

});
