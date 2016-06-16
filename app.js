var express = require('express');
var app = express();
var path = require("path");

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname+'/index.html'));
});

app.get('/navbar.html', function (req, res) {
  res.sendfile(path.join(__dirname+'/pages/navbar.html'));
});

app.get('/about.html', function (req, res) {
  res.sendfile(path.join(__dirname+'/pages/about.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
