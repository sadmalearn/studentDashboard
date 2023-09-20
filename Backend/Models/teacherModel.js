const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema({
    name : {
        type : String
    },    
    email : {
        type : String
    }, 
    mobile : {
        type : String
    }, 
    department : {
        type : String
    }
})
module.exports = mongoose.model('teacher',teacherSchema)