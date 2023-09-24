// EmployeeList.js
import React, { useEffect, useState } from 'react';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7286/api/Employee/all')
            .then((response) => response.json())
            .then((data) => setEmployees(data));
    }, []);

    return (
<div>
    <h1>Employee List</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Department</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((employee) => (
                <tr key={employee.employeeID}>
                    <td>{employee.employeeID}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNumber}</td>
                    <td>{employee.department}</td>
                    <td>{employee.salary}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    );
};

export default EmployeeList;
