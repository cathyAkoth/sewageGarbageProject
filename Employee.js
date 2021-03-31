// Requiring mongoose.
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// Create a schema for data that is needed to be saved.
const employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: 'please fill in',
  },
  lastname: {
    type: String,
    required: 'please fill in',
  },
  gender:{
      type: String,
      required:'please select',
  },
  nin:{
    type: String,
    unique: true,
    require: 'please enter nin'
  },
  date:{
      type: String,
      required: 'please fill in',
  },
  age:{
    type: String,
      required: 'please fill in',
  },
  telephoneNo:{
      type: String,
      required: 'please fill in',
  },
  username: {
      type: String,
      required: 'please fill in',

  },
  password:{
  type: String,
  },
  image:{
    type: String,
    role: String,
  }
});


employeeSchema.plugin(passportLocalMongoose);

// Export mongoose model.
module.exports = mongoose.model('Employee', employeeSchema);