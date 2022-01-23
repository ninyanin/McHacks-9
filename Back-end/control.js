var numMovie = 0; 
var genres = [];
var checkboxes;
var dates = [];

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
    console.log(localStorage.getItem("numMovie"));
}

function getDate() {
    if (document.getElementById("2020").checked) {
        temp = document.getElementById("2020").value;
        dates.push(temp);
        console.log(dates);
    }

    if (document.getElementById("2010").checked) {
        temp = document.getElementById("2010").value;
        dates.push(temp);
        console.log(dates);
    }

    if (document.getElementById("2000").checked) {
        temp = document.getElementById("2000").value;
        dates.push(temp);
        console.log(dates);
    }

    if (document.getElementById("1990").checked) {
        temp = document.getElementById("1990").value;
        dates.push(temp);
        console.log(dates);
    }

    if (document.getElementById("1980").checked) {
        temp = document.getElementById("1980").value;
        dates.push(temp);
        console.log(dates);
    }

    if (document.getElementById("before").checked) {
        temp = document.getElementById("before").value;
        dates.push(temp);
        console.log(dates);
    }

    if (document.getElementById("dc").checked) {
        temp = document.getElementById("dc").value;
        dates.push(temp);
        console.log(dates);
    }
}