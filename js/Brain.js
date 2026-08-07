// // =========================================================
// ORINO BRAIN
// =========================================================

const OrinoBrain = {

    // -----------------------------------------------------
    // ANALYZE USER TEXT
    // -----------------------------------------------------

    analyze(promptText) {

    console.log("INPUT:", promptText);

    console.log(
        "DRAGON DIRECT:",
        window.OrinoArtStyles?.base?.["dragon"]
    );

    console.log(
        "CINEMATIC DIRECT:",
        window.OrinoArtStyles?.base?.["cinematic"]
    );

    return "BRAIN DIRECT TEST";

    }

            // ART STYLES
            if (window.OrinoArtStyles?.base?.[word]) {

    result.push("ARTSTYLE FOUND: " + window.OrinoArtStyles.base[word]);

            }
            // CAMERA
            if (window.OrinoCamera?.base?.[word]) {
                result.push(window.OrinoCamera.base[word]);
            }

            // COLORS
            if (window.OrinoColors?.base?.[word]) {
                result.push(window.OrinoColors.base[word]);
            }

            // EFFECTS
            if (window.OrinoEffects?.base?.[word]) {
                result.push(window.OrinoEffects.base[word]);
            }

            // GENRE
            if (window.OrinoGenre?.base?.[word]) {
                result.push(window.OrinoGenre.base[word]);
            }

        });

        if (result.length === 0) {
    return promptText;
        }
        

        return result.join(", ");
    }
};


// =========================================================
// EXPORT BRAIN
// =========================================================

window.OrinoBrain = OrinoBrain;


// =========================================================
// BRAIN BUTTON
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const brainButton = document.querySelector("#Brain-btn");

    if (!brainButton) {
        console.warn("Orino Brain: #Brain-btn not found.");
        return;
    }

    brainButton.addEventListener("click", () => {

        const userInput = window.prompt(
            "Describe your image in a few words."
        );

        if (!userInput) {
            return;
        }

        const generatedPrompt = OrinoBrain.analyze(userInput);

        const promptBox = document.querySelector("#prompt-box");

        if (!promptBox) {
            console.warn("Orino Brain: #prompt-box not found.");
            return;
        }

        promptBox.value = generatedPrompt;

        // Trigger normal input events
        promptBox.dispatchEvent(new Event("input", {
            bubbles: true
        }));

    });

});


// =========================================================
// END ORINO BRAIN
// =========================================================
