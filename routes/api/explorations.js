const express = require("express");
const router = express.Router();

const Exploration = require("../../models/DiagnosisExploration");

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
	let exp;
	Exploration.findOne({user_id: req.body.userID}, (err, resp) => {
		if (err)
			console.log(err);
		else {
			exp = resp;
			console.log("EXP");
			console.log(type);
		}
	});
});

module.exports = router;
