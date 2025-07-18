var express = require('express');
var router = express.Router();
var BranchData = require('../model/Branches');

router.get('/GetBranchs',(req,res)=>{
    BranchData.find({})
      .then((data)=>res.send(data))
      .catch((err)=>res.send(err))
});

router.post('/PostBranch',(req,res)=>{
    var a = new BranchData(req.body);
    a.save()
      .then(()=>res.send("Save Data in DB"))
      .catch((err)=>res.send(err));
});

router.put('/UpdateBranch',(req,res)=>{
    BranchData.findByIdAndUpdate(req.params.id,req.body)
      .then(()=>res.send("Data is Updated"))
      .catch((err)=>res.send(err));
})

module.exports = router;
 