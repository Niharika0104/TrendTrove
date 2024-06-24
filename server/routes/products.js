const express = require("express");
const router = express.Router();
const {
    getProducts, getBestSellers
} = require("../controllers/products.js");


router.post("/getproducts", getProducts);
router.post("/getbestsellers", getBestSellers);



module.exports = router