var rulesDiv = document.getElementById("rulesDiv");
var highScoreDiv = document.getElementById("highScoreDiv");
var gameBoardDiv = document.getElementById("gameBoardDiv");
var gameBoard = document.getElementById("gameBoard");
// Need 12 different colors
var memoryArr = ["blue", "green", "yellow", "pink", "red"];
var flippedCards = [];

document.getElementById("addCardBtn").addEventListener("click", function(){
    var newCard = document.createElement("div");
    newCard.id = "card" + gameBoard.children.length;
    newCard.className = "gameCard";
    newCard.textContent = "2";
    gameBoard.appendChild(newCard);
    console.log(newCard);
});

// Changes the textContent of cards
for (let i = 0; i < gameBoard.children.length; i+=2){
    let matchCardOne = document.getElementById("card" + i);
    let matchCardTwo = document.getElementById("card" + (i + 1));
    let randomColor = Math.floor(Math.random() * memoryArr.length)
    matchCardOne.textContent = memoryArr[randomColor];
    matchCardTwo.textContent = memoryArr[randomColor];
    memoryArr.splice(randomColor, 1)[0];
    console.log(memoryArr)
}

//TODO: Display: flex instead of "block"
document.getElementById("rulesBtn").addEventListener("click", () => rulesDiv.style.display = "block");
document.getElementById("highScoreBtn").addEventListener("click", () => highScoreDiv.style.display = "block");
document.getElementById("startBtn").addEventListener("click", ()=> gameBoardDiv.style.display = "block");
document.getElementById("exitRulesBtn").addEventListener("click", () => rulesDiv.style.display = "none");
document.getElementById("exitHsBtn").addEventListener("click", () => highScoreDiv.style.display = "none");

//TODO: Refactor
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('gameBoard').addEventListener('click', function(event) {
        if (event.target.classList.contains('gameCard')) {
            var cardId = event.target.id;
            colorCardChange(cardId)
            if (flippedCards.length < 1)
            {
                flippedCards[0] = cardId;
                checkCard = event.target.textContent;
            }
            else if (flippedCards[0] === cardId)
            {
                window.alert("Card is already showing")
            }
            else 
            {
                if(checkCard === event.target.textContent)
                {
                    flippedCards[1] = cardId;
                    setTimeout(function(){
                        window.alert("Correct")
                        removeCorrectMatches(flippedCards[0], flippedCards[1]);
                    },500);
                }
                else if(checkCard !== event.target.textContent)
                {
                    flippedCards[1] = cardId;
                    setTimeout(function() {
                        window.alert("No match");
                        changeToDefaultColor(flippedCards[0], flippedCards[1]);
                    }, 500);
                }
                flippedCards = [];
            }
        }
    });
});

function removeCorrectMatches(divToRemoveOne, divToRemoveTwo){
    var removeDivOne = document.getElementById(divToRemoveOne)
    var removeDivTwo = document.getElementById(divToRemoveTwo)
    removeDivOne.remove(); 
    removeDivTwo.remove();
}

function changeToDefaultColor(colorOne, colorTwo){
    var removeOne = document.getElementById(colorOne)
    var removeTwo = document.getElementById(colorTwo)
    removeOne.style.backgroundColor = "";
    removeTwo.style.backgroundColor = "";
}

function colorCardChange(card){
    let cardToChange = document.getElementById(card);
    switch (cardToChange.textContent) 
    {
        case "blue":
            cardToChange.style.backgroundColor = "blue";
            break;
        case "green":
            cardToChange.style.backgroundColor = "green";
            break;
        case "yellow":
            cardToChange.style.backgroundColor = "yellow";
            break;
        case "pink":
            cardToChange.style.backgroundColor = "pink";
            break;
        case "red":
            cardToChange.style.backgroundColor = "red";
            break;
        default:
            break;
    }
}