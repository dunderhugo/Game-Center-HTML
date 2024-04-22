var rulesDiv = document.getElementById("rulesDiv");
var highScoreDiv = document.getElementById("highScoreDiv");
var gameBoardDiv = document.getElementById("gameBoardDiv");
var gameBoard = document.getElementById("gameBoard");

document.getElementById("addCardBtn").addEventListener("click", function(){
    var newCard = document.createElement("div");
    newCard.id = "card" + gameBoard.children.length;
    newCard.className = "gameCard";
    gameBoard.appendChild(newCard);
});

//TODO: Refactor
function viewsBtn(btnPressed){
    if (btnPressed.style.display === "none" || btnPressed.style.display === "")
    {
        btnPressed.style.display = "block";
    } 
    else 
    {
        btnPressed.style.display = "none";
    }
}
document.getElementById("rulesBtn").addEventListener("click", function(){
    viewsBtn(rulesDiv);
});
document.getElementById("exitRulesBtn").addEventListener("click", function(){
    rulesDiv.style.display = "none";
});

document.getElementById("highScoreBtn").addEventListener("click", function(){
    viewsBtn(highScoreDiv);
});
document.getElementById("exitHsBtn").addEventListener("click", function(){
    highScoreDiv.style.display = "none";
});

document.getElementById("startBtn").addEventListener("click", function(){
    viewsBtn(gameBoardDiv);
});