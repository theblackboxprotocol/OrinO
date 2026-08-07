// =========================================================
// ORINO BRAIN
// =========================================================
const OrinoBrain = {


    analyze(promptText) {


        let words = promptText
            .toLowerCase()
            .split(" ");


        let result = [];


        words.forEach(word => {


            if (window.OrinoArtStyles?.base[word]) {

                result.push(window.OrinoArtStyles.base[word]);

            }


            if (window.OrinoCamera?.base[word]) {

                result.push(window.OrinoCamera.base[word]);

            }


            if (window.OrinoColors?.base[word]) {

                result.push(window.OrinoColors.base[word]);

            }


            if (window.OrinoEffects?.base[word]) {

                result.push(window.OrinoEffects.base[word]);

            }


            if (window.OrinoGenre?.base[word]) {

                result.push(window.OrinoGenre.base[word]);

            }


        });


        return result.length > 0
    ? result.join(", ")
    : "BRAIN TEST OK";

    }


};


// =========================================================
// EXPORT BRAIN
// =========================================================

window.OrinoBrain = OrinoBrain;
// =========================================================
// BRAIN BUTTON CONNECTION
// =========================================================


const brainButton = document.querySelector("#Brain-btn");


if (brainButton) {


    brainButton.addEventListener("click", function(){


        let userInput = prompt(
            "Describe your masterpiece in a few words."
        );


        if(!userInput){
            return;
        }


        let generatedPrompt = OrinoBrain.analyze(userInput);



        const promptBox = document.querySelector("#prompt-box");


        if(promptBox){

            promptBox.value = generatedPrompt;

        }


    });


}


// =========================================================
// END BRAIN BUTTON CONNECTION
// =========================================================
