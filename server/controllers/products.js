 
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
module.exports={getProducts}
