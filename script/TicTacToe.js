var s1 = document.getElementById("squareOne");
var s2 = document.getElementById("squareTwo");
var s3 = document.getElementById("squareThree");
var s4 = document.getElementById("squareFour");
var s5 = document.getElementById("squareFive");
var s6 = document.getElementById("squareSix");
var s7 = document.getElementById("squareSeven");
var s8 = document.getElementById("squareEight");
var s9 = document.getElementById("squareNine");
var playerTurn = 0;

s1.onclick = function() {playerMove(s1)};
s2.onclick = function() {playerMove(s2)};
s3.onclick = function() {playerMove(s3)};
s4.onclick = function() {playerMove(s4)};
s5.onclick = function() {playerMove(s5)};
s6.onclick = function() {playerMove(s6)};
s7.onclick = function() {playerMove(s7)};
s8.onclick = function() {playerMove(s8)};
s9.onclick = function() {playerMove(s9)};

function playerMove(tile){
    if (playerTurn % 2 === 1){
        tile.textContent = "O";
    }
    else {
        tile.textContent = "X";
    }
    playerTurn++;
    if (playerTurn % 2 === 0){
        
    }
};