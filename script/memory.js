document.getElementById("rulesBtn").addEventListener("click", function(){
    var rulesDiv = document.getElementById("rulesDiv");
    if (rulesDiv.style.display === "none" || rulesDiv.style.display === ""){
        rulesDiv.style.display = "block";
    } else {
        rulesDiv.style.display = "none";
    }
})