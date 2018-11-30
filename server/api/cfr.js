const config=require('config');

//Request로 구현
const cfr = {
  CLIENT_ID: config.faceRecognition.naverClova.clientID,
  CLIENT_SECRET: config.faceRecognition.naverClova.clientSecret,
  API_URL: config.faceRecognition.naverClova.url,
}

module.exports = cfr;
