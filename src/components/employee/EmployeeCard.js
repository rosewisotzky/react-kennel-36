import React, { Component } from 'react'
import { Link } from "react-router-dom";

// import './Animal.css'

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Name: <b>{this.props.employee.name}</b></h3>
                    <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/edit`) }}>Edit</button>
                    <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Discharge</button>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;