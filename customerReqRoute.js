const express = require('express');
const router = express.Router();
const CustomerRequest = require('../models/CustomerRequest');

router.get('/customerRequest', (req, res) => {
    res.render('customerRequest');
  });

  router.post('/customerRequest', async(req, res) => { 
    try{
    console.log(req.body)
    const customerRequest = new CustomerRequest(req.body);
    
    await customerRequest.save()
    res.send('success')
    }catch(err){
      console.log(err);
      res.send('oops something went wrong')
    }

    })

  module.exports = router;