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
    checkboxes = document.getElementsByName('genre');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        if (checkboxes[i].checked) {
            genres.push(checkboxes[i].value);
        }
    }
    localStorage.setItem("genres", genres);
    console.log(localStorage.getItem("numMovie"));
    console.log(localStorage.getItem("genres")[1]);
}

function date() {
    da = document.getElementsByName('date');
    for (var i = 0, n = da.length; i < n; i++) {
        if (da[i].checked) {
            dates.push(da[i].value);
        }
    }
    localStorage.setItem("dates", dates);
    console.log(localStorage.getItem("genres"));
    console.log(localStorage.getItem("numMovie"));
    console.log(localStorage.getItem("dates")[0]);
}

function getStream() {
    opp = document.getElementsByName('stream');
    for (var i = 0, n = opp.length; i < n; i++) {
        if (opp[i].checked) {
            streaming.push(opp[i].value);
        }
    }
    localStorage.setItem("streaming", streaming);
    console.log(localStorage.getItem("dates"));
    console.log(localStorage.getItem("genres"));
    console.log(localStorage.getItem("streaming"));
}
  
function rottenTom() {
    localStorage.setItem("rating", document.querySelector('input[name="rating"]:checked').value);
    console.log(localStorage.getItem("rating"));
}

