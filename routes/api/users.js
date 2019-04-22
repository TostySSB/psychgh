
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
var recent_id = 0;
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
//honestly, this method is a mystery, it appears to find the most recently created user, and get its user_id value
User.findOne().limit(1).sort({ date: -1 }).exec((err, data) => {
  if(err) {
      console.log("We didnt know how to program, please bear with us as we never fix this error")
      return;
  }
  if(data) {
      recent_id = Number(data.user_id);
      return;
  }
});
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      
      const newUser = new User({
        user_id: Number(recent_id + 1),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        pfirstName: "",
        plastName: "",
        phq9: {
          q1: 100,
          q2: 100,
          q3: 100,
          q4: 100,
          q5: 100,
          q6: 100,
          q7: 100,
          q7: 100,
          q8: 100,
          q9: 100,
          q10: 100,
        },
        phq9Results: "",
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        console.log(user.isPractitioner);
        const payload = {
          id: user.id,
          name: user.firstName,
          lastName: user.lastName,
          email: user.email,
          isPractitioner: user.isPractitioner
        };
        
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});
router.get('/userList', function(req, res) {
  // res.send('respond with a resource');
  User.find({}, function(err, users) {
    if (err){
      console.log(err);
    }else{
      res.json(users)
    }
  });
 });
// returns a single based on its user_id
router.get('/singleUser', function(req, res) {
  // res.send('respond with a resource');
  User.findOne({user_id: req.query.userID}, function(err, users) {
    console.log(req.query.userID);
    if (err){
      console.log(err);
    }else{
      res.json(users)
    }
    console.log(users)
  });
 });
 //Returns a single user's information
 router.get('/getUser', function(req, res) {
  // res.send('respond with a resource');
  User.findOne({email: req.query.email}, function(err, users) {
    if (err){
      console.log(err);
    }else{
      res.json(users)
    }
    console.log(users)
  });
 });
 router.get('/userPHQ9', function(req, res) {
  // res.send('respond with a resource');
  User.findOne({user_id: req.query.userID}, function(err, users) {
    console.log(req.query.userID);
    if (err){
      console.log(err);
    }else{
      res.json(users.get('phq9.q10'))
      console.log(users.get('phq9.q10') + "test")
    }
    console.log(users)
  });
 });
 router.post("/claim", (req, res) => {
  User.findOneAndUpdate({email:req.body.email}, {$set:{pfirstName: req.body.firstName, plastName: req.body.lastName}}, {upsert: false}, (err, doc) => {
      if (err) {
          console.log("Something wrong when updating data!");
      }
      console.log("Claim called")
      res.send("Success")
  });
})


module.exports = router;
