// Libraries.
var express = require('express');
var path = require('path');
var http = require('http');
var app = express();
var server = http.Server(app),

// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Render landing page.
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// Port listening.
var port = process.env.PORT || 5000;
server.listen(port, function() {
  console.log ('Started listening on port: ' + port);
});
