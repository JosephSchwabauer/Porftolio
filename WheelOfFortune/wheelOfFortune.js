
//var answer = "WOW";
var answer = "TALK IS CHEAP, SHOW ME THE CODE";
var totalWin = 0; 
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var usedAlpha;

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

function guessPrompting(win) {
    var letter;
    var guessPrompt = prompt("Please guess one letter: ");
    letter = guessPrompt.toUpperCase();
    document.getElementById('guessedLetter').innerHTML = ("You guessed " + letter + "!");
    letterCheck(letter, win);
};
   
function modBoard(letterUp) {
    //var answer="TALKISCHEAPSHOWMETHECODE"; 
    var answer = ['T','A','L','K','_','I','S','_','C','H','E','A','P','_','S','H','O','W','_','M','E','_','T','H','E','_','C','O','D','E'];
    var board = ['_','_','_','_',' ','_','_',' ','_','_','_','_','_',' ','_','_','_','_',' ','_','_',' ','_','_','_',' ','_','_','_','_'];
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
 
        
        
    
        
          
    /*
    6----7----8---8-----7
    board =&nbsp _ _ _ _ &nbsp _ _  &nbsp _ _ _ _ _, &nbsp  _ _ _ _  &nbsp _ _  &nbsp _ _ _ &nbsp  _ _ _ _ 
    answer=xxxxxxtxaxlxkxxxxxxxixsxxxxxxxxcxhxexaxp,xxxxxxxxsxhxoxwxxxxxxxxmxexxxxxxxxtxhxexxxxxxxxcxoxdxe
    index =01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234
    tens =            10        20        30        40       50        60        70         80       90
    answer=______t_a_l_k_______i_s________c_h_e_a_p,________s_h_o_w________m_e________t_h_e________c_o_d_e";
    var  usedBoard = "&nbsp _ _ _ _ &nbsp _ _  &nbsp _ _ _ _ _, &nbsp  _ _ _ _  &nbsp _ _  &nbsp _ _ _ &nbsp  _ _ _ _"; 
    */
          
          
          
          

      
      





/*angle += 180;
    $('wheel').rotate(angle); */







/*
function spin() {
    var rando = Math.floor((Math.random() * 10) + 1);
        var spinArray = ["nothing", 100, 300, 500, 700, 900, 2000, 3000, 5000, -1000, 0];
        var win = spinArray[rando];
        var totalWin =+ win;
          document.getElementById('moneyTally').innerHTML = win;
          //document.getElementById('tally').innerHTML = totalWin;
        var guessPrompt = prompt("Please guess one letter: ");
          alert(guessPrompt);
          document.getElementById('guessedLetter').innerHTML = guessPrompt;
          <!--alert(win); -->
     //$(document).ready(function(){
       // $("#wheel").rotate();
    };
    
    */
    
      
      












    

    

