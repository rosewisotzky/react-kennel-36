import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    componentDidMount() {
        console.log("Employee LIST: ComponentDidMount");
        //getAll from EmployeeManager and hang on to that data; put it in state
        LocationManager.getAll()
            .then((locations) => {
                this.setState({
                    locations: locations
                })
            })
    }
    deleteLocation = id => {
        LocationManager.delete(id)
            .then(() => {
                LocationManager.getAll()
                    .then((newLocations) => {
                        this.setState({
                            locations: newLocations
                        })
                    })
            })
    }
    render() {
        console.log("LocationList: Render");
        console.log("state", this.state)
        return (
            <>
                <section className="section-content">
                </section>
                <div className="container-cards">
                    {this.state.locations.map(location =>
                        <LocationCard
                            key={location.id}
                            locationLocation={location}
                            deleteLocation={this.deleteLocation}
                            {...this.props}

                        />
                    )}
                </div>
            </>
        )
    }
}

export default LocationList
