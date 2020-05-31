const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    fullname : {
        type : String,
        required : true
    },
    phonenumber : {
        type : Array,
        required : true
    },
    email_id : {
        type : Array,
        required : true
    },
    dob : {
        type : Date,
        required : true
    },},
     {
        timestamps : true,
});

const PhoneBook = mongoose.model('PhoneBook', phoneSchema);

module.exports = PhoneBook;