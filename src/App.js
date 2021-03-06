import React, { Component } from 'react'
import AddEmployee from './AddEmployee'
import './App.css'
import Button from './Button'
import Employee from './Employee'



class App extends Component {
  state = {
    employees: [
      { name: "Soumya", age: 28, address: "Cuttack", department: "Production", salary: 30000, id: 1 },
      { name: "Sibananda", age: 25, address: "Balesore", department: "Devloper", salary: 40000, id: 2 },
      { name: "Jiten", age: 26, address: "Bhubaneswar", department: "Devloper", salary: 35000, id: 3 }
    ]
  }

  addEmployee = (employee) => {
    employee.id = Math.random();
    let employees = [...this.state.employees, employee]
    this.setState({
      employees: employees
    })

  }
  deleteEmployee = (id) => {
    let employees = this.state.employees.filter(employee => {
      return employee.id !== id
      // console.log(employee.id)
    })
    this.setState({
      employees: employees
    })
  }
  sortSalary = (salary) => {
    let employees = this.state.employees.sort((a, b) => {
      return (a.salary - b.salary);
    })
    this.setState({
      employees: employees
    })
  }
  filterDep=(department)=>{ 
    let employees=this.state.employees.filter(employee=>{
      return employee.department==department
    })
  this.setState({
    employees:employees
  })
} 

  render() {
    return (
      <div className="App">
        <AddEmployee addEmployee={this.addEmployee} />
        <div className="d-flex justify-content-end m-2">
          <Button sortSalary={this.sortSalary} filterDep={this.filterDep}/>
          {/* <button onClick={this.sortSalary} type="button" class="btn btn-dark mx-2">Sort Salary</button> */}
        </div>
        <table className="table text-center"><Employee err="Please fill all the fields" deleteEmployee={this.deleteEmployee} employees={this.state.employees} /></table>
      </div>
    )
  }
}

export default App


