var express = require('express');
var fs = require('fs');
var app = express();
var passport = require('passport');

console.log('Starting server on port 8085...');

require('./config/mongodb')();
require('./config/serveur')(app,passport);
require('./config/passport')(passport);

fs.readdirSync(__dirname+'/routes/').forEach(function(fileName)
{
    if(fileName.indexOf('.js'))
    {
        require(__dirname+"/routes/"+fileName)(app,passport);
    }
});

app.listen(8085);

console.log('Documentation : http://localhost:8085/apidoc');

