var express = require('express');
var app = express();
var path = require("path");

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname+'/index.html'));
});

app.get('/visualizer.html', function (req, res) {
  res.sendfile(path.join(__dirname+'/pages/visualizer.html'));
});

app.get('/audiofiles/Hide.mp3', function (req, res) {
  res.sendfile(path.join(__dirname+'/audiofiles/Hide.mp3'));
});

app.get('/scripts/visualizer.js', function (req, res) {
  res.sendfile(path.join(__dirname+'/scripts/visualizer.js'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
