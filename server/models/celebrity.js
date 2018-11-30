const mongoose = require('mongoose');


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
        type: Array,
        default: [],
        required: true
    },

    monthShot:{
        type: Array,
        default: [],
        required: true
    },

    yearShot:{
        type: [{ date: String, shot: Number }],
        default: [],
        required: true
    },
    totalShot: {
        type: Number,
        required: true,
        default: 0
    },
});

const Celebrity = mongoose.model('shotCount', celebritySchema);

exports.celcbritySchema = celebritySchema;
exports.Celebrity = Celebrity;


