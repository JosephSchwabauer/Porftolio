//define variables
var canvas;
var ctx;
//define a x and y coordinate for ball
var ballX = 50;
var ballY = 50;
//define a horizonal(x) and a vertical(y) default speeds
var ballSpeedX = 16;
var ballSpeedY = 4;

//default scores for each player
var player1Score = 0;
var player2Score = 0;
const WINNING_SCORE = 3;

//set boolean value for win screen
var showingWinScreen = false;

//define starting positions for eacy paddle
var paddle1Y = 250;
var paddle2Y = 250;
//define horizontal thickness of each paddle
const PADDLE_THICKNESS = 10;
//define vertical height of each paddle
const PADDLE_HEIGHT = 100;

//funtion to determine the position of the users mouse
function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

function calcTouchPos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var touchX = evt.clientX - rect.left - root.scrollLeft;
    var touchY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: touchX,
        y: touchY
    };
}


function handleMouseClick(evt) {
    if (showingWinScreen) {
        player1Score = 0;
        player2Score = 0;
        showingWinScreen = false;
    }
}

function touchHandler(evt) {
    if (showingWinScreen) {
        player1Score = 0;
        player2Score = 0;
        showingWinScreen = false;
    }
}

window.onload = function () {
    canvas = document.getElementById('paddleCanvas');
    ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;


    var framesPerSecond = 30;
    setInterval(function () {
        moveEverything();
        drawEverything();
    }, 1000 / framesPerSecond);

    canvas.addEventListener('mousedown', handleMouseClick);

    canvas.addEventListener('mousemove',
        function (evt) {
            var mousePos = calculateMousePos(evt);
            paddle1Y = mousePos.y - (PADDLE_HEIGHT / 2);
        });

    canvas.addEventListener("touchstart", touchHandler, true);
    canvas.addEventListener('touchstart',
        function (evt) {
            var touchPos = calcTouchPos(evt);
            paddle1Y = touchPos.y - (PADDLE_HEIGHT / 2);

        })

}

function ballReset() {
    if (player1Score >= WINNING_SCORE ||
        player2Score >= WINNING_SCORE) {

        showingWinScreen = true;

    }

    ballSpeedX = -ballSpeedX;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
}

function computerMovement() {
    var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT / 2);
    if (paddle2YCenter < ballY - 35) {
        paddle2Y = paddle2Y + 6;
    } else if (paddle2YCenter > ballY + 35) {
        paddle2Y = paddle2Y - 6;
    }
}

function moveEverything() {
    if (showingWinScreen) {
        return;
    }

    computerMovement();

    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if (ballX < 0) {
        if (ballY > paddle1Y &&
            ballY < paddle1Y + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;

            var deltaY = ballY -
                (paddle1Y + PADDLE_HEIGHT / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player2Score++; // must be BEFORE ballReset()
            ballReset();
        }
    }
    if (ballX > canvas.width) {
        if (ballY > paddle2Y &&
            ballY < paddle2Y + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;

            var deltaY = ballY -
                (paddle2Y + PADDLE_HEIGHT / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player1Score++; // must be BEFORE ballReset()
            ballReset();
        }
    }
    if (ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
}

function drawNet() {
    for (var i = 0; i < canvas.height; i += 40) {
        colorRect(canvas.width / 2 - 1, i, 2, 20, 'white');
    }
}

function drawEverything() {
    // next line blanks out the screen with black
    colorRect(0, 0, canvas.width, canvas.height, 'grey');

    if (showingWinScreen) {
        ctx.fillStyle = 'white';

        if (player1Score >= WINNING_SCORE) {
            ctx.fillText("Left Player Won", 350, 200);
        } else if (player2Score >= WINNING_SCORE) {
            ctx.fillText("Right Player Won", 350, 200);
        }

        ctx.font = "lighter 30px Arial red";


        ctx.fillText("click to continue", 350, 500);
        return;
    }

    drawNet();

    // this is left player paddle
    colorRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');

    // this is right computer paddle
    colorRect(canvas.width - PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');

    // next line draws the ball
    colorCircle(ballX, ballY, 10, 'black');
    ctx.font = "lighter 30px Arial";

    ctx.fillText(player1Score, 100, 100);
    ctx.fillText(player2Score, canvas.width - 100, 100);
}

function colorCircle(centerX, centerY, radius, drawColor) {
    ctx.fillStyle = drawColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    ctx.fill();
}

function colorRect(leftX, topY, width, height, drawColor) {
    ctx.fillStyle = drawColor;
    ctx.fillRect(leftX, topY, width, height);
}
