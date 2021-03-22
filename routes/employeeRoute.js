const express = require('express');
const router = express.Router();

router.get('/employeeReg', (req, res) => {
    res.render('employeeReg');
  });

  module.exports = router;