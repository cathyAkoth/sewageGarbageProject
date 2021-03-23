const express = require("express") //Importing Express.
const employeeRoutes = require("./routes/employeeRoute")
const loginRoutes = require("./routes/loginRoute")
const customerRoutes = require("./routes/customerReqRoute")
const homePageRoutes = require("./routes/homePageRoute")
const driverRegRoutes = require("./routes/driverRoute")
const conductorRoutes = require("./routes/conductorRoute")
const layoutRoutes = require("./routes/layoutRoute")

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
    
app.use('/employee', employeeRoutes);
app.use('/login1', loginRoutes);
app.use('/request', customerRoutes);
app.use('/home' , homePageRoutes);
app.use('/driver', driverRegRoutes);
app.use('/conductor', conductorRoutes);
app.use('/layout',layoutRoutes);

app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});
   
// server
app.listen(4000, () => console.log('listening on port 4000'));


