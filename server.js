/*global define,require*/
'use strict';
var express = require('express');
var app = express();
var path = require( 'path' );

app.use(express.static(__dirname + '/dist/views'));

app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/dist/views/') );
app.engine('html', require('express-handlebars')({defaultLayout: "default.html"}));

app.get('/', function ( req, res ) {
    res.sendFile('default.html', {"root": path.join(__dirname, '/dist/views/')});
});



app.listen(process.env.PORT || 3001);