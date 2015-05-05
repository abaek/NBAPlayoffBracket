#!/usr/bin/env node
// Libraries.
var express = require('express');
var path = require('path');
var http = require('http');
var app = express();
var debug = require('debug')('nba-playoff-bracket');

// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '')));

// Render landing page.
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// Port listening.
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('Started listening on port: ' + server.address().port);
  debug('Express server listening on port ' + server.address().port);
});
