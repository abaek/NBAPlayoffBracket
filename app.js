#!/usr/bin/env node

// Libraries.
var express = require('express');
var path = require('path');
var app = express();
var routes = require('./routes/index');
var debug = require('debug')('nba-playoff-bracket');

// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '')));

// Load page.
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});

module.exports = app;
