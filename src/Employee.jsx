import React from 'react'
import Err from './Err'
const Employee = ({employees,deleteEmployee}) => {  
       
   const employeeList = employees.map(employee => { 
       if(employee.name && employee.age && employee.address && employee.department && employee.salary){   
        return (
                    <tbody className="bg-warning">
                        <tr key={employee.id}>
                            <th scope="row">1</th>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.address}</td>
                            <td>{employee.department}</td>
                            <td>{employee.salary}</td>
                            <a href="#" className="text-danger fw-bold"><td onClick={()=>{deleteEmployee(employee.id)}}>X</td></a>
                        </tr>
                    </tbody>   
        )}
        else{
            return(
                
                <Err err="*All fields are mandatory.."/>
                
            )
        }
         })
   
    return(
        <>
            <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Address</th>
                            <th scope="col">Deparment</th>
                            <th scope="col">Salary</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
            {employeeList}
        </>
    )

}
export default Employee;

