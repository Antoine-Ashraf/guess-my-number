'use strict';

let score = 20;
let highScore = 0;
let secretNumber  =  Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        displayMessage('Please Enter a Number!');
    } else if(guess === secretNumber) {
        updateScore(score);
        displayMessage('Correct Number!');
        backgroundColor('#008000');
        displayNumber(secretNumber);
        document.querySelector('.number').style.width = '40rem';
        if(highScore === 0 || highScore < score) {
            highScore = score;
            updateHighscore(highScore);
            // document.querySelector('.highscore').textContent = highScore;
        } else {    // When the guess is wrong
            updateHighscore(highScore);
            // document.querySelector('.highscore').textContent = highScore;
        }
    } else {
        if(score > 1) {
            score--;
            updateScore(score);
            displayMessage(guess < secretNumber ? 'Number Too Low!' : 'Number Too High!');
        } else {
            updateScore(0);
            displayMessage('You Lost!');
            backgroundColor('#FF0000');
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber  =  Math.trunc(Math.random() * 20) + 1;
    displayNumber('?');
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...')
    updateScore(score);
    document.querySelector('.guess').value = '';
    backgroundColor('#222');
})

/******************** Helper Functions ********************/

// Function to display the message to the user
function displayMessage (message) {
    document.querySelector('.message').textContent = message;
}

// Function to update the score
function updateScore(scoreValue) {
    document.querySelector('.score').textContent = scoreValue;
}

// Function to change background color
function backgroundColor(color) {
    document.querySelector('body').style.backgroundColor = color;
}

// Function to display the secret number
function displayNumber(number) {
    document.querySelector('.number').textContent = number;
}

// Function to update the highscore
function updateHighscore(highscore) {
    document.querySelector('.highscore').textContent = highscore;
}