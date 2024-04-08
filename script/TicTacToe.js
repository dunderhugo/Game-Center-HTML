var squareArr = [];
for (var i = 1; i <= 9; i++){
    squareArr.push(document.getElementById("square" + i));
}

var resetGame = document.getElementById("resetGame");


var playerTurn = 0;

squareArr[0].onclick = function() {playerMove(squareArr[0])};
squareArr[1].onclick = function() {playerMove(squareArr[1])};
squareArr[2].onclick = function() {playerMove(squareArr[2])};
squareArr[3].onclick = function() {playerMove(squareArr[3])};
squareArr[4].onclick = function() {playerMove(squareArr[4])};
squareArr[5].onclick = function() {playerMove(squareArr[5])};
squareArr[6].onclick = function() {playerMove(squareArr[6])};
squareArr[7].onclick = function() {playerMove(squareArr[7])};
squareArr[8].onclick = function() {playerMove(squareArr[8])};

function playerMove(tile){
    var playerTurnDisplay = document.getElementById("playerTurnDisplay");
    if (tile.textContent === "O" || tile.textContent === "X"){
        window.alert("Tile is occupied")
    }
    else{
        if (playerTurn % 2 === 1){
            tile.textContent = "O";
        }
        else {
            tile.textContent = "X";
        }
        playerTurn++;
    }
};