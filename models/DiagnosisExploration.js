const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ExplorationSchema = new mongoose.Schema({
		firstName: {type: String, required: true},
		lastName: {type: String, required: true},
		user_id: {type: Number, required: true},		
	});

module.exports = Exploration = mongoose.model('explorations', ExplorationSchema);
