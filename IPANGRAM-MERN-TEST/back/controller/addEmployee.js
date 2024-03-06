const employee = require('../model/addEmployee')

const addEmployee=async(req,res)=>{
    try{
        const data = await department.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { departmentId: req.body.departmentId, departmentName: req.body.departmentName }},
            { new: true } 
        );
        
            if(isExist){
                res.send({error:"User already Added"})
            }else{
                const data=new employee({
                    eId:req.body.eId,
                    eName:req.body.eName,
                    department:req.body.department,
                    location:req.body.location,
                });
                const result=await data.save()
                if(result){
                    res.send({msg:"Emplpoyee Added"})
                }else{
                    res.send({error:"Employee Not Added"})
                }
            }
    }catch(error){
        res.send({error:"Something Went Wrong"})
    }
}

const getEmployee=async (req,res)=>{
    try{
        const data=await employee.find();
        res.send(data)
    }catch(error){
        res.send({error:err})
    }
}

const updateemployee=async(req,res)=>{
    try{
       console.log(req.body)
       console.log(req.params)
        const data=await employee.updateOne({_id:req.params.id},{$set:{
            eId:req.body.eId,
            eName:req.body.eName,
            department:req.body.department,
            location:req.body.location
        },
        });
        if(data){
            res.send({msg:"User Update"})
        }else{
            res.send({error:"user not update"})
        }

    }catch(error){
            res.send({error:"Spomething went wrong"})
    }
}

const getPreviouse=async (req,res)=>{
    try{
        const data=await employee.findOne({_id:req.params.id})
        res.send(data)
    
    }catch(error){
        res.send({msg:"something Went wrong"})
    }
}

const deleteEmployee=async(req,res)=>{
    try {
        const data=await employee.deleteOne({_id:req.params.id})
        if(data){
            res.send({msg:"user deleted"})
        }else{
            res.send({error:"user not deleted"})
        }
    } catch (error) {
        res.send({error:"something went wrong"})
    }
}
const getEmployeesSorted = async (req, res) => {
    try {
        const { sortBy, order } = req.query;
        let sortCriteria = {};

        
        if (sortBy === 'name') {
            sortCriteria = { eName: order === 'asc' ? 1 : -1 };
        } else if (sortBy === 'location') {
            sortCriteria = { location: order === 'asc' ? 1 : -1 };
        }

        
        const employees = await employee.find().sort(sortCriteria);
        res.send(employees);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports={addEmployee,getEmployee,updateemployee,getPreviouse,deleteEmployee,getEmployeesSorted}

