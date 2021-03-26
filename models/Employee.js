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
      type: string,
      required:'please select',
  },
  age:{
      type: number,
      required: 'please fill in',
  },
  nin:{
      type: string,
      unique: true,
      required: 'fill in',
  },
  dateOfBirth:{
      type: date,
      require: 'please fill in',
  },
  phoneNumber:{
      type: string,
      required: 'please fill in',
  },
  userName: {
      type: string,
      required: 'please fill in',

  },
  password: {
      type: password,
      required: 'input password'
  },
  image: string,
  role: string,
});

// Export mongoose model.
module.exports = mongoose.model('Employee', employeeSchema);