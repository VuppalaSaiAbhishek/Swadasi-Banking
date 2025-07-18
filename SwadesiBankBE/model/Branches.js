var mongoose = require('mongoose');
var BranchSchema = mongoose.Schema({
    BranchName:String,
    IFSCCode:String,
    Address:String,
    BranchManager:String,
    ContantNumber:String
})

var Branch = mongoose.model('branchdatas',BranchSchema);
module.exports = Branch;
