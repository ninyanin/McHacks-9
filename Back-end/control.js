var numMovie;
var keywords = [];
var temp;

function numMov(){
numMovie = document.querySelector('input[name="num"]:checked').value;
console.log(numMovie);
}

function genre() {
    if (document.getElementById('action').checked) {
        temp = document.getElementById('action').value;
        keywords.push(temp);
        console.log(keywords);
    }
}