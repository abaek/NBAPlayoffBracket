#!/usr/bin/env node

// Libraries.
var express = require('express');
var path = require('path');
var app = express();
var routes = require('./routes/index');

// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '')));

app.use('/', routes);

module.exports = app;
