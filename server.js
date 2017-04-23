// modules =================================================
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

var app = express();

// configuration ===========================================
var db = process.env.LOCAL_DB_URL;
var port = process.env.PORT || 3000;

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./app/routes')(app);

// start app ===============================================
app.listen(port);
console.log('Cedar Park is playing at my house!');

// expose app ===============================================
exports = module.exports = app;