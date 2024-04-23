var rulesDiv = document.getElementById("rulesDiv");
var highScoreDiv = document.getElementById("highScoreDiv");
var gameBoardDiv = document.getElementById("gameBoardDiv");
var gameBoard = document.getElementById("gameBoard");
var memoryArr = ["1", "2", "3", "4", "5"]

document.getElementById("addCardBtn").addEventListener("click", function(){
    var newCard = document.createElement("div");
    newCard.id = "card" + gameBoard.children.length;
    newCard.className = "gameCard";
    gameBoard.appendChild(newCard);
    console.log(newCard);
});

for (let i = 0; i < gameBoard.children.length; i++){
    let cardTextContent = document.getElementById("card" + i);
    cardTextContent.textContent = "1";
}

// Do i need this function?
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
//TODO: Display: flex instead of "none"
document.getElementById("exitRulesBtn").addEventListener("click", () => rulesDiv.style.display = "none");
document.getElementById("exitHsBtn").addEventListener("click", () => highScoreDiv.style.display = "none");

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('gameBoard').addEventListener('click', function(event) {
        if (event.target.classList.contains('gameCard')) {
            var cardId = event.target.id;
            console.log(cardId, event.target.textContent);
            colorCardChange(cardId)
        }
    });
});

function colorCardChange(card){
    let cardToChange = document.getElementById(card);
    if (cardToChange.textContent === "1"){
        cardToChange.style.backgroundColor = "black";
    }
    if (cardToChange.textContent === "2"){
        cardToChange.style.backgroundColor = "green";
    }
    if (cardToChange.textContent === "3"){
        cardToChange.style.backgroundColor = "yellow";
    }
    if (cardToChange.textContent === "4"){
        cardToChange.style.backgroundColor = "pink";
    }
    if (cardToChange.textContent === "5"){
        cardToChange.style.backgroundColor = "grey";
    }
}