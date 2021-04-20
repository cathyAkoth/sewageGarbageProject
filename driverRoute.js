const express = require('express');
const router = express.Router();
const DriverReg = require('../models/DriverReg');

router.get('/driverReg', (req, res) => {
    res.render('driverReg');
  });

  router.post('/driverReg', async(req, res) => { 
    try{
    console.log(req.body)
    const driverReg = new DriverReg(req.body);
    
    await driverReg.save()
    res.redirect('/driver')
    }catch(err){
      console.log(err);
      res.send('oops something went wrong')
    }

    })

    // shoW driverReg data from database on the driverRegList pug file
router.get('/', async (req, res) => {
  try {
    // find all the data in the Truck collection
    let driverRegDetails = await DriverReg.find();
    if (req.query.lastname) {
      driverRegDetails = await DriverReg.find({ lastname: req.query.lastname })
    }
    res.render('driverRegList', { users: driverRegDetails, title: 'Driver list' })
} catch (err) {
    console.log(err)
    res.send('Failed to retrive driver details');
}
})
router.get('/update/:id', async (req, res) => {
  try {
      const updateDri = await DriverReg.findOne({ _id: req.params.id })
      res.render('updatedriver', { user: updateDri })
  } catch (err) {
      res.status(400).send("Unable to find item in the database");
  }
})

router.get('/update/:id', async (req, res) => {
  try {
      const updateDri = await DriverReg.findOne({ _id: req.params.id })
      res.render('updateDriver', { user: updateDri })
  } catch (err) {
      res.status(400).send("Unable to find item in the database");
  }
})


// route to save the updated ddata
router.post('/update', async (req, res) => {
  try {
      await DriverReg.findOneAndUpdate({_id:req.query.id}, req.body)
      res.redirect('/driver');
  } catch (err) {
      res.status(404).send("Unable to update item in the database");
  }
})

//delete and employee record from the database
// add the delete code to the employeelist pug file
router.post('/delete', async (req, res) => {
  try {
      await DriverReg.deleteOne({ _id: req.body.id })
      res.redirect('back')
  } catch (err) {
      res.status(400).send("Unable to delete item in the database");
  }
})


  
  module.exports = router;