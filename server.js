const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const DiagnosisExploration = require('./models/DiagnosisExploration');
const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
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
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
