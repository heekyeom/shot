const cfr=require('../api/cfr');
const FormData=require('form-data');
const express=require('express');
const router=express.Router();
const request=require('request');



/* 얼굴 인식을 요청 받음. */
router.post('/',(req, res)=>{
    console.log("얼굴인식요청.")
    console.log(req.file);
    console.log(req.body);
    
    const img=req.file.buffer;

    var _req = cfr.getCelebrity(img);

    _req.pipe(res);
})


module.exports=router;
