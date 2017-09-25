


//define varialbes
var alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var board = ['_','_','_','_','-','_','_','-','_','_','_','_','_','-','_','_','_','_','-','_','_','-','_','_','_','-','_','_','_','_'];

var answer = ['T', 'A', 'L', 'K', '_', 'I', 'S', '_', 'C', 'H', 'E', 'A', 'P', '_', 'S', 'H', 'O', 'W', '_', 'M', 'E', '_', 'T', 'H', 'E', '_', 'C', 'O', 'D', 'E'];
var litAnswer = "TALK IS CHEAP SHOW ME THE CODE";
var totalWin = 0; 
var usedAlpha;
var myBoard =[];

//onload function to display alphabet as a ul and display the boad as a ul
window.onload = function () {
    var myAlpha = document.getElementById('alpha');   //store alpha div in myAlpha variable
    var letterList = document.createElement('ul');    //create a ul tag and store it in 'letterList'
    for (var i =0; i < alphabet.length; i++){         //loop through the alphabet variable
        letterList.id = alphabet;                     //associate the letterList with 'alphabet'
        var letters = document.createElement('li');   //create an li and store it in 'letters'
        letters.innerHTML = alphabet[i];              //for the li in letters place the current iteration of the alphabet
        myAlpha.appendChild(letterList);  //append the ul as child of 'alpha' div node
        letterList.appendChild(letters);  //append li(letters) as child of ul(letterList)
    }
    var myBoard = document.getElementById('userBoard');   //store the userBoard id of the page inside 'myBoard'
    var spaces = document.createElement('ul');            //create a ul and store it in the variable 'spaces'
    for (var x= 0; x < board.length; x++) {               //for each iteration in the board variable
        spaces.id = board;                                //associate the spaces ul with the board array
        var space = document.createElement('li');         //create an li
        space.innerHTML = board[x];                       //assign the current iteration to a 'space' li
        myBoard.appendChild(spaces);                      //append the spaces ul to the myBoard element
        spaces.appendChild(space);                        //append each space li to the spaces ul
    }
}

$(document).ready(function(){                          //load this function when the document is ready
    $("#spinbutt").click(function(){                   //on click of the #spinbutt id
        var rando = Math.floor((Math.random() * 10) + 1);       //find a random number between 1 and 11
        var spinArray = ["nothing", 100, 300, 500, 700, 900, 2000, 3000, 5000, -1000, 0];
        var win = spinArray[rando];                     //call spinArray function while passing the random number
        document.getElementById('moneyWon').innerHTML = ("$" + win + "!");  //display the money the random number generated
        guessPrompting(win);                            //call the guessPrompting function while passing the random number       generated
    });
    $("#guessbutt").click(function() {                  //when guessbutt is clicked
        var guess = prompt("Okay, go ahead and guess the phrase...");   //prompt for the user to guess the phrase
        if(guess.length < 31)  {                                //security measuer, if the guess is under 31 in length
        var guessUP = guess.toUpperCase();                      //put the guess in uppercase
        var guessed = guessUP;                                  //assign the uppercase guess to variable 'guessed'
        }
        else {                          
            alert("Sorry that is incorrect!");         //otherwise alert a sorry message for the user
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
function sorry(letter) {
    document.getElementById('guessedLetter').innerHTML = ("Sorry, " + letter + " is not in the phrase!");
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




    

    

