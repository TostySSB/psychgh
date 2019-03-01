const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const app = express();
const DiagnosisExploration = require('./models/DiagnosisExploration')
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
app.get('/getPatients', function(req, res, next){
  db.explorations.find(function(err,explorations){
      if(err){
          res.send(err);
      }
      res.json(explorations);
  });
});
app.use('/api', index);
app.use('/api/users', users);
app.post('/api/submitExploration', (req,res) => {
  const {firstName, lastName} = req.body;
  // Make a new Diagnosis Exploration
  const exp = new DiagnosisExploration({firstName, lastName});
  exp.save(function(err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error submitting new Exploration. Please try again.");
    }
    else {
      res.status(200).send("Success!");
    }
  });
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);