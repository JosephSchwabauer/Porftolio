// this code is showing an appended alphabet with the guessed letter missing
//also showing the board with the letters guessed appended to the end of the board

var answer = ['T', 'A', 'L', 'K', '_', 'I', 'S', '_', 'C', 'H', 'E', 'A', 'P', '_', 'S', 'H', 'O', 'W', '_', 'M', 'E', '_', 'T', 'H', 'E', '_', 'C', 'O', 'D', 'E'];
var alphabet = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var board = ['_','_','_','_',' ','_','_',' ','_','_','_','_','_',' ','_','_','_','_',' ','_','_',' ','_','_','_',' ','_','_','_','_'];
var totalWin = 0; 
var usedAlpha;
var myBoard =[];


window.onload = function () {
    var myAlpha = document.getElementById('alpha');
    var letterList = document.createElement('ul');
    for (var i =0; i < alphabet.length; i++){
        letterList.id = alphabet;
        var letters = document.createElement('li');
        letters.innerHTML = alphabet[i];
        myAlpha.appendChild(letterList);
        letterList.appendChild(letters);
       
}
    var myBoard = document.getElementById('userBoard');
    var spaces = document.createElement('ul');
    for (var x= 0; x < board.length; x++) {
        spaces.id = board;
        var space = document.createElement('li');
        space.innerHTML = board[x];
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
        var guessUP = guess.toUpperCase();
        var guessed = guessUP;
        if (guessed == answer){
            prompt("You win!");
        } else {
            prompt("You don't win! But we'll let you spin again...");
         }
    });
    $("spinbutt").click(function(){
});
    

}); 
function guessPrompting(win) {
    var guessPrompt = prompt("Please guess a letter: ");
    var letter = guessPrompt.toUpperCase();
    document.getElementById('guessedLetter').innerHTML = ("You guessed: " + letter + "!");
    letterCheck(letter, win);
};
function letterCheck(letter, win) {
    var lettersUp = letter.toUpperCase();
    var letterUp = lettersUp;
    for (var i = 0; i < answer.length; i++) {
        if (letterUp == answer[i]) {
            spinTotal(win);
            modBoard(letterUp);
            modAlph(letterUp);
            break;
        } else {
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
            //for (var n= 0; n < myBoard.length; n++) {       //loop through myBoard, i don't think it has any value in myBoard though
            board[x] = answer[x];             //
            var newBoard = board.join(" ");   
            myBoard.innerHTML = newBoard;
        }
        
        else{
            //answer[x] = " ";
        
        }
    }
}

function spinTotal(win) {
    totalWin += win;
    document.getElementById("tally").innerHTML = "$" + totalWin;
};
    

function sorry(letter) {
    document.getElementById('guessedLetter').innerHTML = ("Sorry, " + letter + " is not in the phrase!");
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




    

    

