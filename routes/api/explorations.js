const express = require("express");
const router = express.Router();


const Exploration = require("../../models/DiagnosisExploration");


const updateEval = (evals, newData, userID) => {
	// Need to update the eval array, then set it to 
	// The users eval array with findOneAndUpdate
	console.log("OLD EVALS:");
	console.log(evals.evals);
	console.log("NEW DATA");
	console.log(newData);
	let index;
	for (let i = 0; i < evals.evals.length; i++) {
		if (evals.evals[i].id == newData.id) {
			index = i;
			break;
		}
	}

	evals.evals[index] = newData;

	console.log("UPDATED EVALS:");
	console.log(evals.evals);

	Exploration.findOneAndUpdate({user_id: userID}, {$set:{evals: evals.evals}}, (err, doc) => {
		if (err)
			console.log("nope.");
		
		console.log(doc);
	});
}


const addNewEval = (evals, newData, userID) => {
	console.log("EVALS:")
	console.log(evals.evals);
	console.log("NEW DATA:");
	console.log(newData);

	let updatedEvals = evals.evals;
	updatedEvals.push(newData);
	Exploration.findOneAndUpdate({user_id: userID}, {$set:{evals: updatedEvals}}, (err, doc) => {
		if (err)
			console.log("Nope.");
		else
			console.log(doc);
	});

}

router.get('/getExploration', (req, res) => {
	console.log("SUBMIT QUERY:");
	console.log(req.query[0]);
	Exploration.findOne({user_id: req.query[0]}, (err, exp) => {
		if (err)
			console.log(err);
		else {
			// console.log(res.);
			res.json(exp);
		}
	});
});

router.post('/newExploration', (req, res) => {
	let userID = req.body.userID;
	Exploration.findOne({user_id: userID}, (err, resp) => {
		if (err)
			console.log("ERROR: " + err);
		else
			addNewEval(resp, req.body.newEval, userID);
	});
});

router.post('/updateExploration', (req, res) => {
	let userID = req.body.userID;
	let exp; 
	Exploration.findOne({user_id: userID}, (err, resp) => {
		updateEval(resp, req.body.newEval, userID);
	});
});

router.post('/newExpUser', (req, res) => {
	const newExp = new Exploration({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		user_id: req.body.user_id,
		evals: []
	});
	newExp.save();
});

module.exports = router;
