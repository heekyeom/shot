const { Celebrity } = require("../models/celebrity");

async function setCelebrityCount(name) {
  try {
    //DB에서 해당 이름에 해당하는 document가 있는지 확인.
    let result = await Celebrity.findOne({ name: name });
    if(!result){
        result = createCelebrity(result,name);
        result.dailyShot[new Date().getDate()]=1;
        result.monthShot[new Date().getMonth()+1]=1;
        result = await result.save();
    }else{
        result = updateCelebrityObject(result);
        result = await Celebrity.findByIdAndUpdate(result._id,result);
    }
    console.log(result);
  } catch (e) {
    console.error(e.message);
  }
}

function getAllRank() {
    console.log(`${new Date().toLocaleString()} -> getAllRank`);

  return top10;
}

async function getRank(name) {
  console.log(`${new Date().toLocaleString()} -> getRank`);
  const rank = await Celebrity.findOne({ name: name }).select({ name: 1, dailyShot: 1}); //없으면 null
  if(rank){
    rank.dailyShot=rank.dailyShot[new Date().getDate()];
  }

  return rank;
}

async function getDetail(name) {
  console.log(`${new Date().toLocaleString()} -> getDetail`);
  celebrity = await Celebrity.findOne({ name: name });  //없으면 null
  return celebrity;
}

let top10;

setInterval(() => {
  AllRank();
}, 20000);

async function AllRank() {
  let all = await Celebrity.find().select({ name: 1, dailyShot: 1});
  all.find((one)=>{
    one.dailyShot=one.dailyShot[new Date().getDate()]
  })
  all.sort((a,b)=>{
    return b.dailyShot[0]-a.dailyShot[0];
  })
  
  top10=all.slice(0,10);
}
AllRank()

function createCelebrity(result,name){
    result = new Celebrity({
        name: name,
        totalShot: 1,
        dailyShot: resetArray('daily'),
        monthShot: resetArray('month'),
        yearShot: [{ date: new Date().getFullYear(), shot: 1 }]
    })
    return result;
}

function updateCelebrityObject(result) {
    if(new Date().getDate()===1) result.dailyShot=resetArray('daily');
    if(new Date().getMonth()===0) result.monthShot=resetArray('month');
   
    result.dailyShot[new Date().getDate()]+=1;
    result.monthShot[new Date().getMonth()+1]+=1;
   
    const ylen=result.yearShot.length-1;
    console.log(result.yearShot[ylen]);
    if (result.yearShot[ylen].date === String(new Date().getFullYear())) {
      result.yearShot[ylen].shot += 1;
    } else {
      result.yearShot.push({
        date: new Date().getFullYear(),
        shot: 1
      });
    }
    result.totalShot += 1;
  return result;
}

function resetArray(arrayName){
    let array=[];
    let leng=32;
    if(arrayName==='month') leng=13;
    for(let i=0; i<leng; i++){
        array.push(0);
    }
    return array;
}

exports.setCelebrityCount = setCelebrityCount;
exports.getAllRank = getAllRank;
exports.getRank = getRank;
exports.getDetail = getDetail;
