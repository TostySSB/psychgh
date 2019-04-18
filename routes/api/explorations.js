const express = require("express");
const router = express.Router();
const Exploration = require("../../models/DiagnosisExploration");

const updateEval = (evals, newData, userID) => {
	// Need to update the eval array, then set it to 
	// The users eval array with findOneAndUpdate
	console.log("OLD EVALS:");
	console.log(evals);
	console.log("NEW DATA");
	console.log(newData);
	let index;
	for (let i = 0; i < evals.evals.length; i++) {
		if (evals.evals[i].id == newData.id) {
			index = i;
			break;
		}
	}
	// console.log("Eval to be updated:");
	// console.log(evals.evals[index]);

	evals.evals[index] = newData;

	console.log("UPDATED EVALS:");
	console.log(evals);

	Exploration.findOneAndUpdate({user_id: userID}, {$set:{evals: evals.evals}}, (err, doc) => {
		if (err)
			console.log("nope.");
		
		console.log(doc);
	});
}

router.get('/getExploration', (req, res) => {
	Exploration.findOne({user_id: req.query.userID}, (err, exp) => {
		if (err)
			console.log(err);
		else
			res.json(exp);
	});
});

router.post('/updateExploration', (req, res) => {
	console.log("REQ:");
	console.log(req.body);
	let userID = req.body.userID;
	let exp; 
	Exploration.findOne({user_id: userID}, (err, resp) => {
		updateEval(resp, req.body.newEval, userID);
	});
});

module.exports = router;
