const mongoose=require("mongoose")
const CategorySchema= new mongoose.Schema(
    {
      category: {

    type:String,
    required:true
},subcategory:{
    type:String,
    required:true
},list:[{
    image: {
        type:String
        
    },
    brand: {
        type:String,
        required:true
    },
    title: {
        type:String,
        required:true
    },
    discountprice: {
        type:String
    },
    actualprice: {
        type:String
       
    },
    discountpercentage: {
        type:String
    },
    total:{
        type:Number,
        required:true
    },
    available:{
        type:Number,
        required:true
    },ratings:{
        type:Number,
        required:true
    }
}]
      },{validateBeforeSave:true}
    )
    
const categoryModel = mongoose.model("categories", CategorySchema);
module.exports = categoryModel;