import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AddEmployee() {

    const history = useNavigate();
    const [employee, setEmployee] = useState({
        eId: "",
        eName: "",
        department: "",
        location: ""
    })
    const Add = () => {
        axios.post('http://localhost:4000/addemployee', employee).then((res) => {
            if (res.data.msg) {
                alert(res.data.msg);
                history('/mainpage/home')
            } else {
                alert(res.data.error);
            }
        })
    }
    const handdleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    }
    const [departmentGet, setDepartmentGet] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/getdepartment')
            .then((response) => {
                setDepartmentGet(response.data)
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching department:', error);
            });
    }, []);

    console.log("departmentGet", departmentGet)

    return (
        <div className='container-fluid'>
            <div className="row justify-content-center" style={{ paddingBottom: "7rem" }}>
                <div className="col-md-4 addemplyeecolumn loginForm" style={{ marginTop: "10vh" }}>
                    <p className='text-white text-center'>Add New Employee</p>

                    <div className="mb-3">
                        <label htmlhtmlFor="emplyeeID" className="form-label">Employee Id</label>
                        <input type="number" className="form-control inputLogin" onChange={handdleChange} id="emplyeeID" name='eId' />
                    </div>
                    <div className="mb-3">
                        <label htmlhtmlFor="emplyeeName" className="form-label">Employee Name</label>
                        <input type="text" className="form-control inputLogin" onChange={handdleChange} id="emplyeeName" name='eName' />
                    </div>
                    {/* <div className="mb-3">
                        <label htmlhtmlFor="department" className="form-label">Employee department</label>
                        <input type="text" className="form-control inputLogin" onChange={handdleChange} id="department myInput" name='department' />
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="department" className="form-label">Employee department</label>
                        <select className="form-control inputLogin" onChange={handdleChange} id="department" name='department'>
                            <option value="">Select Department</option>
                            {
                                departmentGet?.map((item, index) => (
                                    <option key={index} value={item.departmentName}>{item.departmentName}</option>
                                ))
                            }

                        </select>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlhtmlFor="location" className="form-label">Employee location</label>
                        <input type="text" className="form-control inputLogin" onChange={handdleChange} id="employee loaction" name='location' />
                    </div>


                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-primary w-50" style={{ background: "rgb(7, 36, 62)" }} onClick={Add}>Add</button>
                    </div>
                    <div className="mb-3 mt-3 text-end">
                        <NavLink to='/mainpage/home' style={{ textDecoration: "none" }}> <u className=' text-white'>Go To Employee List</u> </NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}
