// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  var result = {};
  var str = '';
  result.ipaddress = request.headers['x-forwarded-for'].split(',')[0];
  result.language = request.headers['accept-language'].split(',')[0];
  var start = request.headers['user-agent'].split('(')[1];
  console.log(start);
  result.software = '';
  console.log(request.headers['user-agent']);
  response.send(result);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
