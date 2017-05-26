var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var config = require("./back/config");

app.use(bodyParser.json());
app.use(express.static('front'));


var port = process.env.PORT || 5051;
app.listen(port, function(){
    console.log('listening on port ' + port + '...');
});