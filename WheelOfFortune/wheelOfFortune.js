
function Spin(answer, board, win, letter) {
var answer = ['T','A','L','K','_','I','S','_','C','H','E','A','P','_','S','H','O','W','_','M','E','_','T','H','E','_','C','O','D','E'];
var board = ['_','_','_','_',' ','_','_',' ','_','_','_','_','_',' ','_','_','_','_',' ','_','_',' ','_','_','_',' ','_','_','_','_'];
var totalWin = 0;
var letter;
this.guessPrompting = function(letter) {
    this.letter = prompt("Please guess one letter: ")
};
}


/*go to this link, working on CAREFULLY translating my functions to methods of the Spin class use the example on this link as an example https://www.w3schools.com/js/js_object_methods.asp      */

$(document).ready(function(){
    //$("#wheel").rotate(45);
    $("#spinbutt").click(function(){ 
        var rando = Math.floor((Math.random() * 10) + 1);
        var spinArray = ["nothing", 100, 300, 500, 700, 900, 2000, 3000, 5000, -1000, 0];
        var win = spinArray[rando];
        document.getElementById('moneyWon').innerHTML = (win + "!");
        guessPrompting(win);
        });
        
        
        guessPrompting(win) {
        var guessPrompt = prompt("Please guess one letter: ");
        letter = guessPrompt.toUpperCase();
        document.getElementById('guessedLetter').innerHTML = ("You guessed " + letter + "!");
        letterCheck(letter, win);
        }
    });
    
    

 /*   
letterCheck: function(letter, win){
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
    
}
    
spinTotal: function() {
    
}
    
sorry: function() {
    
}
    
modAlph: function() {
    
}
     

modBoard: function() {
    
}
    
}
    
    
    
$(document).ready(function(){
    //$("#wheel").rotate(45);
    $("#spinbutt").click(function(){ 
        var rando = Math.floor((Math.random() * 10) + 1);
        var spinArray = ["nothing", 100, 300, 500, 700, 900, 2000, 3000, 5000, -1000, 0];
        var win = spinArray[rando];
        document.getElementById('moneyWon').innerHTML = (win + "!");
        guessPrompting(win);
        });
    $("#guessbutt").click(function(){
        var guess = prompt("Okay, go ahead and guess the phrase...");
        var guessUP = guess.toUpperCase();
        var guessed = guessUP;
        if (guessed == answer) {
            prompt("You win!");
         } else {
            prompt("You don't win! But we'll let you spin again...");
            //prompt(guessed);
         }
    });
}); 



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
    
function spinTotal(win) {
    totalWin += win;
    document.getElementById("tally").innerHTML = totalWin;
};
    
function sorry(letter) {
    document.getElementById('guessedLetter').innerHTML = ("Sorry, " + letter + " is not in the phrase!");
};
    
function modAlph(letterUp) {
    //var alpha = "ABC";
    //letterUp = letter.toUpperCase;
    for (var l = 0; l < alpha.length; l++) {
        if (letterUp == alpha[l]) {
            var usedAlpha = alpha.replace(alpha[l], " ");
            document.getElementById('userAlpha').innerHTML = usedAlpha;
            // prompt("does 'A' exist at index 0");
        };
                //else {
                  //  break;
                //}
    }
};


   
function modBoard(letterUp) {
    //var answer="TALKISCHEAPSHOWMETHECODE"; 

    //var board ="012345678901234567890123";
    var aLength = answer.length;
    for (var x = 0; x < aLength; x++) {     
        if (letterUp == answer[x]) {
          board[x] = answer[x];
          var newBoard = board.join("");
          document.getElementById("userBoard").innerHTML = newBoard;
        }
            
    }
                
}
              /*  
              
        
        }
                    // else {
                   // break;
                    //var sorryLetter = prompt("Sorry, letter not found");
                    //}
                    
                     //  $("#board").val(function(i, val) {
                //      return val.replace('_', 'letter');
                  // });
                //this is printing out only letters from the 
                //for(n = 0; n < newBoard.length; n++) {
                //    if (newBoard[n] == letter){
                //  }    
                //tryThis =prompt(newBoard);
        
};
 
        
        
*/
    
        
   
          
          
          
          

      
      












    

    

