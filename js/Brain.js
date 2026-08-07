// =========================================================
// ORINO BRAIN
// =========================================================

const OrinoBrain = {

    analyze(promptText) {

        if (!promptText || !promptText.trim()) {
            return "";
        }

        const words = promptText
            .toLowerCase()
            .trim()
            .split(/\s+/);

        const results = [];

        words.forEach(word => {

            const libraries = [
                window.OrinoArtStyles,
                window.OrinoCamera,
                window.OrinoColors,
                window.OrinoEffects,
                window.OrinoGenre
            ];

            let found = false;

            libraries.forEach(library => {

                if (
                    library &&
                    library.base &&
                    library.base[word]
                ) {

                    results.push(library.base[word]);
                    found = true;

                }

            });

            // Mot inconnu :
            // on le conserve pour la prochaine étape
            if (!found) {
                results.push(word);
            }

        });

        return results.join(", ");

    }

};


// =========================================================
// EXPORT
// =========================================================

window.OrinoBrain = OrinoBrain;


// =========================================================
// BRAIN BUTTON
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const brainButton =
        document.querySelector("#Brain-btn");

    if (!brainButton) {
        console.warn("Orino Brain: button not found.");
        return;
    }


    brainButton.addEventListener("click", () => {

        // =============================================
        // USER KEYWORDS WINDOW
        // =============================================

        const userInput = window.prompt(
    "What are you thinking?\n\n" +
    "Enter a few keywords to describe your image.\n\n" +
    "Example:\n" +
    "cinematic dragon blue"
);

        // =============================================
        // ANALYZE
        // =============================================

        const generatedPrompt =
            OrinoBrain.analyze(userInput);


        // =============================================
        // SEND TO PROMPT BOX
        // =============================================

        const promptBox =
            document.querySelector("#prompt-box");


        if (!promptBox) {

            console.warn(
                "Orino Brain: #prompt-box not found."
            );

            return;
        }


        promptBox.value = generatedPrompt;


        promptBox.dispatchEvent(
            new Event("input", {
                bubbles: true
            })
        );

    });

});


// =========================================================
// END ORINO BRAIN
// =========================================================
