const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema({
    
        image: {
            type:String,
            required:true
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
            type:String,
            required:true
        },
        actualprice: {
            type:String,
            required:true
        },
        discountpercentage: {
            type:String,
            required:true
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
},{ validateBeforeSave: true })
module.exports=ProductSchema