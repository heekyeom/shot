const mongoose=require('mongoose');

const weaponSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true,
    }
})