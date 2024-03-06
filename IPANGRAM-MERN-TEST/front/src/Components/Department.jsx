import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddDepartment() {
    const history = useNavigate();
    const [department, setDepartment] = useState({
        departmentId: '',
        departmentName: '',

    });



    const addDepartment = () => {
        axios.post('http://localhost:4000/adddepartment', department)
            .then((res) => {
                if (res.data.msg) {
                    alert(res.data.msg);
                    history('/mainpage/departmentList');
                } else {
                    alert('Department could not be added');
                }
            })
            .catch((error) => {
                console.error('Error adding department:', error);
                alert('An error occurred while adding the department. Please try again later.');
            });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value });
    };

    return (
        <div className='container-fluid-dp' style={{ height: '100%' }}>
            <div className="row justify-content-center" style={{ paddingBottom: '7rem' }}>
                <div className="col-md-4 adddepartment-column loginForm" style={{ marginTop: '10vh' }}>
                    <p className='text-white text-center'>Add New Department</p>
                    <div className="mb-3">
                        <label htmlFor="departmentId" className="form-label">Department Id</label>
                        <input type="number" className="form-control inputLogin" onChange={handleChange} id="departmentId" name='departmentId' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="departmentName" className="form-label">Department Name</label>
                        <input type="text" className="form-control inputLogin" onChange={handleChange} id="departmentName" name='departmentName' />
                    </div>  
                    {/* <div className="mb-8">
                        <label htmlFor="departmentName" className="form-label">Department Name</label>
                        <select className="form-select inputLogin" onChange={handleChange} id="departmentName" name='departmentName'>
                            <option value="">Select Department</option>
                            <option value="backend Devloper"> Backend Devloper</option>
                            <option value="testing">Testing</option>
                            <option value="frontend Devloper">Frontend Devloper </option>
                            <option value="hrAssociate ">  HR Associate </option>

                            
                        </select>
                    </div> */}
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-primary w-50" style={{ background: 'rgb(7, 36, 62)' }} onClick={addDepartment}>Add</button>
                    </div>
                    <div className="mb-4 mt-4 text-end">
                        <NavLink to='/mainpage/departmentList' style={{ textDecoration: 'none' }}> <u className=' text-white'>Go To Department List</u> </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
