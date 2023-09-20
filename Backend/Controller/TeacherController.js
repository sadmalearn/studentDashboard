const teachers = require('../Models/teacherModel')

const addTeacher = async (req, res) => {
    const { name, email, mobile, department } = req.body;

    const teacherInfo = await teachers.findOne({ name })
    if (teacherInfo) {
        res.status(400).send({ message: 'Teacher Already Exist' })
    } else {
        const teacherCreate = await teachers.create({
            name,
            email,
            mobile,
            department
        })
        if (teacherCreate) {
            res.status(200).send({ message: 'Teacher Added' })
        } else {
            res.send({ message: 'Invalid info' })
        }
    }
}
const getAllTeachers = async (req, res) =>{
    const teacherInfo = await teachers.find()
    if(teacherInfo){
        res.send({message : 'data found successfully', data : teacherInfo})
    }else{
        res.send({message : 'data not found'})

    }
}
const deleteTeacher = async (req, res) => {
    const { id } = req.body
    const teacherInfo = await teachers.deleteOne({ _id:id})
    if (teacherInfo) {
        res.send({ message: 'Teacher Deleted Succefully !' })
    } else {
        res.send({ message: 'Something Went wrong' })
    }
}
module.exports = {addTeacher,getAllTeachers,deleteTeacher}
