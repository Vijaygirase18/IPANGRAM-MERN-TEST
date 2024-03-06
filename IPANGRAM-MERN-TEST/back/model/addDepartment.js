const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    departmentId: Number,
    departmentName: String,
});

const department = mongoose.model("department", departmentSchema);

module.exports = department;
