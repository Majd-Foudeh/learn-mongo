const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },

}, { timestamp: true }
)

module.exports = mongoose.model("user", userSchema) 