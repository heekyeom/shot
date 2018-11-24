const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/shot',{useNewUrlParser:true})
.then(()=>console.log(`Connected to mongoDB`))
.catch( error=>console.error(error.message));

/* model */
const shotCountSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:1
    },
    totalShot:{
        type:Number,
    },
});

const ShotCount=mongoose.model('shotCount',shotCountSchema);


async function setShotCount(name, shot){
    const shotCount=new ShotCount({name: name, totalShot: shot});
    try{
        const result=await shotCount.save();
        console.log(result);
    }catch(e){
        console.error(e.message);
    }
}

// async function getAllCount(){

// }

// async function getCount(){

// }

exports.shotCountSchema=shotCountSchema;
exports.ShotCount=ShotCount;

