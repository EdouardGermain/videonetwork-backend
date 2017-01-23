var expressSession = require('express-session');
var express = require('express');
var bodyParser = require('body-parser');


module.exports = function(app,passport) {

    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    }
    app.use('/apidoc', express.static('apidoc'));
    app.use(bodyParser.json());
    app.use(allowCrossDomain);

    app.use(expressSession({
        secret: 'mySecretKey',
        resave: true,
        saveUninitialized: true
    }));

    app.use(passport.initialize());
    app.use(passport.session());
};