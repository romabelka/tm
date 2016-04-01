import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <ul>
                <li><Link to="/employee" activeClassName="active">Employees</Link></li>
                <li><Link to="/project" activeClassName="active">Project</Link></li>
            </ul>
        )
    }
}

export default Menu