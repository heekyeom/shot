const express =require('express');
const router=express.Router();

const { getAllRank, getRank }=require('../models/celebrity')

//전체 유저의 랭킹
router.get('/',async (req, res)=>{
    console.log(`${new Date().toLocaleString()} -> method get : /ranking  `);
    const result=await getAllRank();
    res.send(result);
})

//특정 유저의 랭킹
router.get('/:id',async (req, res)=>{
    console.log(`${new Date().toLocaleString()} -> method get : /ranking/${req.params.id}  `);
    const result=await getRank(req.params.id);
    res.send(result);
})


module.exports=router;
