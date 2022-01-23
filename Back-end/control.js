var numMovie;
var genres = [];
var checkboxes;
var dates = [];

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