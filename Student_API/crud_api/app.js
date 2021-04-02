const express=require('express');
const student=require('./routes/student.route');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

const app=express();

mongoose.connect("mongodb://localhost/StudentDB",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Database connnected succefully.")
})
.catch(err =>{
    console.log("cannot connect to the database");
    process.exit();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/student',student);

app.listen(3000,()=>{
    console.log("The server is running on port 3000.")
})