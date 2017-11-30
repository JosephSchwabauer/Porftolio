//all of this happens before user starts
var ourWords = [
"the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he",
"was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be",
"this", "have", "from", "or", "one", "had", "by", "word", "but", "not",
"what", "all", "were", "we", "when", "your", "can", "said", "there",
"use", "an", "each", "which", "she", "do", "how", "their", "if", "will",
"up", "other", "about", "out", "many", "then", "them", "these", "so",
"some", "her", "would", "make", "like", "him", "into", "time", "has",
"look", "two", "more", "write", "go", "see", "number", "no", "way",
"could", "people", "my", "than", "first", "water", "been", "call",
"who", "oil", "its", "now", "find", "long", "down", "day", "did", "get",
"come", "made", "may", "part", "laundry", "apricot", "stungun", "party", "sunday", "pothole", "advice", "macaroni", "tutorial", "jeans", "outlet", "bakery", "bologna", "prosperity", "butter", "sunset", "building", "sweater", "nucleur", "alarm"
];

//setting up filter to keep out words that are 3 or less than 3 letters
function largeWords(words) {
    return words.length >= 5;
}

//calling the function for large words to filter ourWords array
var bigWords = ourWords.filter(largeWords);

// picking a random word from the filtered array and using its index
var randomWords = gameWords();

/* this function is picking the address of the Index (the Index is the address of the
 * person, which is the word in the array). (the array is like a neighborhood). (the
 * array is the group of filtered words kept.)
 */
function gameWords() {
    return bigWords[Math.floor(Math.random() * bigWords.length)];
}

//showing the chosen random word in the console
console.log(randomWords);

//splitting up the letters from the random word
var displayWord = randomWords.split('');

//displaying a dash on the random letters like this ['_','_','_']
var dashedWord = displayWord.map(function (ch) {
    return '_';
});

//create a string from displayWord and add spaces in between each word like this "_ _ _"
var finalDisplay = dashedWord.join(' ');

//displaying finalDisplay in the HTML doc class .hidden-word-display
document.querySelector('.hidden-word-display').textContent = finalDisplay;

var counter = document.querySelector(".guesses-left").textContent = 9;

var userGuess;

var input = document.querySelector(".user-input").textContent = "";

//this relates to hangman.html line 28, not totally sure how that works
function guess(letterGuess) {
    userGuess = letterGuess.toLowerCase();
}


//function for when guess button is checked
function checkGuess() {
    for (var i = 0; i < randomWords.length; ++i) {
        if (userGuess === displayWord[i]) {
            dashedWord[i] = userGuess;
        }
    }

    //if user guess is wrong, they are decremented a guess
    if (randomWords.indexOf(userGuess) === -1) {
        document.querySelector(".guesses-left").textContent = --counter;
        //if user runs out of guesses, it runs the alert below and refreshes page

        if (counter <= 0) {
            alert("Sorry, start over and try again.");
            window.location.reload();
        }
        if (randomWords === dashedWord.join('')) {
            alert("You win!");
            window.location.reload();

        }
    }

    switch (counter) {
        case 8:
            drawPlatform();
            break;

        case 7:
            drawPole();
            break;

        case 6:
            drawHead();
            break;

        case 5:
            drawBack();
            break;

        case 4:
            drawLarm();
            break;

        case 3:
            drawRarm();
            break;
        case 2:
            drawLleg();
            break;
        case 1:
            drawRleg();
            break;

    }



    //resets input to a blank space
    document.querySelector(".user-input").value = "";
    //displays
    finalDisplay = dashedWord.join(' ');
    document.querySelector(".hidden-word-display").textContent = finalDisplay;
    //restarts game w/ reset button
    document.querySelector(".reset-button-container").value = "";

    document.querySelector(".user-input").focus();

    return false;
};

//////////////////////////////////////
//reset game//
////////////////////////////////////

document.getElementById('restart-button').onclick = function () {
    location.reload();
};

document.querySelector('.game-guess-container').onsubmit = checkGuess;

////////////////////////////////////////
//end of reset//
///////////////////////////////////////

var canvas = document.getElementById('paddleCanvas'); //get the canvas element form the html.doc
var ctx = canvas.getContext("2d"); //set the context of the canvas at '2d'
ctx.lineWidth = 3; //global width of lines
ctx.strokeStyle = "black";

ctx.font = "12px monospace";
ctx.fillText("Hangman", 5, 20);


var boardW = $('#canvas').attr('width'); //get the width of the canvas
var boardH = $('#canvas').attr('height'); //get the height of the canvas



ctx.lineWidth = 3; //global width of lines


function drawPlatform() {
    //draws platform
    ctx.lineWidth = 4; //global width of lines

    ctx.beginPath();
    ctx.moveTo(269, 279);
    ctx.lineTo(32, 279);
    ctx.stroke();
}

function drawPole() {
    ctx.lineWidth = 4; //global width of lines

    //draws pole
    ctx.beginPath();
    ctx.moveTo(72, 279);
    ctx.lineTo(72, 30);
    ctx.moveTo(72, 30);
    ctx.lineTo(185, 30);
    ctx.moveTo(185, 30);
    ctx.lineTo(185, 60);
    ctx.stroke();
}

function drawHead() {
    //draws head
    ctx.beginPath();
    ctx.arc(185, 80, 18, 0, 2 * Math.PI);
    ctx.stroke();

}

function drawBack() {
    //draws back
    ctx.beginPath();
    ctx.moveTo(185, 100);
    ctx.lineTo(185, 180);
    ctx.stroke();

}

function drawLarm() {
    //draws left arm
    ctx.beginPath();
    ctx.moveTo(185, 120);
    ctx.lineTo(145, 110);
    ctx.stroke();
}

function drawRarm() {
    //draws right arm
    ctx.beginPath();
    ctx.moveTo(185, 120);
    ctx.lineTo(225, 110);
    ctx.stroke();
}

function drawLleg() {
    //draws left leg
    ctx.beginPath();
    ctx.moveTo(185, 180);
    ctx.lineTo(155, 200);
    ctx.stroke();
}

function drawRleg() {
    //draws right leg
    ctx.beginPath();
    ctx.moveTo(185, 180);
    ctx.lineTo(215, 200);
    ctx.stroke();
}
