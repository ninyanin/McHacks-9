let numMovies;
let keyworks = [];

const radioButtons = document.querySelectorAll('input[name="num"]');

function getNum() {
    if(document.getElementById("1").checked){
        numMovies = 1;
    }
    if(document.getElementById("2").checked){
        numMovies = 2;
    }
    if(document.getElementById("4").checked){
        numMovies = 3;
    }
    alert("there are " + numMovies);
 }​