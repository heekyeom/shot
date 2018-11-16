var express = require("express");
var request = require("request");
var fs = require("fs");

const CLIENT_ID = "fXs6afYe0ZtQfNUOJ4TL";
const CLIENT_SECRET = "61e3DLjRYT";
const CRF_API_URL = "https://openapi.naver.com/v1/vision/celebrity"; //유명인 인식.



//CRF_API로 유명인 얼굴 인식 요청.
function getCelebrity() {
  const imageData = fs.createReadStream("image.jpg");
  const _formData = {
    image: imageData
  };
  request.post(
    {
      url: CRF_API_URL,
      formData: _formData,
      headers: {
        "X-Naver-Client-Id": CLIENT_ID,
        "X-Naver-Client-Secret": CLIENT_SECRET
      }
    },
    function(err, response, body) {
      console.log(body);
    }
  );
}

