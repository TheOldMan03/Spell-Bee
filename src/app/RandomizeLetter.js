import words7 from '../Words/filtered_words.js';

function randomWord(){
    let Randomword = words7[Math.floor(Math.random() * 3087)];
    return Randomword
}

function getRandomLetter() {
    let word = randomWord();
    let randomLetter = word[Math.floor(Math.random()*7)];
}