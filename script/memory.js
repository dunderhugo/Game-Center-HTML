//TODO: Refactor
document.getElementById("rulesBtn").addEventListener("click", function(){
    var rulesDiv = document.getElementById("rulesDiv");
    if (rulesDiv.style.display === "none" || rulesDiv.style.display === "")
    {
        rulesDiv.style.display = "block";
    } 
    else 
    {
        rulesDiv.style.display = "none";
    }
});

document.getElementById("exitRulesBtn").addEventListener("click", function(){
    rulesDiv.style.display = "none";
});

document.getElementById("highScoreBtn").addEventListener("click", function(){
    var highScoreDiv = document.getElementById("highScoreDiv");
    if (highScoreDiv.style.display === "none" || highScoreDiv.style.display === "")
    {
        highScoreDiv.style.display = "block";
    } 
    else 
    {
        highScoreDiv.style.display = "none";
    }
})

document.getElementById("exitHsBtn").addEventListener("click", function(){
    highScoreDiv.style.display = "none";
});

document.getElementById("startBtn").addEventListener("click", function(){
    var gameBoardDiv = document.getElementById("gameBoardDiv");
    if (gameBoardDiv.style.display === "none" || highScoreDiv.style.display === "")
    {
        gameBoardDiv.style.display = "block";
    } 
    else 
    {
        gameBoardDiv.style.display = "none";
    }
});