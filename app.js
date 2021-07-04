var request = require("request");

request("http://www.omdbapi.com/?apikey=298f6e5e&t=schindler", function (error, response, body) {
	if(!error && response.statusCode == 200)
    {
       var data = JSON.parse(body);
       console.log(data);
    }
});