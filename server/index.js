const scrape = require("./Script");
const express = require("express");
const app = express();
const db = require("./config/db.js");
const cors = require("cors");
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
//for json stringify
app.use(express.json());

db();
const productsrouter = require("./routes/products.js");
// (async () => {
//     const data = await scrape();
//    // console.log(data); // Do something with the scraped data
// })()
app.use(express.urlencoded({ extended: true }));
//for json stringify
app.use(express.json());
//for using http requests

//allowed origins
const allowedOrigin = process.env.ACCESS_URL;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  // Set other CORS headers
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // Respond with 200 OK to preflight requests
  }
  // Call the next middleware function
  next();
});
app.use(productsrouter);

app.listen(process.env.PORT, () => {
  console.log(`server is listening on ${process.env.PORT}`);
});
app.get("/", (req, res) => {
  res.send("welcome");
});
