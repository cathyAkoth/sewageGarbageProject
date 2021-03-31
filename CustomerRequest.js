// Requiring mongoose.
const mongoose = require('mongoose');
// Create a schema for data that is needed to be saved.
const customerRequestSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: 'please fill in',
  },
  lname: {
    type: String,
    required: 'please fill in',
  },
  nin:{
      type: String,
      unique: true,
      required:'please select',
  },
  service:{
    type: String,
    require: 'please enter service'
  },
  noTrucks:{
      type: String,
      required: 'please fill in',
  },
  dor:{
    type: String,
    required:'please select',
  },
  location:{
  type: String,
  require: 'please enter '
  },
  appt:{
    type: String,
    required: 'please fill in',
},
phone:{
  type: String,
  required:'please select',
},
tor:{
type: String,
require: 'please enter '
},

  
})
// Export mongoose model.
module.exports = mongoose.model('CustomerRequest', customerRequestSchema)