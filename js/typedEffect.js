function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

let typed = document.querySelector(".typed");
let Phrases = typed.getAttribute("data-typed-items");
let arrayPhrases = [...Phrases.split(',')];
let newArrayPhrases = new Array(Phrases.split(','));
console.log(arrayPhrases);
console.log(newArrayPhrases);
console.log(newArrayPhrases[0]);


let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true) {
        let phrase = arrayPhrases[curPhraseIndex];

        for (let i = 0; i < phrase.length; i++) {
            typed.innerText = phrase.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = phrase.length; i > 0; i--) {
            typed.innerText = phrase.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === arrayPhrases.length - 1) {
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }
    }
};

  writeLoop();