//TODO?: make sqaureArr an 2D array
//TODO: More readable code, refactor and add comments
//TODO: File for stats, button to reset stats
//TODO: Naming stuff more understandable

// Makes buttons from HTML to seperate values
var squareArr = [];
for (let i = 1; i <= 9; i++){
    squareArr.push(document.getElementById("square" + i));
}

//TODO: Change so its not a reload() 
var resetGame = document.getElementById("resetGame");
function gameReset(){
    location.reload();
};
resetGame.addEventListener("click",gameReset);

// Adds EventListener to each button
for(let i = 0; i < squareArr.length; i++){
    squareArr[i].addEventListener('click', function(){
        playerMove(squareArr[i]);
    });
};

var playerTurn = 0;

function playerMove(tile){
    var playerTurnDisplay = document.getElementById("playerTurnDisplay");
    var winner = false;
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
    setTimeout(threeInARowCheck, 10);
    if (winner = false){
       setTimeout(checkIfTie, 10);
    }
    
};


function checkIfTie(){
    let placedTies = 0;
    for(let i = 0; i < 10; i++){
        if(squareArr[i] && squareArr[i].textContent !== ""){
            placedTies++;
        };
    };
    if (placedTies === 9){
        window.alert("Its a tie :(((");
    };
};

//TODO: Refactor, could be done with less code, and less cluttered 
//TODO: Make background green if it's three in a row
//TODO: Make something other than alert, and also display who actually wins
//TODO: Restart game if someone wins
function threeInARowCheck(){
    for (i = 0; i < 10; i++)
    {
        if (squareArr[4].textContent !== ""){
            if ((squareArr[4].textContent === squareArr[1].textContent) && 
            (squareArr[4].textContent === squareArr[7].textContent))
            {
                window.alert();
                winner = true;
                return;
            }
            if((squareArr[4].textContent === squareArr[3].textContent) && 
            (squareArr[4].textContent === squareArr[5].textContent))
            {
                window.alert();
                winner = true;
                return;
            }
            if((squareArr[4].textContent === squareArr[0].textContent) && 
            (squareArr[4].textContent === squareArr[8].textContent))
            {
                window.alert();
                winner = true;
                return;
            }
            if((squareArr[4].textContent === squareArr[6].textContent) && 
            (squareArr[4].textContent === squareArr[2].textContent))
            {
                window.alert();
                winner = true;
                return;
            }
        }
        if (squareArr[0].textContent !== ""){
            if ((squareArr[0].textContent === squareArr[1].textContent) && 
            (squareArr[0].textContent === squareArr[2].textContent))
            {
                window.alert();
                winner = true;
                return;
            }
            if((squareArr[0].textContent === squareArr[3].textContent) && 
            (squareArr[0].textContent === squareArr[6].textContent))
            {
                window.alert();
                winner = true;
                return;
            }
        }
        if (squareArr[8].textContent !== ""){
            if ((squareArr[8].textContent === squareArr[7].textContent) && 
            (squareArr[8].textContent === squareArr[6].textContent))
            {
                window.alert();
                winner = true;
                return;
            }
            if((squareArr[8].textContent === squareArr[5].textContent) && 
            (squareArr[8].textContent === squareArr[2].textContent))
            {
                window.alert();
                winner = true;
                return;
            }
        }
    }
};