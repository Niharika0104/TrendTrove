const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phonenumber: {
      type: String,
     
    },
    password: {
        type: String,
        required: true,
      },
    wishlist: [
      {
        productid: { type: mongoose.Types.ObjectId,
        ref:"categories"
     }
      
      }
    ],
    cart:[
        {
            productid: { type: mongoose.Types.ObjectId,
                ref:"categories"
             }
            }
        
      ],
  },
  { validateBeforeSave: true }
);

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;