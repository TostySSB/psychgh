const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const app = express();
var users = require('./routes/users');
var index = require('./routes/index');
//connect to the database
mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/api/getTest', (req,res) => {
	let list = ['item1', 'item2', 'item3'];
	res.json(list);
	console.log("It worked.");
});
app.use('/api', index);
app.use('/api/users', users);
// Handles any requests that don't match the ones above
app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);