const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoSchema = new Schema({
    marca:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    medida:{
        type: String,
        required: true
    }
})
const Auto = mongoose.model('Auto', autoSchema);
module.exports = {Auto}