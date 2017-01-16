var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

console.log('Starting server on port 8085...');
mongoose.connect('mongodb://localhost:27017/videonetwork', { server: { reconnectTries: Number.MAX_VALUE } });


app.use('/apidoc',express.static('apidoc'));
app.use(bodyParser.json());


fs.readdirSync(__dirname+'/routes/').forEach(function(fileName)
{
    if(fileName.indexOf('.js'))
    {
        require(__dirname+"/routes/"+fileName)(app);
    }
});




app.listen(8085);

console.log('Documentation : http://localhost:8085/apidoc');

