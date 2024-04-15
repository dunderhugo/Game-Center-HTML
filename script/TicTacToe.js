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
}
resetGame.addEventListener("click",gameReset);

// Adds EventListener to each button
for(let i = 0; i < squareArr.length; i++){
    squareArr[i].addEventListener('click', function(){
        playerMove(squareArr[i]);
    });
}

var playerTurn = 0;

function playerMove(tile){
    var playerTurnDisplay = document.getElementById("playerTurnDisplay");
    let winner = false;
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
}


function checkIfTie(){
    let placedTies = 0;
    for(let i = 0; i < 10; i++){
        if(squareArr[i] && squareArr[i].textContent !== ""){
            placedTies++;
        }
    }
    if (placedTies === 9){
        window.alert("Its a tie.");
    }
}

//TODO: Refactor
//TODO: Restart game if someone wins
/* Checks if someone wins */
function checkWinnerFunc(checkOne, checkTwo, checkThree){
    if(checkOne.textContent !==""){
        if ((checkOne.textContent === checkTwo.textContent) && 
            (checkOne.textContent === checkThree.textContent))
        {
            checkOne.style.backgroundColor = "green";
            checkTwo.style.backgroundColor = "green";
            checkThree.style.backgroundColor = "green";
            setTimeout(function(){
                window.alert(checkOne.textContent+' wins!');
            },10);
            winner = true;
            return;
        }
    }
}
function threeInARowCheck(){
    checkWinnerFunc(squareArr[4], squareArr[1],squareArr[7])
    checkWinnerFunc(squareArr[4], squareArr[3],squareArr[5])
    checkWinnerFunc(squareArr[4], squareArr[0],squareArr[8])
    checkWinnerFunc(squareArr[4], squareArr[2],squareArr[6])
    checkWinnerFunc(squareArr[0], squareArr[1],squareArr[2])
    checkWinnerFunc(squareArr[0], squareArr[3],squareArr[6])
    checkWinnerFunc(squareArr[8], squareArr[7],squareArr[6])
    checkWinnerFunc(squareArr[8], squareArr[5],squareArr[2])
}

function tileBtnDisable(tileDisable){
    for (let i = 0; i < tileDisable.length; i++){

    }
}