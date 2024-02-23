const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    
email: String,
mobile: String,
password: String,
username: String,
location: String

})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel