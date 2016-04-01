import React from 'react'
import { Route, Router, IndexRoute, IndexRedirect, browserHistory, hashHistory } from 'react-router'
import Root from './RouteHandlers/Root'
import ProjectIndex from './RouteHandlers/Project'
import ProjectDetails from './RouteHandlers/Project/Details'
import EmployeeIndex from './RouteHandlers/Employee'
import EmployeeDetails from './RouteHandlers/Employee/Details'
import NotFound from './RouteHandlers/NotFound'

export default (
    <Router history = {browserHistory}>
        <Route path = "/" component = {Root}>
            <IndexRedirect to = "project" />
            <Route path = "employee" component = {EmployeeIndex}>
                <Route path = ":id" component = {EmployeeDetails}/>
            </Route>
            <Route path = "project" component = {ProjectIndex}>
                <Route path = ":id" component = {ProjectDetails}/>
            </Route>
        </Route>
        <Route path = "*" component = {NotFound}/>
    </Router>
)