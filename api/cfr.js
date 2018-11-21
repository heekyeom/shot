const request = require("request");
const fs = require("fs");
const axios=require("axios");

// const cfr = {
//   CLIENT_ID: "fXs6afYe0ZtQfNUOJ4TL",
//   CLIENT_SECRET: "61e3DLjRYT",
//   CRF_API_URL: "https://openapi.naver.com/v1/vision/celebrity",

//   async getCelebrity(img) {
//     const imageData = fs.createReadStream("image.jpg");

//     const _formData = {
//       image: imageData
//     };

//     request.post(
//       {
//         url: CRF_API_URL,
//         formData: _formData,
//         headers: {
//           "X-Naver-Client-Id": CLIENT_ID,
//           "X-Naver-Client-Secret": CLIENT_SECRET
//         }
//       },
//       function(err, response, body) {
//         console.log(body);
//       }
//     );
//   }
// };

const cfr=axios.create({
  baseURL:'https://openapi.naver.com/v1/vision/celebrity',
  headers:{
    'X-Naver-Client-Id' : 'fXs6afYe0ZtQfNUOJ4TL',
    'X-Naver-Client-Secret' : '61e3DLjRYT'
  }
})

module.exports = cfr;
