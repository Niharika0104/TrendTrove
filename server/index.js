const scrape = require('./Script');
const express = require("express");
const bcrypt = require('bcrypt');
const app = express();
const db=require('./config/db.js')
const User =require('./models/User.js')
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
//for json stringify
app.use(express.json());




db();
const productsrouter= require("./routes/products.js");
// (async () => {
//     const data = await scrape();
//    // console.log(data); // Do something with the scraped data
// })()
app.use(express.urlencoded({ extended: true }));
//for json stringify
app.use(express.json());

app.use(cookieParser());
//allowed origins
const allowedOrigin = process.env.ACCESS_URL;


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
app.use(productsrouter);



//register 
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
const bcryptSalt = 10;
const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    console.error(e);
    if (e.name === 'ValidationError') {
      const errors = Object.values(e.errors).map(err => err.message);
      return res.status(400).json({ error: errors.join(', ') });
    }
    res.status(500).json({ error: "Registration failed" }); 
  }
});

// LOGIN 

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  try {
    const userDoc = await User.findOne({ email });  //userDoc
    console.log('userDoc:', userDoc);

    if (!userDoc) {
      return res.status(401).json({ error: "Invalid credentials" }); 
    }

    const isMatch = await bcrypt.compare(password, userDoc.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
     
    const token = jwt.sign({userDoc},process.env.JWT_SECRET,{expiresIn:'1h'});
    res.cookie("jwt",token,{ httpOnly: false }).json(userDoc);
  }
  catch (error) {
    console.error(error); 
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get('/profile', async (req, res) => {
  const {token} = req.cookies;
  res.json({token});

  if(token){
    jwt.verify(token,process.env.JWT_SECRET,async (err ,user)=>{
      if(err) throw err;
      const {name,email,_id} =await User.findById(userData.id);
      res.json({name,email,_id});
    });
  }else{
    res.json(null);
  }
});

app.post('/logout', (req, res) => {
  // Clear the token from cookies
  res.cookie('token', '', { expires: new Date(0), secure: true });
  res.status(200).json({ message: 'Logout successful' });
});




// logout 
// app.delete('/logout', async (req, res) => {
//   res.clearCookie('token'); // Clear the session token
//   res.status(200).json({ message: 'Logged out successfully' });
// });








app.listen( process.env.PORT, () => {
    console.log(`server is listening on ${process.env.PORT}`);
  });
  
  app.get("/", (req, res) => {
    res.send("welcome");
  }); 