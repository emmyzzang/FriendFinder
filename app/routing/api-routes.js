// Take the module that is being exposed in friends.js because it gives us matches 

const friends = require('../data/friends.js'); 
const app = express(); 
module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends); 
	});
}
	// Write to the data -- who is your new friend 
	app.post("/api/friends", function(req, res) {
		//track the difference between their answers
		let bestMatch = {
			name: "", 
			photo: "", 
			friendDifference: 1000	
		};

		console.log(req.body); 

		// Here we take the result of the user's survey POST and parse it
		let userData = req.body; 
		let userScores = userData.scores; 

		console.log(userScores)

		// This variable will calculate the difference betwen the user's scores 
		// And the scores of each user in the database... ("database" is friends.js in this case)
		totalDifference = 0;  

		// Loop thru all the friend possibilities in the database 
		for (let i = 0; i < friends.length; i++) {

			console.log(friends[i]); 
			totalDifference = 0; 

			// Loop thru all the scores of each friend
			for (let j = 0; j < friends[i].scores[j]; j++) {

				// Calculate the difference between the scores and sum them into the totalDifference
				// Math absolute is unsigned
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

				// If the sum of differences is less than the differences of the current "best match"
				if (totalDifference <= bestMatch.friendDifference) {

					// Reset the bestMatch to be the new friend
					bestMatch.name = friends[i].name; 
					bestMatch.photo = friends[i].photo; 
					bestMatch.friendDifference = totalDifference; 
				}
			}
		}

			// Finally save the user's data to the database (this has to happen AFTER the check, 
			// otherwise, the database will always return that the user is the user's best friend)
			friends.push(userData); 

		// Return a JSON with a user's bestMatch. This will be used by the HTML
		// In the next page
		res.json(bestMatch); // Return this back to the frontend of the app 

	}); 


