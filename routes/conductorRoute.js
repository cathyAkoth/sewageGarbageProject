const express = require('express');
const router = express.Router();

router.get('/conductorReg', (req, res) => {
    res.render('conductorReg');
  });

  module.exports = router;