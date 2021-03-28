const express = require('express');
const multer = require ('multer')
const router = express.Router();
const Employee = require('../models/Employee');

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

router.post('/employeeReg', upload.single('image'), async(req, res) => { 
    try{
    console.log(req.body)
    const employee = new Employee(req.body);
    employee.image = req.file.path;
    await employee.save()
    res.redirect('/employee/')
    }catch(err){
      console.log(err);
      res.send('oops something went wrong')
    }

    })
   
    router.get('/', async (req, res) => {
      try{
      
        // find all data in employee collection.
      const employeeDetails = await Employee.find();
      res.render('employeeList', {users: employeeDetails , title: 'Employee List'})
      } catch (err) {
          res.send('failed to retrieve employee details');
      }
      
    });






  module.exports = router;