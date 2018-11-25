const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shot', { useNewUrlParser: true })
    .then(() => console.log(`Connected to mongoDB`))
    .catch(error => console.error(error.message));

/* model */
const celebritySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    image: {
        type: String,
    },
    dailyShot: {
        type: [{ date: Date, shot: Number }],
        default: []
    },
    weekShot: {
        type: [{ date: Date, shot: Number }],
        default: []
    },
    totalShot: {
        type: Number,
        required: true,
        default: 0
    },

});

const Celebrity = mongoose.model('shotCount', celebritySchema);

async function setCelebrityCount(name) {
    try {
        //DB에서 해당 이름에 해당하는 document가 있는지 확인.
        let result=await Celebrity.find({name: name});
        
        //만약 없다면 새로운 document를 만든다.
        if(!result) result=new Celebrity({name: name, totalShot:1});
        else result.totalShot+=1;

        //document를 저장한다.
        result= await result.save();

        console.log(result);
    } catch (e) {
        console.error(e.message);
    }
}


async function getAllCount() {

}

async function getCount() {

}

async function getCelebrityDetail() {

}

exports.celcbritySchema = celebritySchema;
exports.celebrity = Celebrity;
exports.setCelebrityCount=setCelebrityCount;
exports.getAllCount=getAllCount;
exports.getCount=getCount;
exports.getCelebrityDetail=getCelebrityDetail;

