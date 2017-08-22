
// NODE DRIVERS 
const express = require('express');
const bodyParser = require('body-parser');


// PORT 
let app = express(); // Allows for bodyParser to call upon the express server 
const PORT = process.env.PORT || 8080; 


// BODY PARSER

// Create application/json parser 
const jsonParser = bodyParser.json()

// Create application/x-www-form-urlencoded parser 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Parse various different custom JSON types as JSON 
app.use(bodyParser.json({ type: 'application/*+json' }))

// Parse some custom thing into a Buffer 
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// Parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html'}));


// ROUTER 
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// PORT LISTENER 

app.listen(PORT, function() {
	console.log('Listening on Port: ' + PORT); 
}); 