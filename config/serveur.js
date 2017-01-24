var expressSession = require('express-session');
var express = require('express');
var bodyParser = require('body-parser');


module.exports = function(app,passport) {

    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Credentials', true);
        res.header("Access-Control-Allow-Headers", "Set-Cookie, Content-Type, Accept");
        next();
    }
    app.use('/apidoc', express.static('apidoc'));
    app.use(bodyParser.json());
    app.use(allowCrossDomain);

    app.use(expressSession({
        secret: 'mySecretKey',
        resave: true,
        saveUninitialized: true,
        cookie: {
            secure: false,
            httpOnly : false
        }
    }));

    app.use(passport.initialize());
    app.use(passport.session());
};