const express=require('express');
const router=express.Router();

const { getDetail }=require('../models/dbAction');

router.get('/detail/:name',async (req,res)=>{
    console.log(`${new Date().toLocaleString()} -> method get : /detail/${req.params.name}  `);
    const result=await getDetail(req.params.name);
    res.send(result);
})


module.exports=router;