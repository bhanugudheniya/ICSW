const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    name: {
        type: String
    },
    subject: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
}, );
module.exports = mongoose.model('User', user);