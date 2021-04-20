const express = require('express');
const router = express.Router();
const SignUp = require('../models/SignUp')

// specify what to do when user hit the '/'(home page) route/endpoint
router.get('/signUp', (req, res) => {
    res.render('signUp')
})

router.post('/signUp', async(req, res) => {
    try {
        
        const signUp = new SignUp(req.body);
        
        await SignUp.register(signUp, req.body.password, (err) => {
            if (err)
              { 
               throw err
               
              }
              
            res.redirect('/login')
        })
    }
    catch (err) {
        res.status(400).send('Ooops! Something went wrong.')
        console.log(err)
    }
})

//Show truck data from database on the trucklist pug file
router.get('/', async (req, res) => {
    try {
        // Find all the data in the Truck collection.
        
        const signUpDetails = await SignUp.find();
        if (req.query.tor) {
            signUpDetails = await SignUp.find({ tor: req.query.tor })
        
        }
        res.render('signUpList', { users: signUpDetails , title: 'signUp List' })
    } catch (err) {
        res.send('Failed to retrive signUp details');
    }
  })

  router.get('/update/:id', async (req, res) => {
    try {
        const updateSig = await SignUp.findOne({ _id: req.params.id })
        res.render('updateSignUp', { user: updateSig })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})

// // route to save the updated ddata
// router.post('/update', async (req, res) => {
//     try {
//         await SignUp.findOneAndUpdate({_id:req.query.id}, req.body)
//         res.redirect('/sign');
//     } catch (err) {
//         res.status(404).send("Unable to update item in the database");
//     }
// })

// //delete and user record from the database
// // add the delete code to the list pug file
// router.post('/delete', async (req, res) => {
//     try {
//         await SignUp.deleteOne({ _id: req.body.id })
//         res.redirect('back')
//     } catch (err) {
//         res.status(400).send("Unable to delete item in the database");
//     }
// })
  
     module.exports = router;