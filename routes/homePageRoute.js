const express = require('express');
const router = express.Router();

router.get('/homePage', (req, res) => {
    res.render('employeeReg');
  });

  module.exports = router;