const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 6,
    },
    lastname: {
        type: String,
        maxlength: 50,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    tokem: {
        type: String
    },
    tokemExp: {
        type: Number
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;