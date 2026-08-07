// =========================================================
// ORINO AI PROMPT STUDIO
// Dynamic Style Controls
// =========================================================


// Elements

const promptBox = document.querySelector("textarea");

const style1 = document.querySelector("#style-1");

const cinematicTools =
document.querySelector("#cinematic-tools");


// Cinematic trigger

style1.addEventListener("change", function(){


    if(this.value === "Cinematic") {

        cinematicTools.classList.remove("hidden");

    } 
    
    else {

        cinematicTools.classList.add("hidden");

    }


});



// Add selected option to prompt

function addToPrompt(value){


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
