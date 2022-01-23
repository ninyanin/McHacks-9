//const api_key = 'b232ad51ce7402046296b8bc8b7c35d8';
//const base_url = 'https://api.themoviedb.org/3/discover/movie/';
//const api_url = base_url + "?api_key=" + api_key;
//options = {"primary_release_year":2010}
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

function getChoices() {
    options = {};
    options["vote_count.gte"] = 400;
    options.with_original_language = "en";
    //options.primary_release_year = range(1980, 1990, 1);   //range of release year
    options.with_genres = [10749 || 16 || 12];             //list of genres
    options.watch_region = "CA";       
    options.with_watch_providers = [8 || 9];               //list of streaming services (see discord #back end for IDs) 
    theMovieDb.discover.getMovies(options, successFunction, errorFunction);
}

function successFunction(movies){
    movies = JSON.parse(movies);
    length = movies.total_results;
    console.log(length);
    //length = Object.keys(movies).length;
    movieNumber = Math.floor(Math.random() * (length/10));
    //console.log(movies);
    //console.log(movieNumber);
    //console.log(movies.results[movieNumber]);
    title = movies.results[movieNumber].title;
    poster = "https://image.tmdb.org/t/p/w500"+movies.results[movieNumber].poster_path;
    genreID = movies.results[movieNumber].genre_ids[0];
    overview = movies.results[movieNumber].overview;
    console.log(title+'\n'+poster+'\n'+genreID+'\n'+overview);

    //alert(result);
    //console.log(result);
}

function errorFunction(result){
    alert("error");
}

/*if (releaseYear){
    api_url += ""
}



theMovieDb.discover.getMovie(options, successCallback, errorCallback);
*/