//wheelOfFortune_5.js   The purpose here is to create a js file that is linked to 2 HTML files so that both HTML files can get the variables they need.  (This will be the first time I've accomplished this.)  

//First attempt will be to use an if statement.  if(wheelOfFortune.html) as a boolean to see if that will work
//Second attempt will be to use a try/except structure

//http://www.devtopics.com/101-great-computer-programming-quotes/  

//define varialbes


var litAnswers = [ "TALK IS CHEAP SHOW ME THE CODE", "The Internet? Is that thing still around"];
var answers = [
    ['T', 'A', 'L', 'K', '_', 'I', 'S', '_', 'C', 'H', 'E', 'A', 'P', '_', 'S', 'H', 'O', 'W', '_', 'M', 'E', '_', 'T', 'H', 'E', '_', 'C', 'O', 'D', 'E'],
    
    ['T', 'H', 'E', '_', 'I', 'N', 'T', 'E', 'R', 'N', 'E', 'T', '_', 'I', 'S', '_', 'T', 'H', 'A', 'T', '_', 'T', 'H', 'I', 'N', 'G', '_', 'S', 'T', 'I', 'L', 'L', '_', 'A', 'R', 'O', 'U', 'N', 'D']
    ]; 
var boards = [
    ['_','_','_','_','-','_','_','-','_','_','_','_','_','-','_','_','_','_','-','_','_','-','_','_','_','-','_','_','_','_'
     ],
    ['_','_','_','-','_','_','_','_','_','_','_','_','-','_','_','-','_','_','_','_','-','_','_','_','_','_','-','_','_','_','_','_','-','_','_','_','_','_']
];

var alphabet = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var litAnswer = "TALK IS CHEAP SHOW ME THE CODE";
var answer = ['T', 'A', 'L', 'K', '_', 'I', 'S', '_', 'C', 'H', 'E', 'A', 'P', '_', 'S', 'H', 'O', 'W', '_', 'M', 'E', '_', 'T', 'H', 'E', '_', 'C', 'O', 'D', 'E'];
var board = ['_','_','_','_','-','_','_','-','_','_','_','_','_','-','_','_','_','_','-','_','_','-','_','_','_','-','_','_','_','_'];

var totalWin = 0; 
var usedAlpha;
var myBoard =[];
var totalWin = 0;

//onload function to display alphabet as a ul and display the boad as a ul
if(document.URL == "file:///Users/Home/Desktop/PortfolioPage/Portfolio_Main/WheelOfFortune/wheelOfFortune.html"){
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
    }
    if(document.getElementById('userBoard').textContent == "T A L K - I S - C H E A P - S H O W - M E - T H E - C O D E") {
    window.open("file:///Users/Home/Desktop/PortfolioPage/Portfolio_Main/WheelOfFortune/wheelOfFortuneCongrats.html");
        }   
}

function spinTotal(win) {
    totalWin += win;
    document.getElementById("tally").innerHTML = "$" + totalWin;
    return totalWin;
};

function sorryLetter(letter) {
    document.getElementById('yesOrNo').innerHTML = ("--Sorry, " + letter + " is not in the phrase. You win nothing this round.--");
};

function yesLetter(letter) {
    document.getElementById('yesOrNo').innerHTML = ("--Yes, " + letter + " is in the phrase!--");
};

function sayCongrats() {
    var tally = document.getElementById('tally').value;
    window.open("file:///Users/Home/Desktop/PortfolioPage/Portfolio_Main/WheelOfFortune/wheelOfFortuneCongrats.html");
};

};
//add a document.ready funciton if you're going to keep this file  just need the $(function(){ })  (anonymous version for document ready)


if(document.URL == "file:///Users/Home/Desktop/PortfolioPage/Portfolio_Main/WheelOfFortune/wheelOfFortuneCongrats.html"){
 $('.cTitle').hide().each(function(index) {          // Hide photos items
    $(this).delay(450 * index).fadeIn(1200);  
     // Then fade them in one at a time
     $('#congratsMess').hide().show(900);
    });  


document.getElementById("tally").innerHTML = totalWin;
};


/*      links of for testing live pages
if(document.URL == "http://josephs.online/WheelOfFortune/wheelOfFortune.html"){
    window.open("http://josephs.online/WheelOfFortune/wheelOfFortuneCongrats.html");

        links for testing local pages
if(document.URL == "file:///Users/Home/Desktop/PortfolioPage/Portfolio_Main/WheelOfFortune/wheelOfFortune.html"){
window.open("file:///Users/Home/Desktop/PortfolioPage/Portfolio_Main/WheelOfFortune/wheelOfFortuneCongrats.html");

*/