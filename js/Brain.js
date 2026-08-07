// =========================================================
// ORINO BRAIN
// =========================================================


const OrinoBrain = {

    // =====================================================
    // LIBRARIES
    // =====================================================

    getLibraries() {

        return [

            window.OrinoArtStyles,
            window.OrinoCamera,
            window.OrinoColors,
            window.OrinoEffects,
            window.OrinoGenre

        ].filter(Boolean);

    },


    // =====================================================
    // FIND TERM
    // =====================================================

    findTerm(term) {

        const libraries = this.getLibraries();

        for (const library of libraries) {

            // ---------------------------------------------
            // BASE LIBRARY
            // ---------------------------------------------

            if (library.base && library.base[term]) {

                return library.base[term];

            }


            // ---------------------------------------------
            // LEARNED LIBRARY
            // ---------------------------------------------

            if (library.learned && library.learned[term]) {

                return library.learned[term];

            }

        }


        return null;

    },


    // =====================================================
    // ANALYZE PROMPT
    // =====================================================

    analyze(promptText) {

        if (!promptText || typeof promptText !== "string") {

            return "";

        }


        const text = promptText
            .toLowerCase()
            .trim();


        if (!text) {

            return "";

        }


        const words = text.split(/\s+/);

        const results = [];

        const used = new Set();


        // =================================================
        // FIRST : MULTI-WORD EXPRESSIONS
        // =================================================

        let index = 0;


        while (index < words.length) {

            let found = false;


            // Try 4-word expressions
            for (let length = 4; length >= 2; length--) {

                if (index + length > words.length) {

                    continue;

                }


                const phrase = words
                    .slice(index, index + length)
                    .join(" ");


                const match = this.findTerm(phrase);


                if (match) {

                    if (!used.has(phrase)) {

                        results.push(match);

                        used.add(phrase);

                    }


                    index += length;

                    found = true;

                    break;

                }

            }


            if (found) {

                continue;

            }


            // =================================================
            // SINGLE WORD
            // =================================================

            const word = words[index];

            const match = this.findTerm(word);


            if (match) {

                if (!used.has(word)) {

                    results.push(match);

                    used.add(word);

                }

            }

            else {

                // Unknown words are preserved
                results.push(word);

            }


            index++;

        }


        // =====================================================
        // FINAL PROMPT
        // =====================================================

        return results.join(", ");

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

        console.warn(
            "Orino Brain: #Brain-btn not found."
        );

        return;

    }


    brainButton.addEventListener("click", () => {


        const userInput = window.prompt(
            "Describe your image in a few words."
        );


        if (!userInput) {

            return;

        }


        const generatedPrompt =
            OrinoBrain.analyze(userInput);


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
