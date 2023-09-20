const express = require('express')
const { addStudent, getAllStudents, deleteStudent } = require('../Controller/StudentController')
const router = express.Router()

router.post('/addStudent',addStudent)
router.get('/getAllStudents',getAllStudents)
router.delete('/deleteStudentbyId',deleteStudent)

module.exports = router