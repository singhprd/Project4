var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('../client/build'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

app.get('/helloworld', function(req, res) {
  res.send('hello world');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
