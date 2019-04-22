const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const answerSchema = new Schema({
    answer: String
},{ _id : false })
const questionSchema = new Schema({
    question: String, 
    answers:[answerSchema]
}, {_id : false})
const QuestionareSchema = new Schema({
    formName: String,
    questions: [questionSchema]
});
module.exports = Questionare = mongoose.model("questionares", QuestionareSchema);