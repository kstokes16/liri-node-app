// REQUIRE .env FILE
require("dotenv").config();

// Require keys
var keys = require("./keys.js");

// Require Spotify
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// Require Axios to run OMDB and BandsInTown

var axios = require("axios");

// getMeMovie function

var getMeMovie = function (movieName) {

    if (!movieName) {
        movieName = "Mr. Nobody"
    };

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

axios.get(queryUrl).then(
    function(response) {
        console.log("-----Title of the Movie:-----");
        console.log(response.data.Title);
        console.log("-----Year the movie was released:-----");
        console.log(response.data.Year);
        console.log("-----IMDB rating:-----");
        console.log(response.data.imdbRating);
        console.log("-----Rotten Tomatoes rating:-----");
        console.log(response.data.Ratings[1].Value);
        console.log("-----Country where produced:-----");
        console.log(response.data.Country);
        console.log("-----Language of movie:-----");
        console.log(response.data.Language);
        console.log("-----Plot of movie:-----");
        console.log(response.data.Plot);
        console.log("-----Actors in movie:-----");
        console.log(response.data.Actors);
        
    }
  );

}

  // end of OMDB call

//getMeSpotify function

var getMeSpotify = function(songName) {

    if (!songName) {
        songName = "the sign ace of base"
    };
 
    spotify.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }

    console.log("-----Artist:-----");
    console.log(data.tracks.items[0].artists[0].name);
    console.log("-----Song Name:-----");
    console.log(data.tracks.items[0].name);
    console.log("-----Preview link of song:-----");
    console.log(data.tracks.items[0].preview_url);
    console.log("-----Album the song is from:-----");
    console.log(data.tracks.items[0].album.name);
    })
    
    }

    // end of getMeSpotify function

// switch statement to use one of the 3 APIs

var pick = function(caseData, functionData) {
    switch(caseData) {
        case 'spotify-this-song':
        getMeSpotify(functionData);
        break;

        case 'movie-this':
        getMeMovie(functionData);
        break;
    }
}

// end of switch statement

// defining function for what user inputs

var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};

// calling runThis function

runThis(process.argv[2], process.argv[3]);

