const express = require('express');
const router = express.Router();


router.get('/loginPage', (req, res) => {
    res.render('login1');
  });

  module.exports = router;