const express = require("express");
const router = express.Router();

const Exploration = require("../../models/DiagnosisExploration");

router.get('/getExploration', (req, res) => {
	Exploration.findOne({user_id: req.query.userID}, (err, exp) => {
		if (err)
			console.log(err);
		else
			res.json(exp);
		console.log(exp);
	});
});

module.exports = router;
