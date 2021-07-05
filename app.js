/*var request = require("request");

request("http://www.omdbapi.com/?apikey=298f6e5e&t=schindler", function (error, response, body) {
	if(!error && response.statusCode == 200)
    {
       var data = JSON.parse(body);
       console.log(data);
    }
});*/

var sampleData = { Title: 'Schindler: The Real Story',
  Year: '1983',
  Rated: 'N/A',
  Released: 'N/A',
  Runtime: 'N/A',
  Genre: 'Documentary',
  Director: 'Jon Blair',
  Writer: 'Jon Blair',
  Actors: 'Dirk Bogarde, Emilie Schindler, Oskar Schindler',
  Plot:
   'The true story of Oskar Schindler\'s exploits in which he saved a thousand Jews from the ovens of the death camps, s told by first hand witnesses. The British Academy Award winning ...',
  Language: 'English, German, Polish',
  Country: 'UK',
  Awards: '1 win.',
  Poster:
   'https://m.media-amazon.com/images/M/MV5BMTY4MTY0OTY4NV5BMl5BanBnXkFtZTcwOTgxMjMyMQ@@._V1_SX300.jpg',
  Ratings: [ { Source: 'Internet Movie Database', Value: '7.4/10' } ],
  Metascore: 'N/A',
  imdbRating: '7.4',
  imdbVotes: '259',
  imdbID: 'tt0180981',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: 'N/A',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True' 
};

var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home.ejs", {data: sampleData});
})

app.listen(process.env.PORT, process.env.IP, function(){
 console.log("server started");
})

//using sample data not to ovruse api key given to me
