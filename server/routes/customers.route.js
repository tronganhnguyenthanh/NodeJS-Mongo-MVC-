const express = require("express")
const router_api = express.Router()
const CustomerController = require("../controllers/customers.controller")
// Add Customer
router_api.post("/customer/add", CustomerController.createCustomer)
// Get customer list
router_api.get("/customer/list", CustomerController.getCustomerList)
// Get customers detail
router_api.get("/customer/detail/:id", CustomerController.getCustomerDetail)
// Remove customer
router_api.delete("/customer/delete/:id", CustomerController.removeCustomer)
module.exports = router_api