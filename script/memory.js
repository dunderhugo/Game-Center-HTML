var rulesDiv = document.getElementById("rulesDiv");
var highScoreDiv = document.getElementById("highScoreDiv");
var gameBoardDiv = document.getElementById("gameBoardDiv");
var gameBoard = document.getElementById("gameBoard");

document.getElementById("addCardBtn").addEventListener("click", function(){
    var newCard = document.createElement("div");
    newCard.id = "card" + gameBoard.children.length;
    newCard.className = "gameCard";
    gameBoard.appendChild(newCard);
    console.log(newCard);
});



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


// var card0 = document.querySelector("#card0");
// card0.addEventListener("click", () => {
//     card0.style.backgroundColor = "black"
// });



// For testing, change later
function colorCardChange(card){
    if (card.textContent === "1"){
        card.style.backgroundColor = "black";
    }
    if (card.textContent === "2"){
        card.style.backgroundColor = "green";
    }
    if (card.textContent === "3"){
        card.style.backgroundColor = "yellow";
    }
    if (card.textContent === "4"){
        card.style.backgroundColor = "pink";
    }
    if (card.textContent === "8"){
        card.style.backgroundColor = "grey";
    }
}
var card0 = document.querySelector("#card0");
var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");
var card3 = document.querySelector("#card3");
var card4 = document.querySelector("#card4");
var card5 = document.querySelector("#card5");
colorCardChange(card0);
colorCardChange(card1);
colorCardChange(card2);
colorCardChange(card3);
colorCardChange(card4);
colorCardChange(card5);