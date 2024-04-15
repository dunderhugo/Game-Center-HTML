function dropDown(){
    document.getElementById("menuDropDown").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches(".dropDownBtn")){
        var dropDown = document.getElementsByClassName("hamburgerMenu");
        for (var i = 0; i<dropDown.length; i++){
            var openDD = dropDown[i];
            if (openDD.classList.contains("show")){
                openDD.classList.remove("show");
            }
        }
    }
}