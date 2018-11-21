const mongoose=require('mongoose');

/* model */
const celerbritySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:1
    },
    totalShot:{
        type:Number,
    },
    dailyShot:{
        type:Array,
    }
});

