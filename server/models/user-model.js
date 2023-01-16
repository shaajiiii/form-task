const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName:  String,
    mobile:  String,
    age:  String,
    email:  String,
    dob: String
})

const User = mongoose.model('users',userSchema);

module.exports = {User}