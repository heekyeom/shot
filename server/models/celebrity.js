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


