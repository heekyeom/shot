const request = require("request");
const fs = require("fs");

const shotCount=require('../models/celebrity'); 


//Request로 구현
const cfr = {
  CLIENT_ID: "fXs6afYe0ZtQfNUOJ4TL",
  CLIENT_SECRET: "61e3DLjRYT",
  CRF_API_URL: "https://openapi.naver.com/v1/vision/celebrity",

  //  getCelebrity(img) {
  //   const _formData = {
  //     image:'image',
  //     image: img
  //   };

  //   return request.post({
  //       url: this.CRF_API_URL,
  //       formData: _formData,
  //       headers: {
  //         "X-Naver-Client-Id": this.CLIENT_ID,
  //         "X-Naver-Client-Secret": this.CLIENT_SECRET
  //       }
  //     },(err, response, body)=>{
  //       //1. status code를 확인하고
  //       //2. status code가 200대라면, 
  //       const name=JSON.parse(body).faces[0].celebrity.value;
  //       console.log(shotCount)
  //       shotCount(name,1);
  //     })
  // }
};

// Axios 로 구현
// const cfr=axios.create({
//   baseURL:'https://openapi.naver.com/v1/vision/celebrity',
//   headers:{
//     'Content-Type':'application/x-www-form-urlencoded',
//     'X-Naver-Client-Id' : 'fXs6afYe0ZtQfNUOJ4TL',
//     'X-Naver-Client-Secret' : '61e3DLjRYT'
//   }
// })

module.exports = cfr;
