var request = require("request");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

var data;

request("http://www.omdbapi.com/?apikey=298f6e5e&s=schindler", function (error, response, body) {
	if(!error && response.statusCode == 200)
    {
       var tdata = JSON.parse(body);
       data = tdata;
    }
});

app.get("/", function(req, res){
  res.render("home.ejs", {data: data});
})

app.get("/title", function(req,res){
    request("http://www.omdbapi.com/?apikey=298f6e5e&t=" + req.query.title, function (error, response, body) {
	    if(!error && response.statusCode == 200)
        {
           var tdata = JSON.parse(body);
           data = tdata;
        }
        res.render("title.ejs", {data: data});
    });   
})

app.get("/search", function(req,res){
    request("http://www.omdbapi.com/?apikey=298f6e5e&s=" + req.query.search, function (error, response, body) {
	    if(!error && response.statusCode == 200)
        {
           var tdata = JSON.parse(body);
           data = tdata;
        }
        res.render("search.ejs", {data: data});
    });
})

app.listen(process.env.PORT, process.env.IP, function(){
 console.log("server started");
})

//using sample data not to ovruse api key given to me
