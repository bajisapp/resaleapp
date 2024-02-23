const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    
name: String

})

const CustomerModel = mongoose.model("customer", customerSchema)
module.exports = CustomerModel
