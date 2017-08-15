
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
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// LISTENER 

app.listen(PORT, function() {
	console.log('Listening on Port: ' + PORT); 
}); 