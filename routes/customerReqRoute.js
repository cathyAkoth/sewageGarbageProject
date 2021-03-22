const express = require('express');
const router = express.Router();

router.get('/customerRequest', (req, res) => {
    res.render('customerRequest');
  });

  module.exports = router;