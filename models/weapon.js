const mongoose=require('mongoose');

const weaponSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    cps:{
        type:Number,
        required: true,   
    },
    img:{
        type:String,
        required: true,
    },
    sound:{
        type:String,
        required:true
    }
});


const Weapon= mongoose.Model('weapon');

exports.weaponSchema=weaponSchema;
exports.Weapon=Weapon;