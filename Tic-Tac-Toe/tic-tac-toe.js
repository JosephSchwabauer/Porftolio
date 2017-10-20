  var canvas = document.getElementById('canvas'); //get the canvas element form the html.doc
  var ctx = canvas.getContext("2d"); //set the context of the canvas at '2d'
  ctx.lineWidth = 4; //global width of lines

  var boardW = $('#canvas').attr('width'); //get the width of the canvas
  var boardH = $('#canvas').attr('height'); //get the height of the canvas

  var radius = 105; //global length of the radius
  var randoSpace = Math.floor(Math.random() * 9);

    //attempting an array of objects! 
    var spaces = [topL, topM, topR, midL, midM, midR, botL, botM, botR];
    var computer;
    var human;
    var play = computer;

  //box object constructor
  function Box() {
      //draw walls of the boxes
      this.drawWalls = function (x, y, h, w) {
          this.x = x; //value for the x-axis
          this.y = y; //value for the y-axis
          this.h = h; //the height of the rectangle
          this.w = w; //the width of the rectangle
          ctx.strokeRect(x, y, h, w); //draws the rectangle(box)
      }

      //draws the circle in whichever box object it is called on
      this.drawC = function (x, y) {
          this.x = x; //x-coordinate of the center of the circle
          this.y = y; //y-coordinate of the center of the circle
          ctx.strokeStyle = "red"; //color of the circle
          ctx.beginPath(); //initiates the circle
          ctx.arc(x, y, radius, Math.PI * 2, false); //sets the parameters of the circle 
          ctx.stroke(); //draws the circle
      }

      //draws the x in whichever box object it is called on
      this.drawX = function () {
          this.x = x;
      }

  }

window.onload = function () {
    spaces[randoSpace].drawC;
    
}

  //draws 9 obect boxes that represent the game board
  var topL = new Box('topL');
  topL.drawWalls(0, 0, boardW / 3, boardH / 3);
  var topM = new Box('topM');
  topM.drawWalls(boardW / 3, 0, boardW / 3, boardH / 3);
  var topR = new Box('topR');
  topR.drawWalls(boardW / 1.5, 0, boardW / 3, boardH / 3);
  var midL = new Box('midL');
  midL.drawWalls(0, boardH / 3, boardW / 3, boardH / 3);
  var midM = new Box('midM');
  midM.drawWalls(boardW / 3, boardH / 3, boardW / 3, boardH / 3);
  var midR = new Box('midR');
  midR.drawWalls(boardW / 1.5, boardH / 3, boardW / 3, boardH / 3);
  var botL = new Box('botL');
  botL.drawWalls(0, boardH / 1.5, boardW / 3, boardH / 3);
  var botM = new Box('botM');
  botM.drawWalls(boardW / 3, boardH / 1.5, boardW / 3, boardH / 3);
  var botR = new Box('botR');
  botR.drawWalls(boardW / 1.5, boardH / 1.5, boardW / 3, boardH / 3);

  //call each circle 
  //var topLcirc = topL.drawC(boardW / 6, boardH / 6);
  //var topMcirc = topM.drawC(boardW / 2, boardH / 6);
  //var topRcirc = topR.drawC(boardW / 1.20, boardH / 6);
  //var midLcirc = midL.drawC(boardW / 6, boardH / 2);
  //var midMcirc = midM.drawC(boardW / 2, boardH / 2);
  //var midRcirc = midR.drawC(boardW / 1.2, boardH / 2);
  //var botLcirc = botL.drawC(boardW / 6, boardH / 1.2);
  //var botMcirc = botM.drawC(boardW / 2, boardH / 1.2);
  //var botRcirc = botR.drawC(boardW / 1.2, boardH / 1.2);

  ctx.strokeStyle = "blue";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(11, 11); //(11,11)
  ctx.lineTo(boardW / 3 - 11, boardH / 3 - 11); //(200, 211)
  ctx.moveTo(11, boardH / 3 - 11); //(211, 11)
  ctx.lineTo(boardW / 3 - 11, 11); //(11, 211)

  //top middle x
  ctx.moveTo(boardW / 3 + 11, 11);
  ctx.lineTo(boardW / 1.5 - 11, boardH / 3 - 11);
  ctx.moveTo(boardW / 1.5 - 11, 0 + 11);
  ctx.lineTo(233, 211);

  //top right x
  ctx.moveTo(boardW / 1.5 + 11, 11);
  ctx.lineTo(boardW - 11, boardH / 3 - 11);
  ctx.moveTo(boardW - 11, 11);
  ctx.lineTo(boardW / 1.5 + 11, boardH / 3 - 11);

  //middle left x
  ctx.moveTo(11, boardH / 3 + 11);
  ctx.lineTo(boardW / 3 - 11, boardH / 1.5 - 11);
  ctx.moveTo(boardW / 3 - 11, boardH / 3 + 11);
  ctx.lineTo(11, boardH / 1.5 - 11);


  //middle middle x
  ctx.moveTo(boardW / 3 + 11, boardH / 3 + 11);
  ctx.lineTo(boardW / 1.5 - 11, boardH / 1.5 - 11);
  ctx.moveTo(boardW / 1.5 - 11, boardH / 3 + 11);
  ctx.lineTo(boardW / 3 + 11, boardH / 1.5 - 11);

  //middle right x
  ctx.moveTo(boardW / 1.5 + 11, boardH / 3 + 11);
  ctx.lineTo(boardW - 11, boardH / 1.5 - 11);
  ctx.moveTo(boardW - 11, boardH / 3 + 11);
  ctx.lineTo(boardW / 1.5 + 11, boardH / 1.5 - 11);

  //bottom left x
  ctx.moveTo(11, boardH / 1.5 + 11);
  ctx.lineTo(boardW / 3 - 11, boardH - 11);
  ctx.moveTo(boardW / 3 - 11, boardH / 1.5 + 11);
  ctx.lineTo(11, boardH - 11);

  //bottom middle x
  ctx.moveTo(boardW / 3 + 11, boardH - 11);
  ctx.lineTo(boardW / 1.5 - 11, boardH / 1.5 + 11);
  ctx.moveTo(boardW / 1.5 - 11, boardH - 11);
  ctx.lineTo(boardW / 3 + 11, boardH / 1.5 + 11);

  //bottom right x
  ctx.moveTo(boardW / 1.5 + 11, boardH - 11);
  ctx.lineTo(boardW - 11, boardH / 1.5 + 11);
  ctx.moveTo(boardW - 11, boardH - 11);
  ctx.lineTo(boardW / 1.5 + 11, boardH / 1.5 + 11);
  ctx.stroke();



  /*

    //bottom right x
    ctx.moveTo(455, 655);
    ctx.lineTo(655, 455);
    ctx.moveTo(655, 655);
    ctx.lineTo(455, 455);
    ctx.stroke();


    //bottom left x
    ctx.moveTo(11,455);
    ctx.lineTo(211,655);
    ctx.moveTo(211,455);
    ctx.lineTo(11, 655);


      //top middle x
    ctx.moveTo(233,11);
    ctx.lineTo(433,211);
    ctx.moveTo(433,11);
    ctx.lineTo(233,211);

    //top right x
    ctx.moveTo(455,11);
    ctx.lineTo(655,211);
    ctx.moveTo(655,11);
    ctx.lineTo(455,211);


    //middle row
    //middle left x
    ctx.moveTo(11,233);
    ctx.lineTo(211,433);
    ctx.moveTo(211,233);
    ctx.lineTo(11,433);

    //middle middle x
    ctx.moveTo(233, 233);
    ctx.lineTo(433,433);
    ctx.moveTo(433, 233);
    ctx.lineTo(233, 433);

    //middle right x
    ctx.moveTo(455,233);
    ctx.lineTo(655,433);
    ctx.moveTo(655, 233);
    ctx.lineTo(455, 433);

    //bottom left x
    ctx.moveTo(11,455);
    ctx.lineTo(211,655);
    ctx.moveTo(211,455);
    ctx.lineTo(11, 655);

    //bottom middle x
    ctx.moveTo(233,655);
    ctx.lineTo(433,455);
    ctx.moveTo(433,655);
    ctx.lineTo(233,455);

    //bottom right x
    ctx.moveTo(455, 655);
    ctx.lineTo(655, 455);
    ctx.moveTo(655, 655);
    ctx.lineTo(455, 455);
    ctx.stroke();

    /*


    /*attempting an array of objects! 
    var spaces = [topLeft(),
       topMid(), 
      topRight(), 
         midLeft(), 
         midMid(), 
         midRight(), 
         botLeft(), 
         botMid(), 
         botRight()];

    var computer;
    var play = computer;


   
    //9 functions for each space
        
    function topL() {
        if(play === computer){
            //draw the circles 
            ctx.lineWidth = 4;
            ctx.strokeStyle = "red";
            //top left circle
            ctx.beginPath();
            ctx.arc(111,111,105, Math.PI * 2, false);
            ctx.stroke();
        }
    };

      
    function topM() {
        if(play === computer){
             //draw the circles 
            ctx.lineWidth = 4;
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.arc(333,111,105, Math.PI * 2, false);
            ctx.stroke();
        }
    };
    };

      /*
    function topR(play){
        if(play === computer){ 
            //draw the circles 
            ctx.lineWidth = 4;
            ctx.strokeStyle = "red";}
            ctx.beginPath();
            ctx.arc(555,111,105, Math.PI * 2, false);
            ctx.stroke();
  */





  /*
  X's written with stroke();
  ctx.strokeStyle = "turquoise";
  ctx.lineWidth = 4;
  ctx.beginPath();
  //top row
  //top left x
  ctx.moveTo(11, 11);
  ctx.lineTo(200, 211);
  ctx.moveTo(211, 11);
  ctx.lineTo(11,211);

  //top middle x
  ctx.moveTo(233,11);
  ctx.lineTo(433,211);
  ctx.moveTo(433,11);
  ctx.lineTo(233,211);

  //top right x
  ctx.moveTo(455,11);
  ctx.lineTo(655,211);
  ctx.moveTo(655,11);
  ctx.lineTo(455,211);


  //middle row
  //middle left x
  ctx.moveTo(11,233);
  ctx.lineTo(211,433);
  ctx.moveTo(211,233);
  ctx.lineTo(11,433);

  //middle middle x
  ctx.moveTo(233, 233);
  ctx.lineTo(433,433);
  ctx.moveTo(433, 233);
  ctx.lineTo(233, 433);

  //middle right x
  ctx.moveTo(455,233);
  ctx.lineTo(655,433);
  ctx.moveTo(655, 233);
  ctx.lineTo(455, 433);

  //bottom left x
  ctx.moveTo(11,455);
  ctx.lineTo(211,655);
  ctx.moveTo(211,455);
  ctx.lineTo(11, 655);

  //bottom middle x
  ctx.moveTo(233,655);
  ctx.lineTo(433,455);
  ctx.moveTo(433,655);
  ctx.lineTo(233,455);

  //bottom right x
  ctx.moveTo(455, 655);
  ctx.lineTo(655, 455);
  ctx.moveTo(655, 655);
  ctx.lineTo(455, 455);
  ctx.stroke();

  /*
  X's written using stokeRect instead of stroke();
  ctx.strokeStyle='red';
  //top row
  //top left x
  ctx.strokeRect(11,11,0,200);
  ctx.strokeRect(211,11,0,200);
  //top middle x
  ctx.strokeRect(233,11,0,200);
  ctx.strokeRect(433,11,0,200);
  //top right x
  ctx.strokeRect(455,11,0,200);
  ctx.strokeRect(655,11,0,200);
  //middle row
  //middle left x
  ctx.strokeRect(11,233,0,200);
  ctx.strokeRect(211,233,0,200);
  //middle middle x
  ctx.strokeRect(233,233,0,200);
  ctx.strokeRect(433,233,0,200);
  //middle right x
  ctx.strokeRect(455,233,0,200);
  ctx.strokeRect(655,233,0,200);
  //bottom left x
  ctx.strokeRect(11,455,0,200);
  ctx.strokeRect(211,455,0,200);
  //bottom middle x
  ctx.strokeRect(233,455,0,200);
  ctx.strokeRect(433,455,0,200);
  //bottom right x
  ctx.strokeRect(455,455,0,200);
  ctx.strokeRect(655,455,0,200);

  */