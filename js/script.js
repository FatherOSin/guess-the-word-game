const guesses = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessBox = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");


const word = "magnolia";

const placeholder = function (word) {
    const placeHolderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeHolderLetters.push("●")
    }
    wordInProgress.innerText = placeHolderLetters.join("");

};

placeholder(word);

guessButton.addEventListener("click", function (e){
    e.preventDefault();
    const guess = guessBox.ariaValueMax;
    console.log(guess);
    guessBox.value = "";

});