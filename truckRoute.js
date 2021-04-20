const express = require('express');
const router = express.Router();
const Truck = require('../models/Truck')
const DriverReg = require('../models/DriverReg');



router.get('/truckReg', async (req, res) => {
  const driverReg = await DriverReg.find();
    console.log(driverReg);
    res.render('truck',{driverReg:driverReg});
  });

  router.post('/truckReg', async(req, res) => { 
    try{
    console.log(req.body)
    const truck = new Truck(req.body);
    
    await truck.save()
    
    res.redirect('/truck/truckReg')
    }catch(err){
      //console.log(err);
      //res.send('oops something went wrong')
    }

    })

    // Show truck data from database on the trucklist pug file
router.get('/', async (req, res) => {
  try {
    // find all the data in the Truck collection
    let truckDetails = await Truck.find();
    if (req.query.truckService) {
        truckDetails = await Truck.find({ truckService: req.query.truckService })
    }
    res.render('truckList', {trucks:truckDetails, title: 'Truck List' })
} catch (err) {
    console.log(err)
    res.send('Failed to retrive truck details');
}
})
router.get('/update/:id', async (req, res) => {
  try {
      const updateTru = await Truck.findOne({ _id: req.params.id })
      res.render('updateTruck', {truck: updateTru })
  } catch (err) {
      res.status(400).send("Unable to find item in the database");
  }
})


// route to save the updated data
router.post('/update', async (req, res) => {
  try {
      await Truck.findOneAndUpdate({_id:req.query.id}, req.body)
      res.redirect('/truck');
  } catch (err) {
      res.status(404).send("Unable to update item in the database");
  }
})

//delete and truck record from the database
// add the truck code to the trucklist pug file
router.post('/delete', async (req, res) => {
  try {
      await Truck.deleteOne({ _id: req.body.id })
      res.redirect('back')
  } catch (err) {
      res.status(400).send("Unable to delete item in the database");
  }
})

  module.exports = router;