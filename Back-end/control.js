document.getElementById("haha").innerHTML = "Hello JavaScript";
var numMovies;
var keyworks = [];

var value;   

document.getElementById('next').onclick = function() {
    value = document.querySelector( 'input[name="num"]:checked');
    numMovies = value.value;
    alert("there are " + numMovies);
 }​;​

function chooseNum(num){
    numMovies = num;
}

function showNum(){
    alert("You chose " + numMovies + " movies.");
}