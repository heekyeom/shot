const cfr=require('../api/cfr');
const FormData=require('form-data');
const express=require('express');
const router=express.Router();



/* 얼굴 인식을 요청 받음. */
router.post('/',async (req, res)=>{
    const form=new FormData();
    console.log("얼굴인식요청.")
    console.log(req.body);
    // const result =cfr.getCelebrity(img);
    // if(result) return res.send(`유명인의 얼굴을 인식하지 못했습니다.`);

    // let celebrities=[];
    // result.forEach(element => {
    //     celebrities.push(element.celebrity.value);
    // });
    res.send('hello');
})


module.exports=router;
