const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    // Define the schema fields based on your actual data structure
    // For example: name, price, description, etc.
    createdby: String,
    productcategory: String,
    productname: String,
    productprice: String,
    location: String,
    status: String,
    description: String,
    itemdetails: String,
    condition: String,
    meetup: String,
    imagename: String

    // Add other fields as needed
});

const productmodel = mongoose.model('produs', productSchema);

module.exports = productmodel;
