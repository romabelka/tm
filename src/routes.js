import React from 'react'
import { Route, Router, IndexRoute, IndexRedirect, browserHistory, hashHistory } from 'react-router'
import Root from './RouteHandlers/Root'
import ProjectIndex from './RouteHandlers/Project'
import ProjectDetails from './RouteHandlers/Project/Details'
import ProjectIndexPage from './RouteHandlers/Project/IndexPage'
import EmployeeIndex from './RouteHandlers/Employee'
import EmployeeDetails from './RouteHandlers/Employee/Details'
import EmployeeIndexPage from './RouteHandlers/Employee/IndexPage'
import NotFound from './RouteHandlers/NotFound'
import { markEmployeeAsRead } from './actions/employees'
import { markProjectAsRead } from './actions/projects'
import { fetchAll } from './actions/common'
import store from './store'

export default (
    <Router history = {hashHistory}>
        <Route path = "/" component = {Root} onEnter = {() => store.dispatch(fetchAll())}>
            <IndexRedirect to = "project" />
            <Route path = "employee" component = {EmployeeIndex}>
                <IndexRoute component = {EmployeeIndexPage} />
                <Route path = ":id" component = {EmployeeDetails}
                    onEnter = {({ params: {id} }) => store.dispatch(markEmployeeAsRead(id))}
                />
            </Route>
            <Route path = "project" component = {ProjectIndex}>
                <IndexRoute component = {ProjectIndexPage} />
                <Route path = ":id" component = {ProjectDetails}
                   onEnter = {({ params: {id} }) => store.dispatch(markProjectAsRead(id))}
                />
            </Route>
        </Route>
        <Route path = "*" component = {NotFound}/>
    </Router>
)