const express = require("express") //Importing Express.

const app = express();


// configurations
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/employee',(req, res, next) => {
    console.log("A new request received at ");
    next();  
  });

//app.use(express.static('public'));


// routes.

app.get('/login', (req, res) => {
    res.render('login');
    });
    
app.get('/employee', (req, res) => {
        res.render('employeeReg');
      });
    
// server
app.listen(4000, () => console.log('listening on port 4000'));


