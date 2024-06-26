const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  discountPrice: { 
    type: Number,
    required: true
  },
  actualPrice: { 
    type: Number,
    required: true
  
  },
  discountPercentage: {
    type: String, 
    required: true
    
  },
  total: {
    type: Number,
    required: true
    
  },
  available: {
    type: Number,
    required: true
   
    
  },
  ratings: {
    type: Number,
    required: true
  }
},

);

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;
