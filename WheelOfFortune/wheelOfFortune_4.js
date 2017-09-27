//http://www.devtopics.com/101-great-computer-programming-quotes/  

//define varialbes

var alphabet = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var litAnswer = "TALK IS CHEAP SHOW ME THE CODE";
var answer = ['T', 'A', 'L', 'K', '_', 'I', 'S', '_', 'C', 'H', 'E', 'A', 'P', '_', 'S', 'H', 'O', 'W', '_', 'M', 'E', '_', 'T', 'H', 'E', '_', 'C', 'O', 'D', 'E'];
var board = ['_','_','_','_','-','_','_','-','_','_','_','_','_','-','_','_','_','_','-','_','_','-','_','_','_','-','_','_','_','_'];

var litAnswers = [ "TALK IS CHEAP SHOW ME THE CODE", "The Internet? Is that thing still around"];
var answers = [
    ['T', 'A', 'L', 'K', '_', 'I', 'S', '_', 'C', 'H', 'E', 'A', 'P', '_', 'S', 'H', 'O', 'W', '_', 'M', 'E', '_', 'T', 'H', 'E', '_', 'C', 'O', 'D', 'E'],
    
    ['T', 'H', 'E', '_', 'I', 'N', 'T', 'E', 'R', 'N', 'E', 'T', '_', 'I', 'S', '_', 'T', 'H', 'A', 'T', '_', 'T', 'H', 'I', 'N', 'G', '_', 'S', 'T', 'I', 'L', 'L', '_', 'A', 'R', 'O', 'U', 'N', 'D']
    ]
; 
var boards = [
    ['_','_','_','_','-','_','_','-','_','_','_','_','_','-','_','_','_','_','-','_','_','-','_','_','_','-','_','_','_','_'
     ],
    ['_','_','_','-','_','_','_','_','_','_','_','_','-','_','_','-','_','_','_','_','-','_','_','_','_','_','-','_','_','_','_','_','-','_','_','_','_','_']
];

var totalWin = 0; 
var usedAlpha;
var myBoard =[];

//onload function to display alphabet as a ul and display the boad as a ul
window.onload = function () {
    var myAlpha = document.getElementById('alpha');   //store alpha div in myAlpha variable
    var letterList = document.createElement('ul');    //store 
    for (var i =0; i < alphabet.length; i++){
        letterList.id = alphabet;
        var letters = document.createElement('li');
        letters.innerHTML = alphabet[i];
        myAlpha.appendChild(letterList);  //append ul as child of 'alpha' div node
        letterList.appendChild(letters);  //append li as child of ul
    }
    var myBoard = document.getElementById('userBoard');
    var spaces = document.createElement('ul');
    for (var y= 0; y < board.length; y++) {
        spaces.id = board[y];
        var space = document.createElement('li');
        space.innerHTML = board[y];
        myBoard.appendChild(spaces);
        spaces.appendChild(space);
    }
}

$(document).ready(function(){
    $("#spinbutt").click(function(){
        var rando = Math.floor((Math.random() * 10) + 1);
        var spinArray = ["nothing", 100, 300, 500, 700, 900, 2000, 3000, 5000, -1000, 0];
        var win = spinArray[rando];
        document.getElementById('moneyWon').innerHTML = ("$" + win + "!");
        guessPrompting(win);
     $("animation").addClass("active");
    });
    $("#guessbutt").click(function() {
        var guess = prompt("Okay, go ahead and guess the phrase...");
        if(guess.length < 31)  {
        var guessUP = guess.toUpperCase();
        var guessed = guessUP;
        }
        else {
            alert("Sorry that is incorrect!");
        }
        if (guessed == litAnswer){
            sayCongrats();
        } else {
            alert("You don't win! But we'll let you spin again...");
         }
    });
    $("spinbutt").click(function(){
    });
    

    }); 
function guessPrompting(win) {
    var guessPrompt = prompt("Please guess a letter: ");
    if (guessPrompt.length == 1) {
    var letter = guessPrompt.toUpperCase();
    document.getElementById('guessedLetter').innerHTML = ("You guessed:" + letter + "!");
    letterCheck(letter, win);
    }
    else {
        alert("One Letter At A Time Please");
    }
    if (win == -1000) {
        document.getElementById('uhOh').innerHTML = ('(Uh-Oh)');
    }
    else {
        document.getElementById('uhOh').innerHTML = (' ');
    }
};
function letterCheck(letter, win) {
    var lettersUp = letter.toUpperCase();
    var letterUp = lettersUp;
    for (var i = 0; i < answer.length; i++) {               //loop through answer
        if (letterUp == answer[i]) {                        //if letter equals iteration of answer
            spinTotal(win);                                 //call spinTotal() function
            modBoard(letterUp);                             //call modBoard() function
            modAlph(letterUp);                              //call modAlpha() function
            yesLetter(letterUp);
            break;
        } else {
            sorryLetter(letter);
            modAlph(letterUp);
        }
    };
};
function modAlph(letterUp) {
    for (var a =0; a < alphabet.length; a++){    //loop through the alphabet     
        if (letterUp == alphabet[a]) {           //if the guessed letter equals a value in the alphabet
            alphabet[a] = " ";                   //that value is now replaced with a blank
            var myAlpha = alphabet.join(" ");    
            alpha = document.getElementById('alpha'); //element alpha contained in alpha variable
            alpha.innerHTML = myAlpha;
        }
    };
}

function modBoard(letterUp) {
    for (var x = 0; x < answer.length; x++) {               //loop through answer array
        myBoard = document.getElementById('userBoard');     //get the id of userBoard and store it in myBoard
        if (letterUp == answer[x]) {            //if guessed letter is equal to an index in answer
            board[x] = answer[x];             //
            var newBoard = board.join(" ");   
            myBoard.innerHTML = newBoard;
        }
        if(newBoard == answer) {
            alert("congrats!");
        }
    }
}

function spinTotal(win) {
    totalWin += win;
    document.getElementById("tally").innerHTML = "$" + totalWin;
};

function sorryLetter(letter) {
    document.getElementById('yesOrNo').innerHTML = ("--Sorry, " + letter + " is not in the phrase. You win nothing this round.--");
};

function yesLetter(letter) {
    document.getElementById('yesOrNo').innerHTML = ("--Yes, " + letter + " is in the phrase!--");
};


function sayCongrats() {
    var tally = document.getElementById('tally').value;
    prompt("YOU WIN!!!");
};


     
      

/*This code works to rotate the wheel PNG once 45 degrees but moves it's position
also the identiy of the wheel stays the same each time this function is called. Returns to the original value of 'wheel' and performs 
the rotate on the original value. How can I reassign the value of 'wheel' with the new posistion? 
function rotateWheel() {
var wheel = document.getElementById("wheel");
        wheel.src = "wheel_share.png";
        wheel.style.WebkitTransform = "rotate(45deg)";
        wheel.style.MozTransform = "rotate(45deg)";
        wheel.style.OTransform = "rotate(45deg)";
        wheel.style.msTransform = "rotate(45deg)";
        wheel.style.transform = "rotate(45deg)";
}
*/




    

    



    

    

