// Requiring mongoose.
const mongoose = require('mongoose');
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
  telephoneNo:{
      type: String,
      required: 'please fill in',
  },
  userName: {
      type: String,
      required: 'please fill in',

  },
  password: {
      type: String,
      required: 'input password'
  },
  image: String,
  role: String,
});

// Export mongoose model.
module.exports = mongoose.model('Employee', employeeSchema);