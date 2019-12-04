import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';

class EmployeeDetail extends Component {

    state = {
        name: "",
        loadingStatus: true,
    }

    componentDidMount() {
        console.log("EmployeeDetail: ComponentDidMount");
        //get(id) from EmployeeManager and hang on to that data; put it into state
        EmployeeManager.get(this.props.employeeId)
            .then((employee) => {
                this.setState({
                    name: employee.name,
                    loadingStatus: false
                });
            });
    }
    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({ loadingStatus: true })
        EmployeeManager.delete(this.props.employeeId)
            .then(() => this.props.history.push("/employees"))
    }

    render() {
        console.log("props", this.props)
        console.log("state", this.state)
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
                    
                </div>
            </div>
        );
    }
}

export default EmployeeDetail;