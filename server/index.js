const scrape = require('./Script');
const express = require("express");
const app = express();
const db=require('./config/db.js')
const User =require('./models/User.js')
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

require("dotenv").config();

const allowedOrigin = process.env.FRONTEND_URL;

const options={
  origin: allowedOrigin,
  credentials: true
}
app.use(cors(options));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



db();
const productsrouter= require("./routes/products.js");
const registerrouter=require("./routes/register.js");
const loginrouter =require("./routes/login.js")
const logoutrouter= require("./routes/logout.js")
const profileRouter = require('./routes/profile');

const productRouter =require('./routes/product.js')
const saveProductRouter=require('./routes/product.js')


app.use(express.urlencoded({ extended: true }));
//for json stringify
app.use(express.json());
app.use(cookieParser());


//allowed origins

app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", options.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  
   
  next();

});


app.use(productsrouter);
app.use(registerrouter);
app.use(loginrouter);
app.use(logoutrouter);
app.use(profileRouter);
app.use(productRouter)
app.use(saveProductRouter)


  
  


app.listen( process.env.PORT, () => {
    console.log(`server is listening on ${process.env.PORT}`);
  });
  
  app.get("/", (req, res) => {
    res.send("welcome");
  }); 