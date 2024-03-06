const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    eName:String,
    role: String
        
});

const user = mongoose.model('user', userSchema);

module.exports = user;