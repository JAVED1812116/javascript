const Student=require('../models/student.model');

exports.test=(req,res)=>{
    res.send("Hello from the another side")
}

exports.student_add=(req,res)=>{
    let student = new Student({
        name: req.body.name,
        program: req.body.program    
    })

    student.save((err)=>{
        if(err){
            return next(err);
        }
        res.send("Student added successfully");
    })
}

exports.student_details=(req,res)=>{
    Student.findById(req.params.id, (err,student)=>{
        if (err) return next(err);
        res.send(student);
    })
}

exports.student_update=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,{$set:req.body},(err,student)=>{
        if(err) return next(err);
        res.send("student's datails updated successfully");
    })
}


exports.student_delete=(req,res)=>{
    Student.findByIdAndRemove(req.params.id,(err)=>{
        if(err) return next(err);
        res.send("student's details deleted successfully")
    })
}