var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
ctx.lineWidth = 4;
function drawSnowman(x, y) {
    //left eye
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 10, Math.PI * 2, false);
    ctx.stroke();
    //right eye
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.arc((x-47), y, 10, Math.PI * 2, false);
    ctx.stroke();
    //head
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.arc((x-27), (y+21), 85, Math.PI * 2, false);
    ctx.stroke();
    //nose
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc((x-23), (y+20), 10, Math.PI * 2, false);
    ctx.stroke();

    //body
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.arc((x-27), (y+243), 135, Math.PI * 2, false);
    ctx.stroke();

    //top button
    ctx.strokeStyle = "pink";
    ctx.beginPath();
    ctx.arc((x-23), (y+173), 10, Math.PI * 2, false);
    ctx.stroke();
    //mid button
    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.arc((x-23), (y+243), 10, Math.PI * 2, false);
    ctx.stroke();
    //bottom button
    ctx.strokeStyle = "silver";
    ctx.beginPath();
    ctx.arc((x-23), (y+313), 10, Math.PI * 2, false);
    ctx.stroke();
};


drawSnowman(100,100);
/*

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var randoSpace = Math.floor(Math.random() * 9);

//draw the board
ctx.strokeRect(0,0,666,666);
ctx.strokeRect(222,0,0,666);
ctx.strokeRect(444,0,0,666);
ctx.strokeRect(0,222,666,0);
ctx.strokeRect(0,444,666,0);

/*
//attempting an array of functions 
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


window.onload = function() {
//value will change from computer to human
  //draw the circles 
ctx.lineWidth = 4;
ctx.strokeStyle = "red";
    topM();
    
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

};
    
function midL(play){
    if(play === computer){ 
        //draw the circles 
        ctx.lineWidth = 4;
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.arc(111,333,105, Math.PI * 2, false);
        ctx.stroke();
    }
};
    
function midM(play){
    if(play === computer){ 
        //draw the circles 
        ctx.lineWidth = 4;
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.arc(333,333,105, Math.PI * 2, false);
        ctx.stroke();
    }
};
function midR(play){
    if(play === computer){ 
        //draw the circles 
        ctx.lineWidth = 4;
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.arc(555,333,105, Math.PI * 2, false);
        ctx.stroke();}
};
    
function botL(play){
    if(play === computer){ 
        //draw the circles 
        ctx.lineWidth = 4;
        ctx.strokeStyle = "red";
    
    ctx.beginPath();
ctx.arc(111,555,105, Math.PI * 2, false);
ctx.stroke();}
};
function botM(play){
    if(play === computer){ 
        //draw the circles 
        ctx.lineWidth = 4;
        ctx.strokeStyle = "red";
    ctx.beginPath();
ctx.arc(333,555,105, Math.PI * 2, false);
ctx.stroke();}
};
    
function botR(play){
    if(play === computer){ 
        //draw the circles 
        ctx.lineWidth = 4;
        ctx.strokeStyle = "red";
    ctx.beginPath();
ctx.arc(555,555,105, Math.PI * 2, false);
ctx.stroke();}
};
};

*/

/*
//draw the circles 
ctx.lineWidth = 4;
ctx.strokeStyle = "red";
//top left circle
ctx.beginPath();
ctx.arc(111,111,105, Math.PI * 2, false);
ctx.stroke();

//top middle circle
ctx.beginPath();
ctx.arc(333,111,105, Math.PI * 2, false);
ctx.stroke();


//top right circle
ctx.beginPath();
ctx.arc(555,111,105, Math.PI * 2, false);
ctx.stroke();

//middle left circle
ctx.beginPath();
ctx.arc(111,333,105, Math.PI * 2, false);
ctx.stroke();


//middle middle circle
ctx.beginPath();
ctx.arc(333,333,105, Math.PI * 2, false);
ctx.stroke();


//middle right circle
ctx.beginPath();
ctx.arc(555,333,105, Math.PI * 2, false);
ctx.stroke();

//bottom left circle
ctx.beginPath();
ctx.arc(111,555,105, Math.PI * 2, false);
ctx.stroke();

//bottom middle circle
ctx.beginPath();
ctx.arc(333,555,105, Math.PI * 2, false);
ctx.stroke();

//bottom right circle
ctx.beginPath();
ctx.arc(555,555,105, Math.PI * 2, false);
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









