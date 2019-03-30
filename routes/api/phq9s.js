const express = require("express");
const router = express.Router();
// Load PHQ9 model
const PHQ9 = require("../../models/PHQ9");


router.post("/q1", (req, res) => {
        var query = {'user_id':req.body.user_id};
        req.newData.username = req.user.username;
        MyModel.findOneAndUpdate(query, req.newData, {upsert:true}, function(err, doc){
            if (err) return res.send(500, { error: err });
            return res.send("succesfully saved");
        });
    }   
)