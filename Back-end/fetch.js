//const api_key = 'b232ad51ce7402046296b8bc8b7c35d8';
//const base_url = 'https://api.themoviedb.org/3/discover/movie/';
//const api_url = base_url + "?api_key=" + api_key;
//options = {"primary_release_year":2010}
//const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

function getChoices() {
    options = {};
    options["vote_count.gte"] = 400;
    options.with_original_language = "en";
    //options.primary_release_year = range(1980, 1990, 1); //range of release year
    options["primary_release_date.gte"] = "1990-01-01";
    //chosenGenres = localStorage.getItem("genres");
    options.with_genres = 16;             //list of genres
    //options.with_genres = [10749 || 16 || 12];           //list of genres
    options.watch_region = "CA";       
    options.with_watch_providers = 8;               //list of streaming services (see discord #back end for IDs) 
    //options.with_watch_providers = [8 || 9];               //list of streaming services (see discord #back end for IDs) 
    theMovieDb.discover.getMovies(options, successFunction, errorFunction);
}

// "genres" "rate" "streaming" "date"
//localStorage.getItem("genres")
function successFunction(movies){
    movies = JSON.parse(movies);
    length = movies.total_results;
    console.log(length);
    //length = Object.keys(movies).length;
    movieNumber = Math.floor(Math.random() * (Math.min(20,length/10)));
    console.log(movieNumber);

    //console.log(movies);
    //console.log(movieNumber);
    //console.log(movies.results[movieNumber]);

    title = movies.results[movieNumber].title;
    poster = "https://image.tmdb.org/t/p/w500"+movies.results[movieNumber].poster_path;
    releaseDate = movies.results[movieNumber].release_date;
    genreID = movies.results[movieNumber].genre_ids[0];
    overview = movies.results[movieNumber].overview;    
    
    console.log(title+'\n'+poster+'\n'+genreID+'\n'+overview);

    var img = new Image(); 
    var div = document.getElementById("suggestion1"); 
     
    img.onload = function() { 
      div.appendChild(img); 
    }; 
     
    img.src = 'path/to/image.jpg' 

    document.getElementById("title").innerText = title;
    document.getElementById("date").innerText = releaseDate;
    document.getElementById("genre").innerText = genreID;
    document.getElementById("overview").innerText = overview;

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