import React, { Component } from 'react'

class AddEmployee extends Component {
    state = {
        name: null,
        age: null,
        address: null,
        department: null,
        salary: null
    }
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.id]:e.target.value
            
        })
        console.log(this.state)
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addEmployee(this.state)
        this.setState({
            name:'',
            age:'',
            address:'',
            department:'',
            salary:'',
        })
        // console.log(this.state)
    }
    render() {
        return (
            <div>
                <div className="card text-center bg-dark">
                    <div className="card-header text-light fw-bold">
                        Enter Employee Details
                    </div>
                    <div className="card-body bg-success">
                        <form className="mt-2" onSubmit={this.handleSubmit}>
                            <div className="row m-3">
                                <div className="col">
                                    <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" id="age" placeholder="Age" onChange={this.handleChange} value={this.state.age}/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" id="address" placeholder="Address" onChange={this.handleChange} value={this.state.address}/>
                                </div>
                            </div>
                            <div className="row m-3">
                                <div className="col">
                                    <input type="text" className="form-control" id="department" placeholder="Department" onChange={this.handleChange} value={this.state.department}/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" id="salary" placeholder="Salary" onChange={this.handleChange} value={this.state.salary}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary my-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddEmployee;


