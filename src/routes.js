import React from 'react'
import { Route, Router, browserHistory } from 'react-router'
import Root from './containers/Root'
import App from './RouteHandlers/App'

export default (
    <Router history = {browserHistory}>
        <Route path="/" component = {Root}>
            <Route path="counter" component = {App} />
        </Route>
    </Router>
)