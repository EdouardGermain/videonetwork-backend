/**
 * Author : Edouard Germain
 *
 * Configuration of the server
 *
 * Allow CORS from multi domaine
 * Define the folder of the documentation
 * Configure sessions/cookies
 *
 */


var expressSession = require('express-session');
var express = require('express');
var bodyParser = require('body-parser');
const MongoStore = require('connect-mongo')(expressSession);


module.exports = function(app,passport) {



    var allowCrossDomain = function(req, res, next) { // had to search on google to find a way to allow multi origin

        var allowedOrigins = ['http://localhost', 'http://localhost:8080', 'http://127.0.0.1:8080', 'http://127.0.0.1'];
        var origin = req.headers.origin;
        if(allowedOrigins.indexOf(origin) > -1){
            res.header('Access-Control-Allow-Origin', origin);
        }
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Set-Cookie, Content-Type, Accept");
        next();
    };

    app.use('/apidoc', express.static('apidoc'));
    app.use(bodyParser.json());
    app.use(allowCrossDomain);

    app.use(expressSession({
        secret: '$2a$10$UtpT9b.9tejG79vIve6/kuPFGw1/QaIPNMtwofzrhTpfpzlpbK/Xe',
        resave: true,
        saveUninitialized: true,
        cookie: {
            secure: false,
            httpOnly : false,
            Path:"/",
            maxAge: 3600000
        },
        store: new MongoStore({
            url: 'mongodb://edouardg.fr/videonetwork-sessions',
            autoRemove: 'interval',
            autoRemoveInterval: 60
        })

    }));

    app.use(passport.initialize());
    app.use(passport.session());
};