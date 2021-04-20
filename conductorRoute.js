const express = require('express');
const router = express.Router();
const ConductorReg = require('../models/ConductorReg');


router.get('/conductorReg', (req, res) => {
    res.render('conductorReg');
  });

  router.post('/conductorReg', async(req, res) => { 
    try{
    console.log(req.body)
    const conductorReg = new ConductorReg(req.body);
    
    await conductorReg.save()
    res.redirect('/')
    }catch(err){
      console.log(err);
      res.send('oops something went wrong')
    }

    })

    
router.get('/', async (req, res) => {
  try {
      // find all the data in the ConductorReg collection
       
      let conductorRegDetails = await ConductorReg.find();
      if (req.query.tor) {
        conductorRegDetails = await ConductorReg.find({ tor: req.query.tor })
    
    }
      res.render('conductorRegList', { users: conductorRegDetails , title: 'conductorReg List' })
  } catch (err) {
      res.send('Failed to retrive conductorReg details');
  }
})
  

  module.exports = router;