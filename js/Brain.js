// =========================================================
// ORINO AI - BRAIN MODULE
// Simple keyword enrichment test
// =========================================================
 // =========================================================
// ORINO LIBRARY CONNECTION TEST
// =========================================================


window.addEventListener("load", function(){

    const testBox = document.createElement("div");

    testBox.innerHTML =
    "🧠 OrinO Libraries:<br>" +
    "🎨 ArtStyles : " + (typeof OrinoArtStyles) + "<br>" +
    "📷 Camera : " + (typeof OrinoCamera) + "<br>" +
    "✨ Effects : " + (typeof OrinoEffects) + "<br>" +
    "🎨 Colors : " + (typeof OrinoColors) + "<br>" +
    "🎬 Genre : " + (typeof OrinoGenre);


    testBox.style.padding = "10px";
    testBox.style.margin = "10px";
    testBox.style.background = "#111";
    testBox.style.color = "white";


    document.body.prepend(testBox);

});


// =========================================================
// END LIBRARY CONNECTION TEST
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
// =========================================================
// BRAIN BUTTON
// =========================================================


const brainLibrary = {

    "jaune": "yellow, golden tones, warm color grading",

    "brillant": "shiny, glossy, high reflection",

    "cinematic": "cinematic, movie style, professional film look",

    "forêt": "forest, natural environment, detailed vegetation",

    "nuit": "night scene, dark atmosphere, dramatic lighting"

};



const brainButton = document.querySelector("#Brain-btn");


if (brainButton) {


    brainButton.addEventListener("click", function () {


        const userIdea = prompt(
            "Describe your masterpiece in a few words."
        );


        if (!userIdea) {
            return;
        }


        let enhancedPrompt = userIdea;


        Object.keys(brainLibrary).forEach(function(word){


            if(userIdea.toLowerCase().includes(word)){


                enhancedPrompt += ", " + brainLibrary[word];


            }


        });



        const promptBox = document.querySelector("#prompt-box");


        if(promptBox){

            promptBox.value = enhancedPrompt;

        }


        console.log("Enhanced Brain:", enhancedPrompt);


    });


}


// =========================================================
// END BRAIN BUTTON
// =========================================================
