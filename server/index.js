const scrape = require('./Script');
const express = require("express");
const app = express();
const db=require('./config/db.js')
const User =require('./models/User.js')
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

require("dotenv").config();

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
const allowedOrigin = process.env.ACCESS_URL;
app.use(cors({
  origin: allowedOrigin,
  credentials: true
}));

app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", allowedOrigin);
  // Set other CORS headers
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200); // Respond with 200 OK to preflight requests
  }
    // Call the next middleware function
  next();

});
// app.use(cors({
//   origin: 'http://localhost:3000', // Your frontend URL
//   credentials: true
// }));

app.use(productsrouter);
app.use(registerrouter);
app.use(loginrouter);
app.use(logoutrouter);
app.use(profileRouter);
app.use(productRouter)
app.use(saveProductRouter)


app.get('/profile', async (req, res) => {
  const { token } = req.cookies;
  console.log({token})

  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    if (err) {
      console.error('Token verification failed:', err);
      return res.status(403).json({ message: 'Token is not valid' });
    }

    try {
      const user = await User.findById(decodedToken.userId); // Assuming your User model has a method to find by ID
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Optionally, you can sanitize the user object before sending it to the client
      const { name, email, _id } = user;
      res.json({ name, email, _id });
      console.log({user})

    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'Error fetching user data' });
    }
  });
});
  // const {token} = req.cookies;
  // console.log({token})
  // if(!token) return res.status(401).json({message:"Not Authenticateed"})
  // if(token){
  // jwt.verify(token,process.env.JWT_SECRET,async (err , userDoc)=>{
  // if(err) throw err;
  // const {name,email,_id} =await User.findById(userDoc.id);
  // res.json({name,email,_id});
  // });
  // }else{
  // res.json(null);
  // 



app.listen( process.env.PORT, () => {
    console.log(`server is listening on ${process.env.PORT}`);
  });
  
  app.get("/", (req, res) => {
    res.send("welcome");
  }); 