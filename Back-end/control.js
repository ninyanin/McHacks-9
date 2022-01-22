var numMovies;
var keyworks = [];

var ddhd;   

document.getElementById('next').onclick = 'getNum()';
function getNum() {
    ddhd = document.querySelector( 'input[name="num"]:checked');
    numMovies = ddhd.value;
    alert("there are " + numMovies);
 }​;​

function chooseNum(num){
    numMovies = num;
}

function showNum(){
    alert("You chose " + numMovies + " movies.");
}