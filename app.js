var express = require('express');
var fs = require('fs');
var app = express();
var https = require('https');
var passport = require('passport');

console.log('Starting server on port 8085...');

require('./config/mongodb')();
require('./config/serveur')(app,passport);
require('./config/passport')(passport);

fs.readdirSync(__dirname+'/routes/').forEach(function(fileName)
{
    if(fileName.indexOf('.js') && fileName != "base" )
    {
        require(__dirname+"/routes/"+fileName)(app,passport);
    }
});

app.listen(8085);
/*var options = {
    key: fs.readFileSync(__dirname+'/config/key.pem'),
    cert: fs.readFileSync(__dirname+'/config/cert.pem')
};
https.createServer(options, app).listen(8086);*/

console.log('Documentation : http://localhost:8085/apidoc');

