const express = require('express');
const router = express.Router();

router.get('/driverReg', (req, res) => {
    res.render('driverReg');
  });

  module.exports = router;