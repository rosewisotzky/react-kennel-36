import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetails'
import LocationList from './location/LocationList'
import Login from './auth/Login'
import LocationDetail from "./location/LocationDetail"


//only include these once they are built - previous practice exercise
// import LocationCard from './location/LocationCard'
// import EmployeeCard from './employee/EmployeeCard'
// import OwnerCard from './owner/OwnerCard'


class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail
            animalId={parseInt(props.match.params.animalId)}
            {...props}
          />
        }} />
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
        }}
        />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route exact path="/employees" render={props => {
          if (this.isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeDetail
            employeeId={parseInt(props.match.params.employeeId)}
            {...props}
          />
        }} />
        <Route exact path="/locations" render={props => {
          if (this.isAuthenticated()) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail
            locationId={parseInt(props.match.params.locationId)}
            {...props}
            />
        }} />

        <Route path="/login" component={Login} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews
