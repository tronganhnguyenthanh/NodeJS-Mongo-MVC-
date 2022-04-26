const customersModel = require("../models/customers.model")
module.exports = {
  // Create Customer
  createCustomer: async (req, res) => {
    try {
      let customer = new customersModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phoneNumber:req.body.phoneNumber,
        address:req.body.address,
       })
       let customer_save = await customer.save()
       res.json(customer_save)
    } catch (error) {
       res.status(400).json({message:error})
    }
  },
  // Get Customer list
  getCustomerList: async (req, res) => {
    try {
      let customer_list = await customersModel.find()
      res.json(customer_list)
    } catch (error) {
      res.status(400).json({message:error})
    }
  },
 // Get Customer Detail
 getCustomerDetail: async (req, res) => {
   try {
     let _id = req.params.id
     let customer_detail = await customersModel.findById(_id)
     res.json(customer_detail)
   }catch(error) {
     res.status(400).json({message:error})
    }
  },
  // Delete Customer
  removeCustomer: async (req, res) => {
    try {
      let _id = req.params.id
      let customer_delete = await customersModel.findByIdAndDelete(_id)
      res.json(customer_delete)
    }catch(error) {
      res.status(400).json({message:error})
     }
   }
}
