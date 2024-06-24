 
const CategoryModel = require('../models/Category');
const { response } = require("express");

require("dotenv").config();

const getProducts = async (req, res) => {
  try {
    //getting data from request body
    const request = req.body;
    const query = request.query;

    console.log(query+"back");
   const data=await CategoryModel.findOne({category:query});
   if(data){
       return res.status(200).json(data?.list);
   }
    if (!request || !data) {
     return res.json({ error: "some error has occured" });
    }
}
catch(ex){

}
}

// function to get best sellers
const getBestSellers = async (req, res) => {
  try {
    const categoryData = await CategoryModel.find();
    if (!categoryData) {
      return res.json({ error: "category not found" });
    }
    const products = categoryData.map((category) => {
      return category.list;
    }).flat();
    //sorting products based on sales percentage
    products.sort((a, b) => {
      return calculateSalesPercentage(b) - calculateSalesPercentage(a);
    });
    res.json(products.slice(0, 5));
  }
  catch (err) {
    res.json({error: err.message})
  }
}

// function to calculate sales percentage
const calculateSalesPercentage = (data, i) => {
  if(!data.total){
    return 0;
  }
  if(!data.available){
    return data.total;
  }
  const sales = data.total - data.available;
  return (sales / data.total) * 100;
}

module.exports={
  getProducts,
  getBestSellers
}
