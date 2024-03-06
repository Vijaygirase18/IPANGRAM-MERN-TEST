// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Employee.css';

// const Employee = ({ employeeId, employeeName }) => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 let url = 'http://localhost:4000/getemployee';
//                 // Construct the URL based on provided parameters
//                 if (employeeId && !employeeName) {
//                     url += `?eId=${employeeId}`;
//                 } else if (!employeeId && employeeName) {
//                     url += `?eName=${employeeName}`;
//                 } else if (employeeId && employeeName) {
//                     url += `?eId=${employeeId}&eName=${employeeName}`;
//                 }

//                 const response = await axios.get(url);
//                 setData(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, [employeeId, employeeName]); // Include employeeId and employeeName in the dependency array

//     return (
//         <div className="employee-dashboard">  
//             <h1>Employee Dashboard</h1>
//             <table className="employee-table">
//                 <thead>
//                     <tr>
//                         <th>Employee ID</th>
//                         <th>Name</th>
//                         <th>Department</th>
//                         <th>Location</th>
//                         {/* Add more table headers as needed */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item) => (
//                         <tr key={item.eId}>
//                             <td>{item.eId}</td>
//                             <td>{item.eName}</td>
//                             <td>{item.department}</td>
//                             <td>{item.location}</td>
//                             {/* Add more table cells for additional data */}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Employee;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make a GET request to your backend endpoint
                const response = await axios.get('/getEmployeesSorted', {
                    params: {
                        sortBy: 'name'|| 'location', 
                        order: 'asc'|| 'desc'    
                    }
                });

                setEmployees(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching employee data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee._id}>
                            <td>{employee.eId}</td>
                            <td>{employee.eName}</td>
                            <td>{employee.department}</td>
                            <td>{employee.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;

