// // =========================================================
// ORINO BRAIN
// =========================================================

const OrinoBrain = {

    // -----------------------------------------------------
    // ANALYZE USER TEXT
    // -----------------------------------------------------

    analyze(promptText) {

        if (!promptText || typeof promptText !== "string") {
            return "";
        }

        const words = promptText
            .toLowerCase()
            .trim()
            .split(/\s+/);

        const result = [];

        words.forEach(word => {

            // ART STYLES
            if (window.OrinoArtStyles?.base?.[word]) {
                result.push(window.OrinoArtStyles.base[word]);
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

        // Temporary test message
        if (result.length === 0) {
            return "BRAIN TEST OK";
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
