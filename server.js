
// NODE DRIVERS 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config'); 

//===================MOVE TO CONFIG FILE=============//


// PORT 

// BODY PARSER

//=====================================================

// ROUTER 
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// PORT LISTENER 

app.listen(PORT, function() {
	console.log('Listening on Port: ' + PORT); 
}); 