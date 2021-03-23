const express = require('express');
const multer = require ('multer')
const router = express.Router();

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
  try {
      //console.log(req.body)
       res.send(req.file);
  } catch (err) {
      res.send(400);
  }
})


router.get('/employeeReg', (req, res) => {
    res.render('employeeReg');
  });

  module.exports = router;