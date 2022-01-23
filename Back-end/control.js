var numMovie = 0; 
var genres = [];
var dates = [];
var streaming = [];

function hideSub() {
    document.getElementById("subquestion1").style.visibility = "hidden";
}

function showSub() {
    document.getElementById("subquestion1").style.visibility = "visible";
}

function numMov() {
    localStorage.setItem("numMovie", document.querySelector('input[name="num"]:checked').value);
    console.log(localStorage.getItem("numMovie"));
}

function genre() {
    localStorage.setItem("genre", document.querySelector('input[name="genre"]:checked').value);
    console.log(localStorage.getItem("numMovie"));
    console.log(localStorage.getItem("genre"));
}

function date() {
    localStorage.setItem("date", document.querySelector('input[name="date"]:checked').value);
    console.log(localStorage.getItem("numMovie"));
    console.log(localStorage.getItem("genre"));
    console.log(localStorage.getItem("date"));
}

function getStream() {
    localStorage.setItem("stream", document.querySelector('input[name="stream"]:checked').value);
    console.log(localStorage.getItem("numMovie"));
    console.log(localStorage.getItem("genre"));
    console.log(localStorage.getItem("date"));
    console.log(localStorage.getItem("stream"));
}
  
function rottenTom() {
    localStorage.setItem("rating", document.querySelector('input[name="rating"]:checked').value);
    console.log(localStorage.getItem("rating"));
}

