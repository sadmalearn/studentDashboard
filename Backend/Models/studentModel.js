const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    mobile : {
        type : String,
    },
    standard : {
        type : String,
    },
})
module.exports = mongoose.model('student',studentSchema)