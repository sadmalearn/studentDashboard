const express = require('express')
const { addStudent, getAllStudents, deleteStudent, welcome, editStudentDetails } = require('../Controller/StudentController')
const router = express.Router()
router.get('/welcome',welcome)
router.post('/addStudent',addStudent)
router.get('/getAllStudents',getAllStudents)
router.delete('/deleteStudentbyId',deleteStudent)
router.put('/editStudentDetails',editStudentDetails)

module.exports = router