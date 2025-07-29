var mongoose = require('mongoose');
var TranstionSchema = mongoose.Schema({
    SMoblie:String,
    RMobile:String,
    SName:String,
    RName:String,
    Amount:Number

},{
    timeStamps:{createdAt:true,updatedAt:false}
});

var TranstionModel = mongoose.model('TranstionData',TranstionSchema);
module.exports = TranstionModel;