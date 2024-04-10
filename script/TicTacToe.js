var squareArr = [];
for (var i = 1; i <= 9; i++){
    squareArr.push(document.getElementById("square" + i));
}
var resetGame = document.getElementById("resetGame");

var playerTurn = 0;

for(let i = 0; i < squareArr.length; i++){
    squareArr[i].addEventListener('click', function(){
        playerMove(squareArr[i])
    })
}


function playerMove(tile){
    var playerTurnDisplay = document.getElementById("playerTurnDisplay");
    if (tile.textContent === "O" || tile.textContent === "X"){
        window.alert("Tile is occupied");
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
    setTimeout(checkWinner, 10);
};

 //TODO: Refactor
function checkWinner(){
    for (i = 0; i < 10; i++)
    {
        if (squareArr[4].textContent !== ""){
            if ((squareArr[4].textContent === squareArr[1].textContent) && 
            (squareArr[4].textContent === squareArr[7].textContent))
            {
                window.alert();
                return;
            }
            if((squareArr[4].textContent === squareArr[3].textContent) && 
            (squareArr[4].textContent === squareArr[5].textContent))
            {
                window.alert();
                return;
            }
            if((squareArr[4].textContent === squareArr[0].textContent) && 
            (squareArr[4].textContent === squareArr[8].textContent))
            {
                window.alert();
                return;
            }
            if((squareArr[4].textContent === squareArr[6].textContent) && 
            (squareArr[4].textContent === squareArr[2].textContent))
            {
                window.alert();
                return;
            }
        }
        if (squareArr[0].textContent !== ""){
            if ((squareArr[0].textContent === squareArr[1].textContent) && 
            (squareArr[0].textContent === squareArr[2].textContent))
            {
                window.alert();
                return;
            }
            if((squareArr[0].textContent === squareArr[3].textContent) && 
            (squareArr[0].textContent === squareArr[6].textContent))
            {
                    window.alert();
                    return;
            }
        }
        if (squareArr[8].textContent !== ""){
            if ((squareArr[8].textContent === squareArr[7].textContent) && 
            (squareArr[8].textContent === squareArr[6].textContent))
            {
                window.alert();
                return;
            }
            if((squareArr[8].textContent === squareArr[5].textContent) && 
            (squareArr[8].textContent === squareArr[2].textContent))
            {
                    window.alert();
                    return;
            }
        }
    }
};