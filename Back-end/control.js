var numMovie;
var genres = [];
var checkboxes;
var dates = [];
var watchOps = [];
var streaming = [];

function numMov(){
numMovie = document.querySelector('input[name="num"]:checked').value;
console.log(numMovie);
}

function genre() {
    checkboxes = document.getElementsByName('genre');
    for(var i=0, n=checkboxes.length;i<n;i++){
        if(checkboxes[i].checked){
            genres.push(checkboxes[i].value);
        }
    }
}

function getDate() {
    if (document.getElementById("2020").checked) {
        temp=document.getElementById("2020").value;
        dates.push(temp);
    }

    if (document.getElementById("2010").checked) {
        temp=document.getElementById("2010").value;
        dates.push(temp);
    }

    if (document.getElementById("2000").checked) {
        temp=document.getElementById("2000").value;
        dates.push(temp);
    }

    if (document.getElementById("1990").checked) {
        temp=document.getElementById("1990").value;
        dates.push(temp);
    }

    if (document.getElementById("1980").checked) {
        temp=document.getElementById("1980").value;
        dates.push(temp);
    }

    if (document.getElementById("before").checked) {
        temp=document.getElementById("before").value;
        dates.push(temp);
    }

    if (document.getElementById("dc").checked) {
        temp=document.getElementById("dc").value;
        dates.push(temp);
    }

    console.log(dates);
}

function getWatchOp() {
    if (document.getElementById("theaters").checked) {
        temp=document.getElementById("theaters").value;
        watchOps.push(temp);
    }

    if (document.getElementById("netflix").checked) {
        temp=document.getElementById("netflix").value;
        watchOps.push(temp);
    }

    if (document.getElementById("dvd").checked) {
        temp=document.getElementById("dvd").value;
        watchOps.push(temp);
    }
    console.log(watchOps);
}

function getStream() {
    if (document.getElementById("netflix").checked) {
        temp=document.getElementById("netflix").value;
        streaming.push(temp);
    }

    if (document.getElementById("amazon").checked) {
        temp=document.getElementById("amazon").value;
        streaming.push(temp);
    }
    console.log(streaming);
}
  

