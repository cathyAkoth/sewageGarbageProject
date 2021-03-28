const express = require("express") //Importing Express.
const mongoose = require('mongoose')
require('dotenv').config();

const employeeRoutes = require("./routes/employeeRoute")
const loginRoutes = require("./routes/loginRoute")
const customerRoutes = require("./routes/customerReqRoute")
const homePageRoutes = require("./routes/homePageRoute")
const driverRegRoutes = require("./routes/driverRoute")
const conductorRoutes = require("./routes/conductorRoute")


const app = express();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:false


});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
   });

  
// configurations
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/employee',(req, res, next) => {
    console.log("A new request received at ");
    next();  
  });

app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public/images'));

app.use(express.urlencoded({extended: true}))


// routes.
    
app.use('/employee', employeeRoutes);
app.use('/', loginRoutes);
app.use('/request', customerRoutes);
app.use('/' , homePageRoutes);
app.use('/driver', driverRegRoutes);
app.use('/conductor', conductorRoutes);


app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});
   
// server
app.listen(4000, () => console.log('listening on port 4000'));


