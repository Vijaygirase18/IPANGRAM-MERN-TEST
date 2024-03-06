// import React, { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';
// import { NavLink, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function DepartmentList() {
//     const [searchTitle, setSearchTitle] = useState('');
//     const [departments, setDepartments] = useState([]);

//     const history = useNavigate();

//     useEffect(() => {
//         const token = Cookies.get('token');
//         if (!token) {
//             history('/');
//         }
//     }, [history]);

//     useEffect(() => {
//         axios.get("http://localhost:4000/getdepartment")
//             .then((res) => {
//                 setDepartments(res.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching department data:', error);
//             });
//     }, []);

//     const LogOut = () => {
//         alert('Logging Out');
//         Cookies.remove('token');
//         history('/');
//     };

//     const updateDepartment = (departmentId) => {
//         history(`/mainpage/department/update/${departmentid}`);
//     };

//     const deleteDepartment = (departmentId) => {
//         axios.delete(`http://localhost:4000/deleteDepartment/${departmentid}`)
//             .then((res) => {
//                 alert(res.data.msg);
//                 setDepartments(prevDepartments => prevDepartments.filter(department => department.departmentId !== departmentId));
//             })
//             .catch((error) => {
//                 console.error('Error deleting department:', error);
//             });
//     };

//     return (
//         <>
//             <div className='container-fluid mainpagecontainer'>
//                 <div className="row homepage justify-content-center mt-3">
//                     <div className="col-auto text-center">
//                         <NavLink to='/mainpage/newemployee'><button className='btn btn-primary'>Add Employee</button></NavLink>
//                     </div>
//                     <div className="col-auto text-center">
//                         <NavLink to='/mainpage/department'><button className='btn btn-primary'>Add Department</button></NavLink>
//                     </div>
//                     <div className="col-auto w-25">
//                         <input type="search" className='form-control search' placeholder='Search...' onChange={(e) => setSearchTitle(e.target.value)} />
//                     </div>
//                     <div className="col-auto text-center">
//                         <button className='btn btn-primary' onClick={LogOut}>Log Out</button>
//                     </div>
//                 </div>

//                 <div className="row justify-content-center">
//                     <div className="col-md-12">
//                         <section>
//                             <div className="table-responsive col-lg-12">
//                                 <table className='table table-striped text-center table-light table-hover table-borderless'>
//                                     <thead className='table-dark'>
//                                         <tr>
//                                             <th>Sr. No.</th>
//                                             <th>Department Id</th>
//                                             <th>Department Name</th>
//                                             <th>Action</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {departments.filter((value) => {
//                                             if (searchTitle === "") {
//                                                 return value;
//                                             } else if (
//                                                 value.departmentName.toLowerCase().includes(searchTitle.toLowerCase()) ||
//                                                 value.departmentId.toLowerCase().includes(searchTitle.toLowerCase())
//                                             ) {
//                                                 return value;
//                                             }
//                                         }).map((item, index) => (
//                                             <tr key={index}>
//                                                 <th scope='row'>{index + 1}</th>
//                                                 <td>{item.departmentid}</td>
//                                                 <td>{item.departmentName}</td>
//                                                 <td>
//                                                     <button className='btn btn-warning' onClick={() => updateDepartment(item.departmentid)}>Edit</button>
//                                                     <button className='btn btn-danger ms-2' onClick={() => deleteDepartment(item.departmentid)}>Delete</button>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }



import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DepartmentList() {
    const [searchTitle, setSearchTitle] = useState('');
    const [departments, setDepartments] = useState([]);

    const history = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token');
        if (!token) {
            history('/');
        }
    }, [history]);

    useEffect(() => {
        axios.get("http://localhost:4000/getdepartment")
            .then((res) => {
                setDepartments(res.data);
            })
            .catch((error) => {
                console.error('Error fetching department data:', error);
            });
    }, []);

    const LogOut = () => {
        alert('Logging Out');
        Cookies.remove('token');
        history('/');
    };

    const updateDepartment = (departmentId) => {
        history(`/mainpage/department/update/${departmentId}`);
    };

    const deleteDepartment = (departmentId) => {
        axios.delete(`http://localhost:4000/deleteDepartment/${departmentId}`)
            .then((res) => {
                console.log(res.data);
                alert("departnment deleted");
                setDepartments(prevDepartments => prevDepartments.filter(department => department.departmentId !== departmentId));
            })
            .catch((error) => {
                console.error('Error deleting department:', error);
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
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <section>
                            <div className="table-responsive col-lg-12">
                                <table className='table table-striped text-center table-light table-hover table-borderless'>
                                    <thead className='table-dark'>
                                        <tr>
                                            <th>Sr. No.</th>
                                            <th>Department Id</th>
                                            <th>Department Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {departments.filter((value) => {
                                            if (searchTitle === "") {
                                                return value;
                                            } else if (
                                                value.departmentName.toLowerCase().includes(searchTitle.toLowerCase()) ||
                                                value.departmentId.toLowerCase().includes(searchTitle.toLowerCase())
                                            ) {
                                                return value;
                                            }
                                        }).map((item, index) => (
                                            <tr key={index}>
                                                <th scope='row'>{index + 1}</th>
                                                <td>{item.departmentId}</td>
                                                <td>{item.departmentName}</td>
                                                <td>
                                                    <button className='btn btn-warning' onClick={() => updateDepartment(item.departmentId)}>Edit</button>
                                                    <button className='btn btn-danger ms-2' onClick={() => deleteDepartment(item.departmentId)}>Delete</button>
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
