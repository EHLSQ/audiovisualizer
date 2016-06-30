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

app.get('/audiothree.html', function (req, res) {
  res.sendfile(path.join(__dirname+'/pages/audiothree.html'));
});

app.get('/audiofiles/Hide.mp3', function (req, res) {
  res.sendfile(path.join(__dirname+'/audiofiles/Hide.mp3'));
});

app.get('/scripts/audiothree.js', function (req, res) {
  res.sendfile(path.join(__dirname+'/scripts/audiothree.js'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
