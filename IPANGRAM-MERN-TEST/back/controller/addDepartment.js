const department = require('../model/addDepartment');
const Department = require('../model/addDepartment');

const addDepartment = async (req, res) => {
    try {
        const { departmentId, departmentName } = req.body;
        const isExist = await Department.findOne({ departmentId });
        if (isExist) {
            return res.status(400).send({ error: "Department already exists" });
        }
        const newDepartment = new Department({
            departmentId,
            departmentName,
        });
        const result = await newDepartment.save();
        if (result) {
            return res.status(200).send({ msg: "Department Added" });
        } else {
            return res.status(500).send({ error: "Department Not Added" });
        }
    } catch (error) {
        return res.status(500).send({ error: "Something Went Wrong" });
    }
}

const getDepartment = async (req, res) => {
    try {
        const departments = await Department.find();
        return res.status(200).send(departments);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const updateDepartment = async (req, res) => {
    try {
        const { departmentId, departmentName } = req.body;
        const updatedDepartment = await Department.findByIdAndUpdate(
            req.params.id,
            { departmentId, departmentName },
            { new: true }
        );
        if (updatedDepartment) {
            return res.status(200).send({ msg: "Department Updated" });
        } else {
            return res.status(404).send({ error: "Department not found" });
        }
    } catch (error) {
        return res.status(500).send({ error: "Something went wrong" });
    }
}

const getPreviousDepartment = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (department) {
            return res.status(200).send(department);
        } else {
            return res.status(404).send({ error: "Department not found" });
        }
    } catch (error) {
        return res.status(500).send({ error: "Something went wrong" });
    }
}

const deleteDepartment = async (req, res) => {
    try {
        const data=await department.deleteOne({_id:req.params.id})
        if(data){
            res.send({msg:"department deleted"})
        }else{
            res.send({error:"department not deleted"})
        }
    } catch (error) {
        res.send({error:"something went wrong"})
    }
}

module.exports = { addDepartment, getDepartment, updateDepartment, getPreviousDepartment, deleteDepartment };
