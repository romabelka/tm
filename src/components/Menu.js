import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <ul>
                <li><Link to="/employee" activeClass="active">Employees</Link></li>
                <li><Link to="/project" activeClass="active">Project</Link></li>
            </ul>
        )
    }
}

export default Menu