const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const db = require('./connection/dbConnection');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT","DELETE"],
    credentials: true
}))
const user = require('./controller/user');
const employee = require('./controller/addEmployee');
const department = require('./controller/addDepartment');

app.post('/registration', user.Register);
app.post('/login', user.Login);
app.post('/addemployee', employee.addEmployee);
app.get('/getemployee', employee.getEmployee);
app.post('/updateemployee/:id', employee.updateemployee);
// app.get('/deleteEmployee', employee.deleteEmployee);

http://localhost:4000/deleteEmployee/45
app.delete('/deleteEmployee/:id', employee.deleteEmployee);
app.get('/getEmployeesSorted', employee.getEmployeesSorted);
app.get('/getpreviousemployee/:id', employee.getPreviouse);
app.post('/adddepartment', department.addDepartment);
app.get('/getdepartment', department.getDepartment);
app.post('/updateDepartment/:id', department.updateDepartment);
app.post('/getpreviousDepartment/:id', department.getPreviousDepartment);
// app.get('/deleteDepartment', department.deleteDepartment);
app.delete('/deleteDepartment/:id', department.deleteDepartment);

app.listen(PORT, () => {
    console.log(`server listening on port-${PORT}`)
})
