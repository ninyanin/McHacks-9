document.getElementById("haha").innerHTML = "Hello JavaScript";
var numMovies;
function chooseNum(num){
    numMovies = num;
}

function showNum(){
    alert("You chose " + numMovies + " movies.");
}