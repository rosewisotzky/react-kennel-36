import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class LocationDetail extends Component {

    state = {
        address: "",
        loadingStatus: true,
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from LocationManager and hang on to that data; put it into state
        LocationManager.get(this.props.locationId)
            .then((locationLocation) => {
                this.setState({
                    address: locationLocation.address,
                    loadingStatus: false
                });
            });
    }
    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({ loadingStatus: true })
        LocationManager.delete(this.props.locationId)
            .then(() => this.props.history.push("/locations"))
    }

    render() {
        console.log("props", this.props)
        console.log("state", this.state)
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.address}</span></h3>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
                    
                </div>
            </div>
        );
    }
}

export default LocationDetail;