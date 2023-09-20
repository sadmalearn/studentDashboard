const express = require('express')
const { addTeacher, getAllTeachers, deleteTeacher } = require('../Controller/TeacherController')
const router = express.Router()
router.post('/addTeacher',addTeacher)
router.get('/getAllTeachers',getAllTeachers)
router.delete('/deleteTeacher',deleteTeacher)
module.exports = router