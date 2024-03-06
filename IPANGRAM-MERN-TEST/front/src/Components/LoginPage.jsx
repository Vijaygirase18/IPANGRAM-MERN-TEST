import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import './LoginPage.css'



export default function LoginPage() {
    const history = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handdleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const Login = () => {
        axios.defaults.withCredentials = true;
        axios.post(`http://localhost:4000/login`, user).then((res) => {
            if (res.data.msg) {
                localStorage.setItem('Role',res.data.role);
                alert(res.data.msg);
                history('/mainpage/home');
            } else {
                alert(res.data.error);
            }
        })
    }
    return (    
            <div className='container-fluid loginbackground'>
        <div className="row justify-content-center">
            <div className="col-md-4 p-5 loginForm">
                <div className="row">
                    <h5 className='text-center' style={{color:"rgb(7, 36, 62)"}}>Login Here</h5>
                </div>
           
                    
                <div className="mb-3 text-white">
                    <label htmlhtmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control inputLogin" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handdleChange}/>
            
                </div>
                <div className="mb-3 text-white">
                    <label htmlhtmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control inputLogin" id="exampleInputPassword1 myInput" name='password' onChange={handdleChange} />
              
                </div>
                {/* <div className="mb-3 text-white">                  
                    <input type="checkbox" onClick={togglePassword}/> Show Password
                </div> */}


                <div className="row justify-content-center">
                <button type="submit" onClick={Login} className="btn btn-primary w-50" style={{background:"rgb(7, 36, 62)"}}>Login</button>
                </div>
                 
                <div className="row">
                    <NavLink to='/register'><u className='text-white mt-4'><h5 className='text-center'>Register</h5></u></NavLink>
                </div>
            </div>
        </div>
        
    </div>

    )
}
