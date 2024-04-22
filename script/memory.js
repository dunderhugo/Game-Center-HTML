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
document.getElementById("rulesBtn").addEventListener("click", () => viewsBtn(rulesDiv));
document.getElementById("highScoreBtn").addEventListener("click", () => viewsBtn(highScoreDiv));
document.getElementById("startBtn").addEventListener("click", ()=> viewsBtn(gameBoardDiv));
document.getElementById("exitRulesBtn").addEventListener("click", () => rulesDiv.style.display = "none");
document.getElementById("exitHsBtn").addEventListener("click", () => highScoreDiv.style.display = "none");