var rulesDiv = document.getElementById("rulesDiv");
var highScoreDiv = document.getElementById("highScoreDiv");
var gameBoardDiv = document.getElementById("gameBoardDiv");
var gameBoard = document.getElementById("gameBoard");
var memoryArr = ["blue", "green", "yellow", "pink", "brown"]

document.getElementById("addCardBtn").addEventListener("click", function(){
    var newCard = document.createElement("div");
    newCard.id = "card" + gameBoard.children.length;
    newCard.className = "gameCard";
    newCard.textContent = "2";
    gameBoard.appendChild(newCard);
    console.log(newCard);
});

// Changes the textContent of cards
var indexColorCardChange = 0;

for (let i = 0; i < gameBoard.children.length; i+=2){
    let matchCardOne = document.getElementById("card" + i);
    let matchCardTwo = document.getElementById("card" + (i + 1));
    let randomColor = Math.floor(Math.random() * memoryArr.length)
    matchCardOne.textContent = memoryArr[randomColor];
    matchCardTwo.textContent = memoryArr[randomColor];
    memoryArr.splice(randomColor, 1)[0];
    console.log(memoryArr)
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
    if (cardToChange.textContent === "blue"){
        cardToChange.style.backgroundColor = "blue";
    }
    if (cardToChange.textContent === "green"){
        cardToChange.style.backgroundColor = "green";
    }
    if (cardToChange.textContent === "yellow"){
        cardToChange.style.backgroundColor = "yellow";
    }
    if (cardToChange.textContent === "pink"){
        cardToChange.style.backgroundColor = "pink";
    }
    if (cardToChange.textContent === "brown"){
        cardToChange.style.backgroundColor = "brown";
    }
}