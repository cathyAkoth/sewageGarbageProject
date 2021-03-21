const express = require("express") //Importing Express.

const app = express();


// configurations
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/employee',(req, res, next) => {
    console.log("A new request received at ");
    next();  
  });

app.use(express.static('public'));


// routes.


    
app.get('/employee', (req, res) => {
        res.render('employeeReg');
      });

app.get('/request', (req, res) => {
        res.render('customerRequest');
      });   
      
       
app.get('/driver', (req,res)=>{
        res.render('driverReg')
})

app.get('/login1', (req, res) => {
  res.render('login1');
});

app.get('/conductor', (req, res) => {
  res.render('conductorReg');
});

app.get('/home', (req, res) => {
  res.render('homepage');
});

    
// server
app.listen(4000, () => console.log('listening on port 4000'));


