const express = require("express");
const router = express.Router();

//Load questionare model
const Questionare = require("../../models/Questionare");
router.post("/newQuestionare",(req,res)=>{
    const newQuestionare = new Questionare({
        formName: req.body.name,
        questions: req.body.questions
    })
    newQuestionare
        .save(function(error){
            if (error){
                console.log(error);
            }else{
                console.log("Form Submitted")
                res.send("Success")
            }
        })
})
//Returns a list of 
router.get('/questionareList', function(req, res) {
    // res.send('respond with a resource');
    Questionare.find({}, function(err, questionares) {
      if (err){
        console.log(err);
      }else{
        console.log(questionares)
        res.json(questionares)
      }
    });
   });
module.exports = router;