var squareArr = [];
for (var i = 1; i <= 9; i++){
    squareArr.push(document.getElementById("square" + i));
}
var resetGame = document.getElementById("resetGame");


var playerTurn = 0;


// TODO: Refactor
squareArr[0].addEventListener('click', function(){
    playerMove(squareArr[0])
});
squareArr[1].addEventListener('click', function(){
    playerMove(squareArr[1])
});
squareArr[2].addEventListener('click', function(){
    playerMove(squareArr[2])
});
squareArr[3].addEventListener('click', function(){
    playerMove(squareArr[3])
});
squareArr[4].addEventListener('click', function(){
    playerMove(squareArr[4])
});
squareArr[5].addEventListener('click', function(){
    playerMove(squareArr[5])
});
squareArr[6].addEventListener('click', function(){
    playerMove(squareArr[6])
});
squareArr[7].addEventListener('click', function(){
    playerMove(squareArr[7])
});
squareArr[8].addEventListener('click', function(){
    playerMove(squareArr[8])
});


function playerMove(tile){
    var playerTurnDisplay = document.getElementById("playerTurnDisplay");
    if (tile.textContent === "O" || tile.textContent === "X"){
        window.alert("Tile is occupied")
    }
    else{
        if (playerTurn % 2 === 1){
            tile.textContent = "O";
            playerTurnDisplay.textContent = "Player X";
        }
        else {
            tile.textContent = "X";
            playerTurnDisplay.textContent = "Player O";
        }
        playerTurn++;
    }
};