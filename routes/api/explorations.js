const express = require("express");
const router = express.Router();

const Exploration = require("../../models/DiagnosisExploration");

router.get('/getExploration', (req, res) => {
	res.send();
	// Exploration.findOne({firstName: req.body.firstName, lastName: req.body.lastName})
	// .then(exp => {
	// 	if (exp) {
	// 		const payload = {
	// 			firstName: exp.firstName,
	// 			lastName: exp.lastName,
	// 			evalData: exp.evalData
	// 		}
	// 		res.json(exp);
	// 	}
	// });
});

module.exports = router;
