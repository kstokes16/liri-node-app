// REQUIRE .env FILE
require("dotenv").config();

// Require keys
var keys = require("./keys.js");

// Require Spotify
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

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
        default:
        console.log("please enter a song");
    }
}

// end of switch statement

// defining function for what user inputs

var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};

// end of defining function for what user inputs

// calling runThis function

runThis(process.argv[2], process.argv[3]);

// end of runThis function

