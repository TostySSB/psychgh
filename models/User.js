const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  user_id:{
    type: Number,
    required: false
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isPractitioner: {
    type: Boolean,
    default: false
  },
  //Practitioner's info
  pfirstName: {
    type: String,
    required: false
  },
  plastName: {
    type: String,
    required: false
  },
  phq9:{
    type: Map,
    of: Number
  },
  phq9Results:{
    type: String,
    required: false
  }
});

module.exports = User = mongoose.model("users", UserSchema);
