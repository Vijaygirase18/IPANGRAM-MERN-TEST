import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
    const navigate = useNavigate(); 
    const [user, setUser] = useState({
        email: "",
        password: "",
        eName: "",
        role: "", 
    });
console.log(user)
    const Registration = () => {
        const { email, password, eName, role } = user;
        if (email && password && eName && role) { 
            axios.post('http://localhost:4000/registration', user)
                .then((res) => {
                    if (res.data.msg) {
                        alert(res.data.msg);
                        navigate('/'); 
                    } else {
                        alert(res.data.error);
                    }
                })
                .catch(error => {
                    console.error('Error registering user:', error);
                    alert('Something went wrong');
                });
        } else {
            alert("All fields are required");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div className='container-fluid loginbackground'>
            <div className="row justify-content-center">
                <div className="col-md-4 p-5 loginForm">
                    <div className="row">
                        <h5 className='text-center' style={{ color: "rgb(7, 36, 62)" }}>Register Here</h5>
                    </div>
                    <div className="mb-3 text-white">
                        <label htmlFor="employeeName" className="form-label">Name</label>
                        <input type="text" className="form-control inputLogin" id="employeeName" aria-describedby="emailHelp" name="eName" onChange={handleChange} />
                    </div>
                    <div className="mb-3 text-white">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control inputLogin" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} />
                    </div>
                    <div className="mb-3 text-white">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control inputLogin" id="exampleInputPassword1 myInput" name='password' onChange={handleChange} />
                    </div>
                    <div>
                        <select
                            name="role"
                            value={user.role}
                            onChange={handleChange}
                        >
                            <option value="">Select User Type</option>
                            <option value="employee">Employee</option>
                            <option value="manager">Manager</option>
                        </select>
                    </div>
                    <div className="row justify-content-center">
                        <button type="button" onClick={Registration} className="btn btn-primary w-50" style={{ background: "rgb(7, 36, 62)" }}>Register</button>
                    </div>
                    <div className="row">
                        <NavLink to='/'><u className='text-white mt-4'><h5 className='text-center'>Login</h5></u></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
