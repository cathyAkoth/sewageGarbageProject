const express = require('express');
const router = express.Router();

router.get('/layout1', (req, res) => {
    res.render('layout');
  });

  module.exports = router;