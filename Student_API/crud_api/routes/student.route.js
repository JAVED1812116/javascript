const express=require('express');
const router=express.Router();

const student_controller = require('../controllers/student.controller');
router.get('/test',student_controller.test);
router.post('/add',student_controller.student_add);
router.get('/:id',student_controller.student_details);
router.put('/:id/update',student_controller.student_update);
router.delete('/:id/delete',student_controller.student_delete);



module.exports=router;