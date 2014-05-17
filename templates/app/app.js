'use strict';

var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));<% if(enginename == 'html') {%>
app.engine('html', require('ejs').renderFile);<% } %>
app.set('view engine', '<%= enginename %>');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
<% if(styleengine == 'less') { %>app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));<% } %>
<% if(styleengine == 'stylus') { %>app.use(require('stylus').middleware(path.join(__dirname, 'public')));<% } %>
<% if(styleengine == 'scss') { %>app.use(require('node-compass')({mode: 'expanded'}));<% } %>
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
        next();
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
    next();
});


module.exports = app;
