import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';

export default function HomePage() {
    const [searchTitle, setSearchTitle] = useState('');
    const [employee, setEmployee] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [previouse, setPreviouse] = useState({
        eId: '',
        eName: '',
        department: '',
        location: ''
    });

    const history = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token');
        if (!token) {
            history('/');
        }
    }, [history]);

    useEffect(() => {
        axios.get("http://localhost:4000/getemployee")
            .then((res) => {
                setEmployee(res.data);
            })
            .catch((error) => {
                console.error('Error fetching employee data:', error);
            });
    }, []);

    const LogOut = () => {
        alert('Logging Out');
        Cookies.remove('token');
        history('/');
    };

    const updateHandle = (itemId) => {
        console.log(itemId)
        axios.get(`http://localhost:4000/getpreviousemployee/${itemId}`)
            .then((res) => {
                setPreviouse(res.data);
            })
            .catch((error) => {
                console.error('Error fetching previous employee data:', error);
            });
    };

    const handleChanges = (itemId) => {
        axios.put(`http://localhost:4000/updateemployee/${itemId}`, previouse)
            .then((res) => {
                alert(res.data.msg);
                setEmployee(prevState => prevState.map(item => item._id === itemId ? previouse : item));
            })
            .catch((error) => {
                console.error('Error updating employee data:', error);
            });
    };

    const deleteEmployee = (itemId) => {
        console.log(itemId)
        axios.delete(`http://localhost:4000/deleteEmployee/${itemId}`)
            .then((res) => {
                alert(res.data.msg);
                setEmployee(prevState => prevState.filter(item => item._id !== itemId));
            })
            .catch((error) => {
                console.error('Error deleting employee:', error);
            });

    };

    return (
        <>
            <div className='container-fluid mainpagecontainer'>
                <div className="row homepage justify-content-center mt-3">

                    <div className="col-auto text-center">
                        <NavLink to='/mainpage/newemployee'><button className='btn btn-primary'>Add Employee</button></NavLink>
                    </div>
                    <div className="col-auto text-center">
                        <NavLink to='/mainpage/department'><button className='btn btn-primary'>Add Department</button></NavLink>
                    </div>




                    <div className="col-auto w-25">
                        <input type="search" className='form-control search' placeholder='Search...' onChange={(e) => setSearchTitle(e.target.value)} />
                    </div>
                    <div className="col-auto text-center">
                        <button className='btn btn-primary' onClick={LogOut}>Log Out</button>
                    </div>
                    <div className="col-auto text-center">
                        <label htmlFor="sortBy">Sort by Name & Location:</label>
                        <select className="form-control" id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="">Select</option>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <section>
                            <div className="table-responsive col-lg-12">
                                <table className='table table-striped text-center table-light table-hover table-borderless'>
                                    <thead className='table-dark'>
                                        <tr>
                                            <th>Sr. No.</th>
                                            <th>Employee Id</th>
                                            <th>Employee Name</th>
                                            <th>Department</th>
                                            <th>Location</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employee.filter((value) =>
                                            searchTitle === "" ||
                                            value?.eId.toString().includes(searchTitle) ||
                                            value?.eName.toLowerCase().includes(searchTitle.toLowerCase()) ||
                                            value?.department.toLowerCase().includes(searchTitle.toLowerCase()) ||
                                            value?.location.toLowerCase().includes(searchTitle.toLowerCase())
                                        ).sort((a, b) => {
                                            if (sortBy === 'asc') {
                                                return a.eName.localeCompare(b.eName) || a.location.localeCompare(b.location);
                                            } else if (sortBy === 'desc') {
                                                return b.eName.localeCompare(a.eName) || b.location.localeCompare(a.location);
                                            } else {
                                                return 0;
                                            }
                                        }).map((item, index) => (
                                            <tr key={item._id}>
                                                <th scope='row'>{index + 1}</th>
                                                <td>{item?.eId}</td>
                                                <td>{item?.eName}</td>
                                                <td>{item?.department}</td>
                                                <td>{item?.location}</td>
                                                <td>
                                                    <button className='btn btn-warning' data-bs-toggle="modal1" data-bs-target="#exampleModal"
                                                        onClick={() => {
                                                            updateHandle(item?._id);
                                                        }}>Edit</button>
                                                    <button className='btn btn-danger ms-2' onClick={() => { deleteEmployee(item._id) }}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}







