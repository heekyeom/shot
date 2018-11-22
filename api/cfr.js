const request = require("request");
const fs = require("fs");
const axios=require("axios");

//Request로 구현
const cfr = {
  CLIENT_ID: "fXs6afYe0ZtQfNUOJ4TL",
  CLIENT_SECRET: "61e3DLjRYT",
  CRF_API_URL: "https://openapi.naver.com/v1/vision/celebrity",

  getCelebrity(img) {
    const _formData = {
      image:'image',
      image: img
    };

    return request.post({
        url: this.CRF_API_URL,
        formData: _formData,
        headers: {
          "X-Naver-Client-Id": this.CLIENT_ID,
          "X-Naver-Client-Secret": this.CLIENT_SECRET
        }
      }).on('response', function(response) {
        console.log(response.statusCode) // 200
        console.log(response.headers['content-type'])
     });
  }
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
