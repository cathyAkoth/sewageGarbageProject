const express = require('express');
const multer = require ('multer')
const router = express.Router();
const Employee = require('./models/Employee.');

router.get('/employeeReg', (req, res) => {
  res.render('employeeReg');
});

// image upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage })

router.post('/employeeReg', upload.single('image'), (req, res) => {
  const employee = new Employee(req.body);
  employee.image = req.file.path;
  employee.save() // asynchrous operation(.save())
  .then(() =>{res.send('thank you for registering')})
  .catch((err) => {
    console.log(err);
    res.send('oops! something went wrong.');
  })
})




  module.exports = router;