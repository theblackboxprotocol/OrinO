// =========================================================
// ORINO AI - BRAIN MODULE
// Simple keyword enrichment test
// =========================================================


const OrinoBrain = {


    // Mini bibliothèque test
    dictionary: {

        "jaune": [
            "yellow",
            "golden",
            "warm color"
        ],

        "brillant": [
            "shiny",
            "glossy",
            "high reflection"
        ],

        "bleu": [
            "blue",
            "azure",
            "deep blue"
        ],

        "nuit": [
            "night",
            "dark atmosphere",
            "moonlight"
        ],

        "cinematic": [
            "cinematic lighting",
            "film style",
            "movie atmosphere"
        ]

    },


    // Fonction d'analyse
    enhance: function(text){


        let words = text
        .toLowerCase()
        .split(" ");


        let result = [];


        words.forEach(word => {


            if(this.dictionary[word]){


                result.push(word);


                this.dictionary[word].forEach(synonym => {

                    result.push(synonym);

                });


            }

            else {

                result.push(word);

            }


        });


        return result.join(", ");

    }


};


// Test console
console.log(
    "Orino Brain prêt :",
    OrinoBrain.enhance("jaune brillant")
);
// =========================================================
// BRAIN TEST
// =========================================================

window.addEventListener("load", function(){

    console.log("🧠 Orino Brain chargé");

    let test = OrinoBrain.enhance("jaune brillant");

    console.log("Résultat Brain :", test);

});
console.log(
    "Orino Brain prêt :",
    OrinoBrain.enhance("jaune brillant")
);
