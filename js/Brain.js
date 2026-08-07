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


        return result.join(", ");

    }


};


// =========================================================
// EXPORT BRAIN
// =========================================================

window.OrinoBrain = OrinoBrain;
