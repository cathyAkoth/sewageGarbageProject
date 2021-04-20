const express = require('express');
const router = express.Router();
const TruckPayment = require('../models/TruckPayment');


router.get('/truckPayment', (req, res) => {
    res.render('truckPayment');
  });

router.post('/truckPayment', async(req, res) => { 
try{
console.log(req.body)
const truckPayment = new TruckPayment(req.body);

await truckPayment.save()
res.redirect('/truckPayment')
}catch(err){
    console.log(err);
    res.send('oops something went wrong')
}

})


router.get('/', async (req, res) => {
    try {
      // find all the data in the Truck collection
      let truckPaymentDetails = await TruckPayment.find();
      if (req.query.date) {
        truckPaymentDetails = await TruckPayment.find({ date: req.query.date})
      }
      res.render('truckPaymentList', { users: truckPaymentDetails, title: 'truckPayment list' })
  } catch (err) {
      console.log(err)
      res.send('Failed to retrive truck payment details');
  }
  })

  router.get('/update/:id', async (req, res) => {
    try {
        const updatePay = await TruckPayment.findOne({ _id: req.params.id })
        res.render('updateTruckPayment', { user: updateDri })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
  })
  
//   router.get('/update/:id', async (req, res) => {
//     try {
//         const updateDri = await DriverReg.findOne({ _id: req.params.id })
//         res.render('updateDriver', { user: updateDri })
//     } catch (err) {
//         res.status(400).send("Unable to find item in the database");
//     }
//   })
  
  
//   // route to save the updated ddata
//   router.post('/update', async (req, res) => {
//     try {
//         await DriverReg.findOneAndUpdate({_id:req.query.id}, req.body)
//         res.redirect('/driver');
//     } catch (err) {
//         res.status(404).send("Unable to update item in the database");
//     }
//   })
  
  //delete and employee record from the database
  // add the delete code to the employeelist pug file
  router.post('/delete', async (req, res) => {
    try {
        await TruckPayment.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
  })
  
  
    

  
module.exports = router;
