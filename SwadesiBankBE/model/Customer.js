var mongoose = require('mongoose');
var CustomerSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Mandatory"]
    },
    email:{
        type:String,
        required:[true,"Email is  Mandatory"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Password is Mandatory"],
        minlength:8,
        maxlength:16
    },
    mobile:{
        type:String,
        required:[true,"Mobile Number is Mandatory"],
        minlength:10,
        min:1000000000,
        max:9999999999,
        unique:true
    },
    Gender:{
        type:String,
        required:[true,"Gender is Mandotory"]
    },
    Balance:{
        type:Number,
        required:[true,"Balance is Mandotory"]
    }
},{
    timeStamps:true
})
var CustomerModel =  mongoose.model('customerdata',CustomerSchema);
module.exports = CustomerModel;