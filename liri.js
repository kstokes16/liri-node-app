// REQUIRE .env FILE
require("dotenv").config();

// Require keys
var keys = require("./keys.js");

// Require Spotify
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

//var runThis = function(argOne, argTwo) {
  //  pick(argOne, argTwo);
//};

//runThis(process.argv[2], process.argv[3]);
 
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});