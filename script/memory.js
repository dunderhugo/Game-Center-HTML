var rulesDiv = document.getElementById("rulesDiv");
var highScoreDiv = document.getElementById("highScoreDiv");
var gameBoardDiv = document.getElementById("gameBoardDiv");
var gameBoard = document.getElementById("gameBoard");
var column0 = document.querySelector("#column0");
var column1 = document.querySelector("#column1");
var column2 = document.querySelector("#column2");
var column3 = document.querySelector("#column3");
//TODO: Display: flex instead of "block"
document.getElementById("rulesBtn").addEventListener("click", () => rulesDiv.style.display = "block");
document.getElementById("highScoreBtn").addEventListener("click", () => highScoreDiv.style.display = "block");
document.getElementById("startBtn").addEventListener("click", ()=> gameBoardDiv.style.display = "block");
document.getElementById("exitRulesBtn").addEventListener("click", () => rulesDiv.style.display = "none");
document.getElementById("exitHsBtn").addEventListener("click", () => highScoreDiv.style.display = "none");
// Need 12 different colors
var memoryArr = ["blue", "green", "yellow", "pink", "red"];
var flippedCards = [];
var turnsPlayed = 0;
var points = 0;
var nextCardMustMatch = false;

function cardsToColumn(amountOfCards){
    if (amountOfCards === 2)
    {

    }
    else if (amountOfCards === 3)
    {

    }
    else 
    {

    }
}
var nextCardColor;
function spawnCard(columnToSpawn){
    var countGameCard = document.querySelectorAll('.gameCard').length;
    var newCard = document.createElement("div");
    newCard.id = "card" + countGameCard;
    newCard.className = "gameCard";
    if(!nextCardMustMatch)
    {
        var randomColor = Math.floor(Math.random() * memoryArr.length);
        nextCardColor = memoryArr[randomColor];
        newCard.textContent = memoryArr[randomColor];
        memoryArr.splice(randomColor, 1)[0];
        nextCardMustMatch = true;
    }
    else
    {
        newCard.textContent = nextCardColor;
        nextCardMustMatch = false;
    }
    columnToSpawn.appendChild(newCard);
    console.log(newCard)
}
document.getElementById("addCardBtn").addEventListener("click", function(){
    spawnCard(column0);
    spawnCard(column1);
})

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
                flippedCards[1] = cardId;
                setTimeout(function(){
                    if(checkCard === event.target.textContent)
                    {
                        window.alert("Correct")
                        points += 1000;
                        removeCorrectMatches(flippedCards[0], flippedCards[1]);
                    }
                    else if(checkCard !== event.target.textContent)
                    {
                        window.alert("No match");
                        changeToDefaultColor(flippedCards[0], flippedCards[1]);
                    }
                    flippedCards = [];
                    turnsPlayed++;
                    if (turnsPlayed == 3)
                    {
                        addCardsToColumn();
                    }
                }, 500)
            }
        }
    });
});

function removeCorrectMatches(divToRemoveOne, divToRemoveTwo){
    let addColorToArray = document.getElementById(divToRemoveOne).textContent;
    memoryArr.push(addColorToArray);
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