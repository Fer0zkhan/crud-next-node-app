const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:String,
    username: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('users', UserSchema);