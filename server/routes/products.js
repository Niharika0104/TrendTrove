const express = require("express");
const router = express.Router();
const {
    getProducts
} = require("../controllers/products.js");


router.post("/getproducts", getProducts);



module.exports = router