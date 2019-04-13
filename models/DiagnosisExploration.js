const mongoose = require('mongoose');
const express = require('express');
const mongo = require('mongodb');


const explorationSchema = new mongoose.Schema({
		new: Boolean,
		firstName: {type: String, required: true},
		lastName: {type: String, required: true},
		evalData: {}
		
	});

module.exports = mongoose.model('Exploration', explorationSchema);
