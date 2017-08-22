// Take the module that is being exposed in friends.js because it gives us matches 

const friends = require('../data/friends.js'); 

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends); 
	});
}