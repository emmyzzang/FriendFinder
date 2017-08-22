
const path = require('path');

module.exports = function (app) {

// Tell the server that if we hit the route 'survey', deliver the survey.html page
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});

// Did not give it a pre-defined url 
//to the home page but this will work as a default
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});  

}