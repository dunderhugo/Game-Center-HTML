// -------------------------------------------------------------------------------
// ------------------------------Whole code comments------------------------------
//TODO: change to arrow function: () =>?
//TODO: Check code for inconsistency
// -------------------------------------------------------------------------------
//TODO: Refactor
var column0 = document.getElementById("column0");
var column1 = document.getElementById("column1");
var column2 = document.getElementById("column2");
var column3 = document.getElementById("column3");

var rulesDiv = document.getElementById("rulesDiv");
document.getElementById("rulesBtn").addEventListener("click", () => rulesDiv.style.display = "flex");
document.getElementById("exitRulesBtn").addEventListener("click", () => rulesDiv.style.display = "none");

var highScoreDiv = document.getElementById("highScoreDiv");
document.getElementById("highScoreBtn").addEventListener("click", () => highScoreDiv.style.display = "flex");
document.getElementById("exitHsBtn").addEventListener("click", () => highScoreDiv.style.display = "none");

var gameBoardDiv = document.getElementById("gameBoardDiv");
document.getElementById("startBtn").addEventListener("click", ()=> {
    gameBoardDiv.style.display = "flex";
    blockClicksView(500);
});

document.getElementById("mainMenuBtn").addEventListener("click", () => location.reload());

// Game play
var levelScoreDisplay = document.getElementById("levelScore");
var memoryArr = ["blue", "green", "yellow", "pink", "red", "purple", "orange", "cyan", "magenta", "teal", "lime", "indigo"];
var flippedCards = [];
var turnsPlayed = 0;
var youWin = false;
var currentLevel = 0;
var clearedCurrentLevel;
var maxPlayerTurnsPerLevel = [3,5,7];
var totalPoints = 0;
var currentLevelPoints = 0;
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
                blockClicksView(50);
                flippedCards[0] = cardId;
                checkCard = event.target.textContent;
            }
            else if (flippedCards[0] === cardId) console.log("Card is already showing");
            else 
            {
                blockClicksView(1000);
                flippedCards[1] = cardId;
                setTimeout(function()
                {
                    turnsPlayed++;
                    if(checkCard === event.target.textContent)
                    {
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
                    else if(checkCard !== event.target.textContent) changeToDefaultColor(flippedCards[0], flippedCards[1]);
                    flippedCards = [];
                    if (turnsPlayed == maxPlayerTurnsPerLevel[currentLevel] && clearedCurrentLevel === false)
                    {
                        spawnCard(column0);
                        spawnCard(column1);
                        if(currentLevel >= 1) spawnCard(column2);
                        if(currentLevel == 2) spawnCard(column3);
                        turnsPlayed = 0;
                        gameOver();
                    }
                }, 1000);
            }
        }
    });
});

var totalScoreDisplay = document.getElementById("totalScore");
var currentLevelDisplay = document.getElementById("currentLevel");
function nextLevel()
{
    if (currentLevelPoints >= 3000)
    {
        if (currentLevel === 2)
        {
            youWin = true;
            gamOverPage();
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
var nextCardMustMatch = false;
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
        let checkColumn = document.getElementById("column" + i).children.length;
        if(checkColumn >= 4){
            var toManyCards = true;
        }
    }
    if (toManyCards) gamOverPage();
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

function blockClicksView(ms)
{
    // blocks so you cant press anything for "ms" time, for safety reasons :)
    const pageBlocker = document.getElementById("blockPage");
    pageBlocker.style.display = "flex";
    setTimeout(function() {
        pageBlocker.style.display = "none";
    }, ms);
}

function gamOverPage()
{
    const page = document.getElementById("gameOver");
    const lostOrWon = document.getElementById("lostOrWon");
    if (youWin) lostOrWon.textContent = "win!";
    else lostOrWon.textContent = "lost :(";
    document.getElementById("roundScore").textContent = totalPoints;
    setTimeout(function() {
        page.style.display = "flex";
    }, 700);
    
}

function jsonToArray()
{
    fetch("json/memoryHS.json")
        .then(response => response.text())
        .then(values =>
        {
            const hsList = JSON.parse(values);
            arrToHs(hsList);
        })
        .catch(error => console.error(error));
    
}
jsonToArray();

function arrToHs(json)
{
    json.sort(function(a,b){
        return b.score - a.score;
    });
    for(let i = 0;i < 15; i++)
    {
        let listItem = document.createElement("li");
        listItem.id = "hs" + i;
        listItem.className = "hsItem";
        var spanScore = document.createElement("span");
        var spanName = document.createElement("span");
        spanScore.textContent = json[i].score + " ";
        spanName.textContent = json[i].name;
        listItem.appendChild(spanScore);
        listItem.appendChild(spanName);
        document.getElementById("hsLi").appendChild(listItem);
    }
}