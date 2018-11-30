import axios from 'axios';

/**
 * 모든 request를 모아놓음.
 *  1. 얼굴인식 요청
 *  2. 랭킹 요청
 *  3. 특정인 랭킹 요청
 *  4. 디테일 랭킹 요청.
 */

 // 얼굴인식 요청
export const requestRecognition=async(img)=>{
    const result=await axios.post('/recognition',{
        image:img
    })
    console.log(result);
}

//모든 사람 랭킹 요청
//10초 주기로 서버에 요청한다.
export const requestAllRanking=async()=>{
    const result=await axios.get('/rank');
    return result;
}

//특정인 랭킹 요청
export const requestRanking=async(name)=>{
    const result=await axios.get(`/rank/${name}`);
    return result;
}

//특정인 디테일 요청
export const requestDetail=async(name)=>{
    const result=await axios.get(`/detail/${name}`);
    return result;
}