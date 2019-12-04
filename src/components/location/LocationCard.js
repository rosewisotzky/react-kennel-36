import React, { Component } from 'react'
import { Link } from "react-router-dom";

// import './Animal.css'

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Address:</h3>
                    <p>{this.props.locationLocation.address}</p>
                    <Link to={`/locations/${this.props.locationLocation.id}`}><button>Details</button></Link>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/locations/${this.props.locationLocation.id}/edit`) }}>Edit</button>
                    <button type="button" onClick={() => this.props.deletelocation(this.props.locationLocation.id)}>Discharge</button>
                </div>
            </div>
        );
    }
}

export default LocationCard;