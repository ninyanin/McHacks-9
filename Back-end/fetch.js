//const api_key = 'b232ad51ce7402046296b8bc8b7c35d8';
//const base_url = 'https://api.themoviedb.org/3/discover/movie/';
//const api_url = base_url + "?api_key=" + api_key;
//options = {"primary_release_year":2010}
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

function getChoices() {
    options = {};
    options["vote_count.gte"] = 400;
    options.primary_release_year = range(1980, 1990, 1);   //range of release year
    options.with_genres = [10749 || 16 || 12];             //list of genres
    options.watch_region = "CA";       
    options.with_watch_providers = [8 || 9];               //list of streaming services (see discord #back end for IDs) 
    theMovieDb.discover.getMovies(options, successFunction, errorFunction);

}

function successFunction(result){
    data = JSON.parse(result);
    //alert(result);
    console.log(result);
}

function errorFunction(result){
    alert("error");
}

/*if (releaseYear){
    api_url += ""
}



theMovieDb.discover.getMovie(options, successCallback, errorCallback);
*/