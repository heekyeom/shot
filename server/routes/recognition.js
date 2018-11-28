const express = require('express');
const router = express.Router();

const request = require('request');

const cfr = require('../api/cfr');
const celebrity=require('../models/celebrity');


/* 얼굴 인식을 요청 받음. */
router.post('/', (req, res) => {
    console.log(`[ 얼굴인식요청 ]`);
    // res.send('ok');
    const img = req.file.buffer;

    //api로 이미지를 전송하기 위해 formdata로 설정.
    const _formData = {
        image: 'image',
        image: img
    };
    
    //api로 전송.
    request.post({
        url: cfr.CRF_API_URL,
        formData: _formData,
        headers: {
            "X-Naver-Client-Id": cfr.CLIENT_ID,
            "X-Naver-Client-Secret": cfr.CLIENT_SECRET
        }
    }, (err, response, body) => {
        //1. status code를 확인하고
        //2. status code가 200대라면, 
        console.log(response);
        const name = JSON.parse(body).faces[0].celebrity.value;
        celebrity.setCelebrityCount(name);
    }).pipe(res);
})


module.exports = router;
