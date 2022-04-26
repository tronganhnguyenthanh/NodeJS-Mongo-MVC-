const mongoose = require("mongoose")
let Customers = mongoose.Schema({
  firstName:{
   type:String
  },
  lastName:{
   type:String
  },
  phoneNumber:{
   type:String
  },
  address:{
   type:String
  }
},{
 collection:"customers"
})
module.exports = mongoose.model("Customers", Customers)