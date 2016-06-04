var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


app.get('/*', function(req, res){
    var file = req.params[0] || 'index.html';
    res.sendFile(path.join(__dirname, '/public/', file));
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('Listening on port: ', app.get('port'));
});

module.exports = app;
