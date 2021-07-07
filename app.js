var request = require("request");
var express = require("express");
var app = express();

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

app.listen(process.env.PORT, process.env.IP, function(){
 console.log("server started");
})

//using sample data not to ovruse api key given to me
