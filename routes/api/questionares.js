const express = require("express");
const router = express.Router();

//Load questionare model
const Questionare = require("../../models/Questionare");
router.post("/newQuestionare",(req,res)=>{
    const newQuestionare = new Questionare({
        formName: req.body.name,
        approved: false,
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
        res.send(questionares)
      }
    });
   });
router.post("/PHQ9", (req, res) => {
    var diagDep = 0;
    var symptomCount = 0;
    var severityScore = 0;
    var answers = req.body.answers;
    var results = "";
    if (answers[0]>=2 || answers[2]>=2){
      diagDep += 1;
    }
    answers.forEach(element => {
      if (element >=2){
        symptomCount+=1
      }
      if (element >=0){
        severityScore += element;
      }else{
        severityScore = -1000;
      }
    });
    if(symptomCount>=5){
      diagDep+=1;
    }
    if (answers[9]>=1){
      diagDep+=1;
    }
    if(severityScore>=5 && severityScore<=9){
      results = "These symptoms are minimal    Treatment: Support, ask to call if worse, return in 1 month"
    }else if (severityScore>=10 && severityScore<=14){
      results = "These symptoms are consistent with Minor Depression Dysthymia or Major Depression, mild    Treatment: Support, contact in one week Antidepressant or psychotherapy"
    }else if (severityScore>=15 && severityScore<=19){
      results = "These symptoms are consistent with Major Depression, moderate     Treatment: Antidepressant or psychotherapy"
    }else if (severityScore>=20){
      results = "These symptoms are consistent with Major Depression, severe    Treatment: Support, contact in one week Antidepressant and psychotherapy (especially if not improved on monotherapy)"
    }else if (severityScore>=0 && severityScore<=4){
      results = "There no symptoms of depression"
    }else{
      results = "To view these results, please take the PHQ9 test on the Forms Page"
    }
    User.findOneAndUpdate({email:req.body.email}, {$set:{phq9Results: results}}, {upsert: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }else{
          console.log(results)
          console.log (symptomCount)
          console.log("Form results successfully submitted")
          res.send("Success")
        }
      })
        
    // });
    console.log(req.body.email)
})

module.exports = router;