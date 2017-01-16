var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var passport = require('passport');
var expressSession = require('express-session');


require('./config/mongodb')(mongoose);



app.use('/apidoc',express.static('apidoc'));
app.use(bodyParser.json());

app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

var initPassport = require('./config/passport');
initPassport(passport);

fs.readdirSync(__dirname+'/routes/').forEach(function(fileName)
{
    if(fileName.indexOf('.js'))
    {
        require(__dirname+"/routes/"+fileName)(app,passport);
    }
});




app.listen(8085);

console.log('Starting server on port 8085...');
console.log('Documentation : http://localhost:8085/apidoc');

