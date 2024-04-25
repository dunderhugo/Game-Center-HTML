// -------------------------------------------------------------------------------
// ------------------------------Whole code comments------------------------------
//TODO: change to arrow function: () =>?
//TODO: change to querySelector or getElementBy, depending on what i need it for 
//TODO: Check code for inconsistency
// -------------------------------------------------------------------------------
var rulesDiv = document.getElementById("rulesDiv");
var highScoreDiv = document.getElementById("highScoreDiv");
var gameBoardDiv = document.getElementById("gameBoardDiv");
var currentLevelDisplay = document.querySelector("#currentLevel");
var levelScoreDisplay = document.querySelector("#levelScore");
var totalScoreDisplay = document.querySelector("#totalScore")
//TODO: Refactor
var column0 = document.querySelector("#column0");
var column1 = document.querySelector("#column1");
var column2 = document.querySelector("#column2");
var column3 = document.querySelector("#column3");
//TODO: Display: flex instead of "block"
document.getElementById("rulesBtn").addEventListener("click", () => rulesDiv.style.display = "block");
document.getElementById("highScoreBtn").addEventListener("click", () => highScoreDiv.style.display = "block");
document.getElementById("startBtn").addEventListener("click", ()=> gameBoardDiv.style.display = "flex");
document.getElementById("exitRulesBtn").addEventListener("click", () => rulesDiv.style.display = "none");
document.getElementById("exitHsBtn").addEventListener("click", () => highScoreDiv.style.display = "none");
var memoryArr = ["blue", "green", "yellow", "pink", "red", "purple", "orange", "cyan", "magenta", "teal", "lime", "indigo"];
var flippedCards = [];
var turnsPlayed = 0;
var maxPlayerTurnsPerLevel = [3,5,7];
//TODO: Get points depending on how many rows are empty when level is completed
var currentLevelPoints = 0;
var totalPoints = 0;
var nextCardMustMatch = false;
var currentLevel = 0;
var clearedCurrentLevel;
//TEMPORARY BTNS
document.getElementById("addCardBtn2").addEventListener("click", function(){ cardsToColumn(4);});

// Game play
levelToPlay(currentLevel);
var checkCard;
document.addEventListener('DOMContentLoaded', function() 
{
    document.getElementById('gameBoard').addEventListener('click', function(event) 
    {
        if (event.target.classList.contains('gameCard')) 
        {
            clearedCurrentLevel = false;
            var cardId = event.target.id;
            colorCardChange(cardId);
            if (flippedCards.length < 1)
            {
                flippedCards[0] = cardId;
                checkCard = event.target.textContent;
            }
            else if (flippedCards[0] === cardId)
            {
                window.alert("Card is already showing");
            }
            else 
            {
                flippedCards[1] = cardId;
                setTimeout(function()
                {
                    turnsPlayed++;
                    if(checkCard === event.target.textContent)
                    {
                        //TODO: remove window alert, use something else when cards
                        // are correct or not
                        window.alert("Correct");
                        currentLevelPoints += 1000;
                        levelScoreDisplay.textContent = currentLevelPoints;
                        removeCorrectMatches(flippedCards[0], flippedCards[1]);
                        if(currentLevelPoints >= 3000)
                        {
                            levelDoneScore(currentLevel);
                            nextLevel();
                            turnsPlayed = 0;
                        }
                    }
                    else if(checkCard !== event.target.textContent)
                    {
                        window.alert("No match");
                        changeToDefaultColor(flippedCards[0], flippedCards[1]);
                    }
                    flippedCards = [];
                    if (turnsPlayed == maxPlayerTurnsPerLevel[currentLevel] && clearedCurrentLevel === false)
                    {
                        spawnCard(column0);
                        spawnCard(column1);
                        turnsPlayed = 0;
                        gameOver();
                    }
                }, 500);
            }
        }
    });
});

var nextCardColor;
function spawnCard(columnToSpawn)
{
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
}

function nextLevel()
{
    if (currentLevelPoints >= 3000)
    {
        if (currentLevel === 2)
        {
            //Add view
            window.alert("You win!");
        }
        else
        {
            clearedCurrentLevel = true;
            currentLevel++;
            currentLevelDisplay.textContent = currentLevel;
            totalPoints += currentLevelPoints;
            totalScoreDisplay.textContent = totalPoints;
            currentLevelPoints = 0;
            levelScoreDisplay.textContent = currentLevelPoints;
            let gameCards = document.querySelectorAll('.gameCard');
            gameCards.forEach((card) => 
            {
                card.remove();
            });
            levelToPlay(currentLevel);
        }
    }
}

function levelDoneScore(currentLevel)
{
    var emptyCardsInColumns = [column0.children.length, column1.children.length];
    if (currentLevel === 1)
    {
        emptyCardsInColumns.push(column2.children.length);
        if (currentLevel === 2)
        {
            emptyCardsInColumns.push(column3.children.length);
        }
    }
    for(let i = 0; i < emptyCardsInColumns.length; i++)
    {
        if(emptyCardsInColumns[i] != null)
        {
            if(emptyCardsInColumns[i] === 0) currentLevelPoints += 225;
            else if (emptyCardsInColumns[i] === 1) currentLevelPoints += 125;
            else if (emptyCardsInColumns[i] === 2) currentLevelPoints += 50;
        }
    }
}

function shuffleCardPlacement(currentLevel) 
{
    let cardShuffleArr = []; 
    let gameCards = document.querySelectorAll('.gameCard');
    gameCards.forEach((card) => 
    {
        cardShuffleArr.push(card);
        card.remove();
    });
    cardShuffleArr.sort(() => Math.random() - 0.5);
    if (currentLevel === 0) 
    {
        cardShuffleArr.forEach((card, index) => 
        {
            if (index % 2 === 0) column0.appendChild(card);
            else column1.appendChild(card);
        });
    }
    else if (currentLevel === 1)
    {
        cardShuffleArr.forEach((card, index) => 
        {
            if (index % 3 === 0) column0.appendChild(card);
            else if (index % 3 === 1) column1.appendChild(card);
            else column2.appendChild(card);
        });
    }    
    else
    {
        cardShuffleArr.forEach((card, index) => 
        {
            if (index % 4 === 0) column0.appendChild(card);
            else if (index % 4 === 1) column1.appendChild(card);
            else if (index % 4 === 2) column2.appendChild(card);
            else column3.appendChild(card);
        });
    }  
}

function cardsToColumn(amountOfCards)
{
    if (amountOfCards === 2)
    {
        spawnCard(column0);
        spawnCard(column1);
    }
    else if (amountOfCards === 3)
    {
        spawnCard(column0);
        spawnCard(column1);
        spawnCard(column2);
    }
    else 
    {
        spawnCard(column0);
        spawnCard(column1);
        spawnCard(column2);
        spawnCard(column3);
    }
}

function levelToPlay(currentLevel)
{
    if (currentLevel === 0)
    {
        cardsToColumn(2);
        cardsToColumn(2);
        cardsToColumn(2);
        shuffleCardPlacement(currentLevel);
    }
    else if(currentLevel === 1) 
    {
        cardsToColumn(3);
        cardsToColumn(3);
        cardsToColumn(3);
        shuffleCardPlacement(currentLevel);
    }
    else if (currentLevel === 2)
    {
        cardsToColumn(4);
        cardsToColumn(4);
        cardsToColumn(4);
        shuffleCardPlacement(currentLevel);
    }
}

function gameOver()
{
    for(let i = 0; i < 4; i++)
    {
        let checkColumn = document.querySelector("#column" + i).children.length;
        if(checkColumn >= 4){
            var toManyCards = true;
        }
    }
    // TODO: Add a view instead of window.alert 
    if (toManyCards) window.alert("GameOver");
}

function removeCorrectMatches(divToRemoveOne, divToRemoveTwo)
{
    let addColorToArray = document.getElementById(divToRemoveOne).textContent;
    memoryArr.push(addColorToArray);
    var removeDivOne = document.getElementById(divToRemoveOne);
    var removeDivTwo = document.getElementById(divToRemoveTwo);
    removeDivOne.remove(); 
    removeDivTwo.remove();
}

function changeToDefaultColor(colorOne, colorTwo)
{
    var removeOne = document.getElementById(colorOne);
    var removeTwo = document.getElementById(colorTwo);
    removeOne.style.backgroundColor = "";
    removeTwo.style.backgroundColor = "";
}

function colorCardChange(card) 
{
    let cardToChange = document.getElementById(card);
    cardToChange.style.backgroundColor = cardToChange.textContent;
}