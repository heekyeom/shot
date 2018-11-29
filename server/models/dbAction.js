const { celebritySchema, Celebrity } = require("./celebrity");

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

  return allRank;
}

async function getRank(name) {
  console.log(`${new Date().toLocaleString()} -> getRank`);
  const Rank = await Celebrity.findOne({ name: name });
  return Rank;
}

async function getDetail() {
  console.log(`${new Date().toLocaleString()} -> getDetail`);
  celebrity = await Celebrity.findOne({ name: name });
  return celebrity;
}

let allRank;

setInterval(() => {
  AllRank();
}, 10000);

async function AllRank() {
    const key=`dailyShot[${new Date().getDate()}]`;
  allRank = await Celebrity.find().select('name', 'dailyShot');
  return allRank;
}


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
