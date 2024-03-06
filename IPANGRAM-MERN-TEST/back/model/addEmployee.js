const mongoose= require("mongoose")

const emplpyeeSchema=new mongoose.Schema({
    eId:Number,
    eName:String,
    department:String,
    location:String
})

const employee=mongoose.model("employees",emplpyeeSchema);

module.exports=employee;