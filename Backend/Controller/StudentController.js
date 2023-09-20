const stu = require('../Models/studentModel')

const addStudent = async (req, res) => {
    console.log("request", req.body);
    const { name, email, mobile, standard } = req.body;

    const studentInfo = await stu.findOne({ name })
    if (studentInfo) {
        res.status(400).send({ message: 'Student Already Exist' })
    } else {
        const studentCreate = await stu.create({
            name,
            email,
            mobile,
            standard
        })
        if (studentCreate) {
            res.status(200).send({ message: 'Student Added' })
        } else {
            res.send({ message: 'Invalid info' })
        }
    }

}


// Get all student
const getAllStudents = async (req, res) => {
    const studentInfo = await stu.find()
    console.log(studentInfo);
    if (studentInfo) {
        res.send(studentInfo)
    } else {
        res.send({ message: 'No Record Found' })
    }

}

    // Delete student
    const deleteStudent = async (req, res) => {
        const { id } = req.body
        const studentInfo = await stu.deleteOne({ _id:id})
        if (studentInfo) {
            res.send({ message: 'Student Deleted Succefully' })
        } else {
            res.send({ message: 'Something Went wrong' })
        }
    }
const welcome = async (req,res) =>{
    res.send({message : 'Welcome to Our Login.....'})
    console.log('welcome');
} 


module.exports = { welcome,addStudent, getAllStudents, deleteStudent }