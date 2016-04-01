import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <ul>
                <li className="menu-item">
                    <Link to="/employee" activeClassName="active">Employees</Link>
                </li>
                <li className="menu-item">
                    <Link to="/project" activeClassName="active">Project</Link>
                </li>
            </ul>
        )
    }
}

export default Menu