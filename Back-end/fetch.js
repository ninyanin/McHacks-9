//const api_key = 'b232ad51ce7402046296b8bc8b7c35d8';
//const base_url = 'https://api.themoviedb.org/3/discover/movie/';
//const api_url = base_url + "?api_key=" + api_key;
//options = {"primary_release_year":2010}

function getChoices() {
    options = {};
    options.primary_release_year = 2013;
    options.with_genres = 16;
    options.watch_region = "CA";
    options.with_watch_providers = 8;
    theMovieDb.discover.getMovies(options, successFunction, errorFunction);

}

function successFunction(result){
    data = JSON.parse(result);
    alert(result);
}

function errorFunction(result){
    alert("error");
}

/*if (releaseYear){
    api_url += ""
}



theMovieDb.discover.getMovie(options, successCallback, errorCallback);
*/