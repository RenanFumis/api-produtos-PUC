var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apiRouterV1 = require('./routes/apiRouterV1'); // <--- Essa linha é acrescentada para importar o arquivo routes/apiRouterV1.js

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1', apiRouterV1); // <--- Essa linha é a diferença para o arquivo routes/apiRouterV1.js

module.exports = app;
