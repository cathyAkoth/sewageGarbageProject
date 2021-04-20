const express = require('express');
const router = express.Router();
const CustomerRequest = require('../models/CustomerRequest');
const Truck = require('../models/Truck');
const DriverReg = require('../models/DriverReg');

router.get('/customerRequest', async (req, res) => {
  if (req.session) {
    const trucks = await Truck.find();
    //console.log(trucks);
    res.render('customerRequest',{truck:trucks});
    
  }
  });

  
  
  router.post('/customerRequest', async(req, res) => { 
    
    if (req.session) {
    
    try{
      
    console.log(req.body)
    const customerRequest = new CustomerRequest(req.body);
    
    await customerRequest.save()
    res.redirect('/request')
    }catch(err){
      console.log(err);
      res.send('oops something went wrong')
    }
  }

    })

    // show customerRequest data from database on the employeelist pug file
router.get('/', async (req, res) => {
  try {
    // find all the data in the collection
    let customerReqDetails = await CustomerRequest.find();
    if (req.query.dor) {
        customerReqDetails = await CustomerRequest.find({ dor: req.query.dor })
    }
    res.render('customerRequestList', { users: customerReqDetails, title: 'Truck List' })
    } catch (err) {
    console.log(err)
    res.send('Failed to retrive customer details');

}
})

router.get('/update/:id', async (req, res) => {
  try {
      const updateCus = await CustomerRequest.findOne({ _id: req.params.id })
      res.render('updateCustomerReq', { user: updateCus })
  } catch (err) {
      res.status(400).send("Unable to find item in the database");
  }
})


// route to save the updated ddata
router.post('/update', async (req, res) => {
  try {
      await CustomerRequest.findOneAndUpdate({_id:req.query.id}, req.body)
      res.redirect('/request');
  } catch (err) {
      res.status(404).send("Unable to update item in the database");
  }
})

//delete and employee record from the database
// add the delete code to the employeelist pug file
router.post('/delete', async (req, res) => {
  if (req.session) {
  try {
      await CustomerRequest.deleteOne({ _id: req.body.id })
      res.redirect('back')
  } catch (err) {
      res.status(400).send("Unable to delete item in the database");
  }
}
})



  module.exports = router;