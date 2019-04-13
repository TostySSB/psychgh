const express = require("express");
const router = express.Router();
// Load PHQ9 model
// Load User model
const User = require("../../models/User");

router.post("/q1", (req, res) => {
    User.findOneAndUpdate({email:req.body.email}, {$set:{phq9:{q1:req.body.q1,q2:req.body.q2,q3:req.body.q3,q4:req.body.q4,q5:req.body.q5,q6:req.body.q6,q7:req.body.q7,q8:req.body.q8,q9:req.body.q9,q10:req.body.q10}}}, {upsert: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
    
        console.log(doc);
    });
    User.findOneAndUpdate({email:req.body.email}, {$set:{phq9Results: req.body.results}}, {upsert: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
    
        console.log(doc);
    });
})


module.exports = router;