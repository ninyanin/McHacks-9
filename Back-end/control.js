var numMovie = 0; 
var genres = [];
localStorage.setItem("genres", []);
var checkboxes;
var dates = [];
var watchOps = [];
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
    console.log(localStorage.getItem("genres"));
}

function date() {
    da = document.getElementsByName('date');
    for (var i = 0, n = da.length; i < n; i++) {
        if (da[i].checked) {
            dates.push(da[i].value);
        }
    }
    localStorage.setItem("dates", dates);
    console.log(localStorage.getItem("numMovie"));
    console.log(localStorage.getItem("genres"));
    console.log(localStorage.getItem("dates"));
}

function formatType(){
    opp = document.getElementsByName('op');
    for (var i = 0, n = opp.length; i < n; i++) {
        if (opp[i].checked) {
            watchOps.push(opp[i].value);
        }
    }
    localStorage.setItem("watchOps", watchOps);
    console.log(localStorage.getItem("genres"));
    console.log(localStorage.getItem("dates"));
}