const express =require('express');
const qs=require('querystring');
const router=express.Router();

const { getAllRank, getRank }=require('../models/dbAction')

//전체 유저의 랭킹
router.get('/',(req, res)=>{
    console.log(`${new Date().toLocaleString()} -> method get : /ranking  `);
    const result=getAllRank();
    res.send(result);
})

//특정 유저의 랭킹
router.get('/:name',async (req, res)=>{
    console.log(`${new Date().toLocaleString()} -> method get : /ranking/${req.params.name}  `);
    const result=await getRank(req.params.name);
    res.send(result);
})


module.exports=router;
