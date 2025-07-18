var mongoose = require('mongoose');
var CustomerSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    mobile:String,
    AccountType:String,
    Gender:String,
    Branch:String,
    Balance:String
})
var Customer =  mongoose.model('customerdata',CustomerSchema);
module.exports = Customer;