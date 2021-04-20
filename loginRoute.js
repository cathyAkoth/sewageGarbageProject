const express = require('express');
const router = express.Router();
const passport = require('passport');
//dont wrap the get route for login
router.get('/', (req, res) => {
    res.render('login');
  });
// checks username and password using passport
router.post('/', passport.authenticate('local', {failureRedirect: '/login'}), (req,res) =>{
  req.session.user = req.user;
  res.redirect('/request');
})
  module.exports = router;