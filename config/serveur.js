var expressSession = require('express-session');
var express = require('express');
var bodyParser = require('body-parser');


module.exports = function(app,passport) {

    app.use('/apidoc', express.static('apidoc'));
    app.use(bodyParser.json());

    app.use(expressSession({
        secret: 'mySecretKey'
    }));

    app.use(passport.initialize());
    app.use(passport.session());
};